import type { ReadContractResult } from '@wagmi/core';
import { useAccount, useContractRead } from 'wagmi';
import { BuddyDaoAddress } from '@/services/contracts/buddyDao/constants';
import { abiBUSD, abiBDY } from './abi';
import { tokensBDY } from '@/services/tokens';

export type AllowanceResultBUSD = ReadContractResult<typeof abiBUSD, 'allowance'>;
export type AllowanceResultBDY = ReadContractResult<typeof abiBDY, 'allowance'>;

export function useAllowance({ address, enabled = true }: { address?: `0x${string}`; enabled?: boolean }) {
  const { address: accountAddress } = useAccount();

  let args;
  if (typeof window !== 'undefined' && enabled && accountAddress) {
    args = [accountAddress, BuddyDaoAddress] as const;
  }
  const contractEnabled = Boolean(args);

  const readBUSD = useContractRead({
    address,
    abi: abiBUSD,
    functionName: 'allowance',
    args,
    watch: true,
    enabled: contractEnabled,
  });

  const readBDY = useContractRead({
    address: tokensBDY[0].address,
    abi: abiBDY,
    functionName: 'allowance',
    args,
    watch: true,
    enabled: contractEnabled,
  });

  return {
    allowanceBUSD: readBUSD,
    allowanceBDY: readBDY,
  };
}
