import readlineSync from 'readline-sync'

const TEXT = {
  YES: 'yes',
  NO: 'no',
  CORRECT: 'Correct!'
};

const arrayAnswers = [TEXT.NO, TEXT.YES];

const number = 10;

const getBoolean = (string) => {
  return string.toLowerCase() === TEXT.YES;
}

const getCorrectAnswer = (num, answer) => {
  const number = !(num % 2);
  return number === answer;
}

const isCorrect = (number, userAnswer) => {
  const answer = getBoolean(userAnswer);
  return getCorrectAnswer(number, answer);
}

export default () => {
  console.log('Welcome to the Brain Games!')

  const userName = readlineSync.question('May I have your name? ')
  console.log(`Hello, ${userName}!`)

  for (let countAnswers = 0; countAnswers < 3;) {
    console.log('Answer "yes" if the number is even, otherwise answer "no".')
    console.log(`Question: ${number}`)
    const numberAnswer = readlineSync.question('Your answer: ')

    if (isCorrect(number, numberAnswer)) {
      console.log(TEXT.CORRECT)
      countAnswers++
    } else {
      countAnswers = 0
      const t = arrayAnswers[!arrayAnswers.indexOf(numberAnswer) + 0]
      console.log(`${numberAnswer} is wrong answer ;(. Correct answer was ${t}. Let's try again, ${userName}!`)
    }
  }
  console.log(`Congratulations, ${userName}!`)
}
