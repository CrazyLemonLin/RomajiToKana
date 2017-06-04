import { wanakanaOptions } from './wanakana';

export interface wanakana {
  isHiragana: (text: string) => boolean;
  isKana: (text: string) => boolean;
  isKatakana: (text: string) => boolean;
  toHiragana(text: string, options?: wanakanaOptions);
  toKana(text: string, options?: wanakanaOptions);
  toKatakana(text: string, options?: wanakanaOptions);
  toRomaji(text: string, options?: wanakanaOptions);
}
export interface wanakanaOptions {
  useObsoleteKana: boolean;
  IMEMode: boolean;
}
