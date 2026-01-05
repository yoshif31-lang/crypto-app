const API_KEYS: Record<string, string | undefined> = {
  luna: process.env.NEXT_PUBLIC_DIFY_API_KEY_1,
  nagi: process.env.NEXT_PUBLIC_DIFY_API_KEY_2,
  gamma: process.env.NEXT_PUBLIC_DIFY_API_KEY_3,
  delta: process.env.NEXT_PUBLIC_DIFY_API_KEY_4,
  epsilon: process.env.NEXT_PUBLIC_DIFY_API_KEY_5,
};

export const sendMessageToDify = async (unitId: string, message: string) => {
  const apiKey = API_KEYS[unitId];
  if (!apiKey) throw new Error(`API key for ${unitId} is not set`);

  const response = await fetch('https://api.dify.ai/v1/chat-messages', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      inputs: {},
      query: message,
      response_mode: 'blocking',
      user: 'genesis-user',
    }),
  });
  return response.json();
};
