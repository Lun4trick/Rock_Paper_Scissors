import { useCallback, useEffect, useState } from 'react';
import cn from 'classnames';
import { ComparePicks } from './components/ComparePicks';
import { HeaderWithScore } from './components/HeaderAndScore';
import { PlayGround } from './components/PlayGround';
import { RulesModal } from './components/RulesModal';
import { getComputerChoice } from './resources/functions/getComputerChoice';
import { getWinner } from './resources/functions/getWinner';
import { OptionType } from './resources/Types/optionType';
import { WinnerType } from './resources/Types/winnerType';

export const App: React.FC = () => {
  const [score, setScore] = useState(0);
  const [playerChoice, setPlayerChoice] = useState<OptionType | null>(null)
  const [computersChoice, setComputerChoice] = useState<OptionType | null>(null);
  const [isRulesOpen, setIsRulesOpen] = useState(false);
  const isEndOfRound = playerChoice !== null;

  const scoreHandler = useCallback(() => {
    const winner = getWinner(playerChoice as OptionType, computersChoice as OptionType);

    if (winner === WinnerType.PLAYER) {
      setScore((prev) => prev + 1);
    }
    
    if (winner === WinnerType.COMPUTER) {
      setScore((prev) => prev - 1);
    }
  }, [playerChoice, computersChoice]);

  const modalCloseHandler = useCallback(() => {
    setIsRulesOpen(false);
  }, [])

  const playAnotherHandler = useCallback(() => {
    setPlayerChoice(null);
    setComputerChoice(null);
  }, [])

  useEffect(() => {
    const storedScore = JSON.parse(localStorage.getItem('score')!);
    if (storedScore) {
     setScore(storedScore);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('score', JSON.stringify(score))
  }, [score]);

  useEffect(() => {
    const computersChoice = getComputerChoice();
    if(playerChoice) {
      setComputerChoice(computersChoice);
    }
  }, [playerChoice]);

  return (
    <main className='bg-gradient-radial-top p-3 from-[#536597] via-[#162344] to-[#080e1f] py-5 h-screen'>
      <section className={cn(
        {'blur': isRulesOpen},
      )}>
        <HeaderWithScore score={score} />
        <PlayGround 
          onChoose={setPlayerChoice} 
          isEndOfRound={isEndOfRound}
        />
        {(playerChoice && computersChoice) && (
          <ComparePicks 
            playersPick={playerChoice}
            computersPick={computersChoice}
            setPoints={scoreHandler}
            onPlayAnother={playAnotherHandler}
            isEndOfRound={isEndOfRound}
          />
        )}
        <button
          hidden={isRulesOpen}
          className='uppercase absolute sm:bottom-10 sm:right-10 bottom-2 right-2 bg-slate-300 p-3 rounded-2xl hover:bg-gradient-to-b hover:from-slate-300 hover:to-slate-500 shadow-lg'
          onClick={() => {
            setIsRulesOpen(true);
          }}
        >
          rules
        </button>
      </section>
        {isRulesOpen && (
          <RulesModal onModalClose={modalCloseHandler} isModalOpen={isRulesOpen} />
        )}
    </main>
  );
};