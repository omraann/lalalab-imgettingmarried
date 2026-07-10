import { SYSTEM_PROMPTS, buildUserInput } from './prompts';

const API_URL = 'https://api.fireworks.ai/inference/v1/chat/completions';
const MODEL = 'accounts/fireworks/models/kimi-k2p6';

export interface GenerateRequest {
  type: string;
  data: Record<string, string>;
}

export interface GenerateResult {
  success: boolean;
  result?: string;
  error?: string;
}

export async function generate(req: GenerateRequest): Promise<GenerateResult> {
  const apiKey = import.meta.env.VITE_FIREWORKS_API_KEY;
  if (!apiKey) {
    return { success: false, error: 'API key not configured.' };
  }

  const systemPrompt = SYSTEM_PROMPTS[req.type];
  if (!systemPrompt) {
    return { success: false, error: 'Unknown generation type.' };
  }

  const userInput = buildUserInput(req.type, req.data);

  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: MODEL,
        messages: [
          { role: 'system', content: systemPrompt },
          { role: 'user', content: userInput },
        ],
        max_tokens: 4000,
        temperature: 0.8,
      }),
    });

    if (response.status === 401) {
      return { success: false, error: 'Invalid API key. Please check your configuration.' };
    }
    if (response.status === 429) {
      return { success: false, error: 'Too many requests. Please wait a moment and try again.' };
    }
    if (!response.ok) {
      return { success: false, error: `API error (${response.status}). Please try again.` };
    }

    const json = await response.json();
    const result = json.choices?.[0]?.message?.content as string | undefined;

    if (!result) {
      return { success: false, error: 'No response from AI. Please try again.' };
    }

    return { success: true, result };
  } catch {
    return { success: false, error: 'Network error. Please check your connection and try again.' };
  }
}
