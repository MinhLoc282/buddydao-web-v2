import type { ReadContractResult } from '@wagmi/core';
import { useAccount, useContractRead } from 'wagmi';
import { BuddyDaoAddress } from '@/services/contracts/buddyDao/constants';
import { abi } from '../abi';
import { BigNumber } from 'ethers';

export type TokenPriceResult = ReadContractResult<typeof abi, 'getTokenPrice'>;

export function useTokenPrice(numberOfTokens: BigNumber) {
  const { address: accountAddress } = useAccount();

  let args;
  if (typeof window !== 'undefined' && accountAddress) {
    args = [numberOfTokens] as const;
  }
  const contractEnabled = Boolean(args);

  const readTokenPrice = useContractRead({
    address: BuddyDaoAddress,
    abi,
    functionName: 'getTokenPrice',
    args,
    watch: true,
    enabled: contractEnabled,
  });

  const tokenPrice = readTokenPrice?.data;
  return tokenPrice;
}
