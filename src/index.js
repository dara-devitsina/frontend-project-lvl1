import readlineSync from 'readline-sync';

import pkg from '@hexlet/pairs';

const { car, cdr } = pkg;

// const welcome = 'Welcome to the Brain Games!';
// const name = readlineSync.question('May I have your name? ');
// const welcome = `Hello, ${name}!`;

const gameFlow = (description, getGameData) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(description);

  const roundsCount = 3;
  for (let i = 0; i < roundsCount; i += 1) {
    const currentParams = getGameData();
    const task = car(currentParams);
    const answer = cdr(currentParams);
    const userAnswer = readlineSync.question(`Question: ${task}\nYour answer: `);
    if (userAnswer === answer) {
      console.log('Correct!');
    } else {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${answer}".`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

export default gameFlow;
