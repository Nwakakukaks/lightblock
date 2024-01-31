export enum Blockchains {
  None = '',
  Lightlink = 'Lightlink',
}

export const BlockchainLabelMap = new Map<Blockchains, string>([
  [Blockchains.None, ''],
  [Blockchains.Lightlink, 'Lightlink'],
]);

export const getBlockchainLabel = (
  blockchain: Blockchains,
): string | undefined => BlockchainLabelMap.get(blockchain);

export const getBlockchainBySlug = (slug: string): Blockchains => {
  switch (slug) {
    case 'lightlink':
      return Blockchains.Lightlink;
    default:
      return Blockchains.None;
  }
};
