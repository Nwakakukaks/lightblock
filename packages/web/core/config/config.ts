export interface AppConfig {
  environment: string;
  jwtSecret: string;
  mainnetUrl: string;
  testnetUrl: string;
}

export const Config: AppConfig = {
  environment: process.env.NEXT_PUBLIC_ENVIRONMENT || 'testnet',
  jwtSecret: process.env.JWT_SECRET || 'jwtsecret',
  mainnetUrl: '',
  testnetUrl: '',
};
