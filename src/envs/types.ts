export interface Envs {
  IsTestNet: boolean;
  BuddyDaoAddress: `0x${string}`;
  Tokens: TokenItem[];
  TokensBDY: TokenItem[];
}

export interface TokenItem {
  label: string;
  address: `0x${string}`;
}
