'use strict';

// Task 1

const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];


// The function to valid the length of the login 
const isLoginValid = login => {
  return (login.length >= 4 && login.length <= 16);
};



// The function to valid the unique of the login 
const isLoginUnique = (allLogins, login) => {
  return (allLogins.includes(login));
};


//The function that pushes verified logins to array
const addLogin = (allLogins, login) => {
  if (!isLoginValid(login)) return 'Ошибка! Логин должен быть от 4 до 16 символов';
  if (isLoginUnique(allLogins, login)) return 'Такой логин уже используется!';
  logins.push(login);
  
  return 'Логин успешно добавлен!';
};


// Вызовы функции для проверки
console.log(addLogin(logins, 'Ajax')); // 'Логин успешно добавлен!'
console.log(addLogin(logins, 'robotGoogles')); // 'Такой логин уже используется!'
console.log(addLogin(logins, 'Zod')); // 'Ошибка! Логин должен быть от 4 до 16 символов'
console.log(addLogin(logins, 'jqueryisextremelyfast')); // 'Ошибка! Логин должен быть от 4 до 16 символов'
