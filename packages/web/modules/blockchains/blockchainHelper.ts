import { Blockchains } from '@core/enums/blockchains';
import { Networks } from './lightlink/providers/walletProvider';

const blockchainNetworks = {
  testnet: {
    [Blockchains.Lightlink]: Networks.Testnet,
  },
  mainnet: {
    [Blockchains.Lightlink]: Networks.Mainnet,
  },
};

export const getBlockchainNetwork = (
  blockchain: Blockchains,
  environment: string,
): Networks | null => {
  return blockchainNetworks[environment]?.[blockchain] || null;
};

const blockchainNetworkLabels = {
  testnet: {
    [Blockchains.Lightlink]: 'Lightlink Pegasus',
  },
  mainnet: {
    [Blockchains.Lightlink]: 'Lightlink Phoenix',
  },
};

export const getBlockchainNetworkLabel = (
  blockchain: Blockchains,
  environment: string,
): string => {
  return blockchainNetworkLabels[environment]?.[blockchain] || '';
};
