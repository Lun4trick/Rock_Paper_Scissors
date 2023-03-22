import options from '@/app/resources/options'
import cn from 'classnames'
import { OptionType } from '@/app/resources/Types/optionType'
import { Option } from '../Option'

type Props = {
  onChoose: (playerChoice: OptionType) => void,
  isEndOfRound: boolean,
}

export const PlayGround: React.FC<Props> = ({ onChoose, isEndOfRound }) => {
  return (
    <section 
      className={cn(
        'mx-auto w-fit transition-all duration-500', 
        {'h-[300px] max-h-fit': !isEndOfRound},
        {'h-0 opacity-0 invisible': isEndOfRound},
      )}
    >
      <div className="flex flex-col bg-triangle bg-no-repeat bg-contain bg-center w-fit">
        <div className='flex gap-10 z-10 -mt-12'>
          <Option option={options.paper} onChoose={onChoose} />
          <Option option={options.scissors} onChoose={onChoose} />
        </div>
        <div className='flex justify-center'>
          <Option option={options.rock} onChoose={onChoose} />
        </div>
      </div>
    </section>
  )
}