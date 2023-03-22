import options from '../options';

export const getComputerChoice = () => {
  const randomNum = Math.floor((Math.random() * 3));
  
  switch (randomNum) {
    case 0:
      return options.paper;
    case 1:
      return options.scissors;
    default: 
      return options.rock;
  }
}