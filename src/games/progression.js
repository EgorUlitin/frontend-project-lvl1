import getRandomNumber from '../getRandomNumber.js';
import newGame from '../index.js';

const question = 'What number is missing in the progression?';

const getRightAnwser = () => {
  const lenght = getRandomNumber(7, 10);
  const step = getRandomNumber(2, 5);
  const firstNumber = getRandomNumber(1, 100);
  const result = [firstNumber];
  const hiddenPosition = getRandomNumber(1, lenght);
  for (let i = 0; i < lenght; i += 1) {
    result.push(result[i] + step);
  }
  const rightAnswer = result[hiddenPosition];
  result[hiddenPosition] = '..';
  return [result.join(' '), rightAnswer.toString()];
};

const gameProgression = () => newGame(question, getRightAnwser);

export default gameProgression;
