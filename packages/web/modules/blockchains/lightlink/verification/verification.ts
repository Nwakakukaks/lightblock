declare let window: any;
import Web3 from 'web3';

export const signSignature = async (message: string): Promise<string> => {
  const ethereum = window.ethereum;
  if (ethereum && ethereum.isMetaMask) {
    const web3 = new Web3(ethereum);
    const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
    const account = accounts[0];
    const signature = await ethereum.request({
      method: 'personal_sign',
      params: [message, account],
    });

    return signature;
  } else {
    return '';
  }
};

export const verifySignature = async (
  message: string,
  signature: string,
  address: string,
): Promise<boolean> => {
  console.log('verifySignature');

  const web3 = new Web3('https://replicator.pegasus.lightlink.io/rpc/v1'); // RPC

  const messageHash = web3.utils.sha3(message);
  const pubKey = web3.eth.accounts.recover(messageHash, signature);
  const signer = web3.utils.toChecksumAddress(pubKey);
  const original = web3.utils.toChecksumAddress(address);

  console.log(`successful verification: ${signer === original}`);
  return signer === original;
};
