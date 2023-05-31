export const abi = [
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_serviceFee',
        type: 'uint256',
      },
      {
        internalType: 'address',
        name: '_serviceFeeAddress',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '_maxFixedRate',
        type: 'uint256',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'constructor',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'previousOwner',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'newOwner',
        type: 'address',
      },
    ],
    name: 'OwnershipTransferred',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: 'account',
        type: 'address',
      },
    ],
    name: 'Paused',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: '_lendAddress',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: '_index',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: '_payAmount',
        type: 'uint256',
      },
    ],
    name: 'Payment',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'recieptor',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'token',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'Redeem',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: '_approveAddress',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: '_index',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: '_cancelAmount',
        type: 'uint256',
      },
    ],
    name: 'ReduceTrust',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint256',
        name: '_oldBase',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: '_newBase',
        type: 'uint256',
      },
    ],
    name: 'SetBaseUnit',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint256',
        name: '_oldFixedRate',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: '_newFixedRate',
        type: 'uint256',
      },
    ],
    name: 'SetMaxFixedRate',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint256',
        name: '_old',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: '_new',
        type: 'uint256',
      },
    ],
    name: 'SetServiceFee',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: '_oldAddress',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'address',
        name: '_newAddress',
        type: 'address',
      },
    ],
    name: 'SetServiceFeeAddress',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint256',
        name: '_oldTimeInternal',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: '_newTimeInternal',
        type: 'uint256',
      },
    ],
    name: 'SetTimeInterval',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: '_address',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'address',
        name: '_token',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'uint256',
        name: '_fixedRate',
        type: 'uint256',
      },
      {
        indexed: true,
        internalType: 'uint256',
        name: '_amount',
        type: 'uint256',
      },
    ],
    name: 'Trust',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: 'account',
        type: 'address',
      },
    ],
    name: 'Unpaused',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: '_lendAddress',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: '_index',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: '_borrowerAmount',
        type: 'uint256',
      },
    ],
    name: 'WithdrawAssets',
    type: 'event',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    name: 'BorrowerArrary',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    name: 'BorrowerBool',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    name: 'BorrowerData',
    outputs: [
      {
        internalType: 'address',
        name: 'Creditors',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'Token',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'FixedRate',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'CreditLine',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'Amount',
        type: 'uint256',
      },
      {
        internalType: 'bool',
        name: 'isCancel',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    name: 'BorrowerIsBool',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    name: 'BorrowerNumber',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_borrowerAddress',
        type: 'address',
      },
    ],
    name: 'GetBorrowerAddress',
    outputs: [
      {
        internalType: 'address[]',
        name: '',
        type: 'address[]',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_borrowerAddress',
        type: 'address',
      },
    ],
    name: 'GetBorrowerAddressLengeth',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_borrowerAddress',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_creditors',
        type: 'address',
      },
    ],
    name: 'GetBorrowerData',
    outputs: [
      {
        components: [
          {
            internalType: 'address',
            name: 'Creditors',
            type: 'address',
          },
          {
            internalType: 'address',
            name: 'Token',
            type: 'address',
          },
          {
            internalType: 'uint256',
            name: 'FixedRate',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'CreditLine',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'Amount',
            type: 'uint256',
          },
          {
            internalType: 'bool',
            name: 'isCancel',
            type: 'bool',
          },
        ],
        internalType: 'struct BuddyDao.Borrower[]',
        name: '',
        type: 'tuple[]',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_borrowerAddress',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_creditors',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '_index',
        type: 'uint256',
      },
    ],
    name: 'GetBorrowerIndexData',
    outputs: [
      {
        components: [
          {
            internalType: 'address',
            name: 'Creditors',
            type: 'address',
          },
          {
            internalType: 'address',
            name: 'Token',
            type: 'address',
          },
          {
            internalType: 'uint256',
            name: 'FixedRate',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'CreditLine',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'Amount',
            type: 'uint256',
          },
          {
            internalType: 'bool',
            name: 'isCancel',
            type: 'bool',
          },
        ],
        internalType: 'struct BuddyDao.Borrower',
        name: '',
        type: 'tuple',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_lenderAddress',
        type: 'address',
      },
    ],
    name: 'GetLenderAddress',
    outputs: [
      {
        internalType: 'address[]',
        name: '',
        type: 'address[]',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_lenderAddress',
        type: 'address',
      },
    ],
    name: 'GetLenderAddressLengeth',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_lenderAddress',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_approveAddress',
        type: 'address',
      },
    ],
    name: 'GetLenderData',
    outputs: [
      {
        components: [
          {
            internalType: 'address',
            name: 'Address',
            type: 'address',
          },
          {
            internalType: 'address',
            name: 'Token',
            type: 'address',
          },
          {
            internalType: 'uint256',
            name: 'FixedRate',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'CreditLine',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'Amount',
            type: 'uint256',
          },
          {
            internalType: 'bool',
            name: 'isCancel',
            type: 'bool',
          },
        ],
        internalType: 'struct BuddyDao.Lender[]',
        name: '',
        type: 'tuple[]',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_lenderAddress',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_approveAddress',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '_index',
        type: 'uint256',
      },
    ],
    name: 'GetLenderIndexData',
    outputs: [
      {
        components: [
          {
            internalType: 'address',
            name: 'Address',
            type: 'address',
          },
          {
            internalType: 'address',
            name: 'Token',
            type: 'address',
          },
          {
            internalType: 'uint256',
            name: 'FixedRate',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'CreditLine',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'Amount',
            type: 'uint256',
          },
          {
            internalType: 'bool',
            name: 'isCancel',
            type: 'bool',
          },
        ],
        internalType: 'struct BuddyDao.Lender',
        name: '',
        type: 'tuple',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    name: 'LenderData',
    outputs: [
      {
        internalType: 'address',
        name: 'Address',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'Token',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'FixedRate',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'CreditLine',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'Amount',
        type: 'uint256',
      },
      {
        internalType: 'bool',
        name: 'isCancel',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    name: 'LenderIsBool',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    name: 'LenderNumber',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'MaxFixedRate',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_approveAddress',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_token',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '_fixedRate',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '_amount',
        type: 'uint256',
      },
    ],
    name: 'NewTrust',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_lendAddress',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '_index',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '_payAmount',
        type: 'uint256',
      },
    ],
    name: 'Pay',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_approveAddress',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '_index',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '_cancelAmount',
        type: 'uint256',
      },
    ],
    name: 'RemoveTrust',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'ServiceFee',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'ServiceFeeAddress',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'StartTimeInterval',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'TimeInterval',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    name: 'TotalBorrowerBool',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    name: 'TotalBorrowerIndexArrary',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_lendAddress',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '_index',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '_borrowerAmount',
        type: 'uint256',
      },
    ],
    name: 'Withdrawal',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'baseYearOrMonth',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_balance',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '_allowBalance',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '_dailyRate',
        type: 'uint256',
      },
    ],
    name: 'calculatingActualInterest',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'pure',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_lendAddress',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_borrower',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '_index',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '_payAmount',
        type: 'uint256',
      },
    ],
    name: 'calculatingInterest',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes',
        name: '',
        type: 'bytes',
      },
    ],
    name: 'checkUpkeep',
    outputs: [
      {
        internalType: 'bool',
        name: 'upkeepNeeded',
        type: 'bool',
      },
      {
        internalType: 'bytes',
        name: '',
        type: 'bytes',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'getTokenPrice',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    name: 'isTotalBorrower',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'owner',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'paused',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes',
        name: '',
        type: 'bytes',
      },
    ],
    name: 'performUpkeep',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'renounceOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_newBaseUnit',
        type: 'uint256',
      },
    ],
    name: 'setBaseUnit',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_maxFixedRate',
        type: 'uint256',
      },
    ],
    name: 'setMaxFixedRate',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_serviceFee',
        type: 'uint256',
      },
    ],
    name: 'setServiceFee',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_newAddress',
        type: 'address',
      },
    ],
    name: 'setServiceFeeAddress',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_newTimeInterval',
        type: 'uint256',
      },
    ],
    name: 'setTimeInterval',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    name: 'totalBorrower',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'newOwner',
        type: 'address',
      },
    ],
    name: 'transferOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
] as const;
