/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/exhaustive-deps */
import cn from 'classnames'
import { getWinner } from '@/app/resources/functions/getWinner'
import { OptionType } from '@/app/resources/Types/optionType'
import { WinnerType } from '@/app/resources/Types/winnerType'
import Image from 'next/image'
import { useEffect, useState } from 'react'

type Props = {
  playersPick: OptionType,
  computersPick: OptionType,
  setPoints: () => void,
  isEndOfRound: boolean,
  onPlayAnother: () => void,
}

export const ComparePicks: React.FC<Props> = ({
  playersPick,
  computersPick,
  setPoints,
  onPlayAnother,
  isEndOfRound,
}) => {
  const [winner, setWinner] = useState<WinnerType>();

  useEffect(() => {
    if(playersPick) {
      const winner = getWinner(playersPick, computersPick);
      setWinner(winner)
    }
  }, [playersPick]);

  useEffect(() => {
    if(winner) {
      setPoints()
      console.log('winnerpoint')
    }
  }, [winner])

  return (
    <section className={cn(
      'flex justify-center gap-8 flex-wrap',
      {'invisible opacity-0': !isEndOfRound},
      )}>
      <div
        className={`order-1 p-10 sm:p-14 w-fit aspect-square bg-white rounded-full border-[15px] sm:border-[30px] border-${playersPick.color}-600 shadow-[inset_0_16px_rgba(0,0,0,0.2)]`}
      >
        <img
          className='aspect-square w-[45px] sm:w-[60px]'
          src={playersPick.icon}
          alt='rock'
        />
      </div>
      <div className='flex flex-col items-center gap-10 justify-center h-fit p-5 sm:order-2 order-last'>
        <p className='text-slate-300 uppercase font-bold text-5xl text-center'>
          {winner}
        </p>
        <button
          type='button'
          className='w-full text-3xl p-1 bg-gradient-to-b from-slate-500 to-slate-600 rounded-xl text-slate-300 shadow-xl hover:from-slate-600 hover:to-slate-500'
          onClick={onPlayAnother}
        >
          Play Again
        </button>
      </div>
      <div
        className={`p-10 order-3 sm:p-14 w-fit aspect-square bg-white rounded-full border-[15px] sm:border-[30px] border-${computersPick.color}-600 shadow-[inset_0_16px_rgba(0,0,0,0.2)]`}
      >
        <img
          className='aspect-square w-[45px] sm:w-[60px]'
          src={computersPick.icon}
          alt='rock'
        />
      </div>
    </section>
  )
}