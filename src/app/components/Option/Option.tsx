/* eslint-disable @next/next/no-img-element */
import { OptionType } from '@/app/resources/Types/optionType';
import Image from 'next/image';

type Props = {
  option: OptionType
  onChoose: (playerChoice: OptionType) => void
}

export const Option: React.FC<Props> = ({ option, onChoose }) => (
  <button
    onClick={() => {
      onChoose(option)
    }}
    className={`p-10 w-fit bg-white rounded-full border-[15px] sm:border-[30px] border-${option.color}-600 shadow-[inset_0_8px_rgba(0,0,0,0.2)] hover:drop-shadow-[0px_0px_20px_rgba(255,255,255,0.5)] hover:scale-125 transition-all duration-300`}
  >
    <img
      className='aspect-square w-[45px] sm:w-[60px]'
      src={option.icon}
      alt='rock'
    />
  </button>
);