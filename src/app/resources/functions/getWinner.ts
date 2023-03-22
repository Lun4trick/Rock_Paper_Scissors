import { OptionType } from '../Types/optionType';
import { WinnerType } from '../Types/winnerType';

export const getWinner: 
  (playersPick: OptionType, computersPick: OptionType) => WinnerType = (
    playersPick, computersPick
    ) => {
  switch (playersPick.beats) {
    case computersPick.name:
      return WinnerType.PLAYER;
    case computersPick.beats:
      return WinnerType.TIE;
    default:
      return WinnerType.COMPUTER;
  }
};