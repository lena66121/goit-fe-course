// TASK 1

let input;
const numbers = [];
let total = 0;

while (true) {
  input = prompt('Введите число');
  if (input === null) {
    break;
  } else if (isNaN(input) || input === '')  {
    alert('Было введено не число, попробуйте еще раз');
  } else {
  numbers.push(Number(input));
  }
}

for (let i = 0, max = numbers.length; i < max; i += 1) {
    if (numbers.length === 2) {
    total = numbers[0] + numbers[1];
    console.log(`Общая сумма чисел равна ${total}`);
    break;
    } else if (numbers.length > 2){
    sum = numbers[0] + numbers[1];
    total = sum + numbers[i+1];
    console.log(`Общая сумма чисел равна ${total}`);
    break;
  }
}

// Task 2 

const passwords = ['qwerty', '111qwe', '123123', 'r4nd0mp4zzw0rd'];
let attemptsLeft = 3;
let message;
let i = 0;

  do {
  attemptsLeft -= 1;
  const userPassword = prompt('Введите пароль');

  if (userPassword === null) break;

  passwords.includes(userPassword) ? message = 'Добро пожаловать!' :
  message = `Неверный пароль, у вас осталось ${attemptsLeft} попыток`;
  alert(message);

   if (attemptsLeft === 0) {
    alert('У вас закончились попытки, аккаунт заблокирован!');
  } else if (passwords.includes(userPassword) === true) break;

} while (attemptsLeft >= 1 && attemptsLeft <= 3)






  
  





