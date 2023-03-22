/* eslint-disable @next/next/no-img-element */
import cn from 'classnames';

type Props = {
  onModalClose: () => void,
  isModalOpen: boolean,
}
export const RulesModal: React.FC<Props> = ({ onModalClose, isModalOpen }) => (
  <div className='flex fixed top-0 h-screen w-screen bg-opacity-40 bg-black'>
    <div 
    className={cn(
      'fixed top-0 left-0 w-full h-full sm:w-fit sm:h-fit sm:absolute sm:top-[50%] sm:left-[50%] sm:-translate-x-1/2 sm:-translate-y-1/2 z-40',
      'p-8 rounded-xl',
      'bg-slate-200'
    )}
  >
    <div className='flex justify-between mb-10'>
      <p className='uppercase text-sky-900 font-semibold text-4xl'>rules</p>
      <button 
        type='button' 
        onClick={onModalClose}
      >
        <img
          className='aspect-square h-[20px]'
          src="./assets/images/icon-close.svg" 
          alt="close" 
        />
      </button>
    </div>
    <img
      className='p-10 mx-auto'
      src="./assets/images/image-rules.svg" 
      alt="rules" 
    />
  </div>
  </div>
);