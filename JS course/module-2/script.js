// TASK 1

let input;
const numbers = [];
let total = 0;

while (true) {
  input = prompt('Введите число');

  if (input === null) {
    break;
  } 
  
  if (!Number.isNaN(Number(input)))  {
    numbers.push(Number(input));
  }  else  {
    alert('Было введено не число, попробуйте еще раз');
  }
}


if (numbers.length === 0) {
  alert('Вы не ввели ни одного числа');
  } else {
    for (const number of numbers) {
      total += number
    }
    console.log(`Общая сумма чисел равна ${total}`);
  }



// Task 2 

const passwords = ['qwerty', '111qwe', '123123', 'r4nd0mp4zzw0rd'];
let attemptsLeft = 3;

  do {
  
  const userPassword = prompt('Введите пароль');

  attemptsLeft -= 1;
  if (userPassword === null) break;
  
  if (!attemptsLeft) {
    alert('У вас закончились попытки, аккаунт заблокирован!');
    break;
  } else if (passwords.includes(userPassword) === true) {
    alert('Добро пожаловать!');
    break;
  } else {
    alert(`Неверный пароль, у вас осталось ${attemptsLeft} попыток`);
  }
    
} while (attemptsLeft)








  
  





