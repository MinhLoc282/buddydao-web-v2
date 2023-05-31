import type { AbiParams } from '@/abis';
import { useContractWrite, usePrepareContractWrite, useWaitForTransaction } from 'wagmi';
import { mapValue } from '@/abis';
import { useAsyncData } from '@/hooks/useAsyncData';
import { abiBUSD, abiBDY } from './abi';
import { tokensBDY } from '@/services/tokens';

export function useApprove({ address, enabled = true }: { address?: `0x${string}`; enabled?: boolean }) {
  let abi;

  if (address === tokensBDY[0].address) {
    abi = abiBDY;
  } else {
    abi = abiBUSD;
  }

  const {
    state,
    state: { args },
    reset,
    submit,
    getPrepareContractWriteOptions,
    getContractWriteOptions,
    getWaitForTransactionOptions,
  } = useAsyncData<AbiParams<typeof abi, 'approve'>>({ enabled });

  const writeArgs = args ? mapValue(args) : undefined;

  const prepareContractWrite = usePrepareContractWrite({
    address,
    abi,
    functionName: 'approve',
    ...getPrepareContractWriteOptions({ args: writeArgs }),
  });

  const contractWrite = useContractWrite(getContractWriteOptions(prepareContractWrite));

  const waitForTransacttion = useWaitForTransaction(getWaitForTransactionOptions(contractWrite));

  return { reset, submit, waitForTransacttion, ...state };
}