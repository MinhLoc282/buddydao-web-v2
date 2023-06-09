import { Tokens, TokensBDY } from '@/envs';
export const tokens = Tokens;
export const tokensBDY = TokensBDY;

export function getTokenName(address: `0x${string}`) {
  return tokens.find((token) => token.address === address)?.label;
}
