import { Config } from '@core/config/config';
import { Environments } from '@core/enums/environments';

export const getGATrackingId = (): string => {
  const mainnetTrackingId = 'G-W7FG9D1W1X';
  const testnetTrackingId = 'G-4BVFN4FPYH';

  return Config.environment === Environments.Mainnet
    ? mainnetTrackingId
    : testnetTrackingId;
};
