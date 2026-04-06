export interface LiferayConfig {
  url: string;
  username: string;
  password: string;
}

export interface Tool {
  name: string;
  description: string;
  schema: object;
  handler: (args: Record<string, unknown>) => Promise<unknown>;
}
