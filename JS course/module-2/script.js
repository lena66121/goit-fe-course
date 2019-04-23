// TASK 1

let input;
const numbers = [];
let total = 0;

while (true) {
  input = prompt('Введите число');

  if (input === null) {
    break;
  } 
  
  if (Number.isNaN(Number(input)))  {
    alert('Было введено не число, попробуйте еще раз');
  }  else if (Number.isNaN(Number(input)) === false) {
    numbers.push(Number(input));
  }
  
  
}

for (const number of numbers) {
  total += number
}

if (numbers.length !== 0) {
console.log(`Общая сумма чисел равна ${total}`);
} else {
  alert('Вы не ввели ни одного числа');
}


// Task 2 

// const passwords = ['qwerty', '111qwe', '123123', 'r4nd0mp4zzw0rd'];
// let attemptsLeft = 3;
// let message;

//   do {
//   attemptsLeft -= 1;
//   const userPassword = prompt('Введите пароль');

//   if (userPassword === null) break;
  
//   if (!attemptsLeft) {
//     alert('У вас закончились попытки, аккаунт заблокирован!');
//     break;
//   }

//   message = (passwords.includes(userPassword)) ? 'Добро пожаловать!' :
//   `Неверный пароль, у вас осталось ${attemptsLeft} попыток`;
//   alert(message);
    
// } while (attemptsLeft || passwords.includes(userPassword) === false)






  
  





