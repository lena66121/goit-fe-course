// TASK 3


/*  let country = prompt('Укажите страну доставки');
  let costOfDeliveryToChina = 100;
  let costOfDeliveryToSouthAmerica = 250;
  let costOfDeliveryToAustralia = 170;
  let costOfDeliveryToIndia = 80;
  let costOfDeliveryToJamaica = 120;
  let value;


  if (country === null) {       //check on cancellation
    alert('До новых встреч!');
  } 

  country = country.toLowerCase();

  if (country !== null) {
  switch(country) {
      case 'китай': 
      value = `Доставка в ${country} будет стоить ${costOfDeliveryToChina} кредитов`;
       break;
      case 'южная америка':
      value = `Доставка в ${country} будет стоить ${costOfDeliveryToSouthAmerica} кредитов`;
       break;
      case 'австралия': 
      value = `Доставка в ${country} будет стоить ${costOfDeliveryToAustralia} кредитов`;
       break;
      case 'индия': 
      value = `Доставка в ${country} будет стоить ${costOfDeliveryToIndia} кредитов`;
       break;
      case 'ямайка': 
      value = `Доставка в ${country} будет стоить ${costOfDeliveryToJamaica} кредитов`;
       break;
      default:
      console.log('В вашей стране доставка не доступна.');
  }
  alert(value);
  } */


// TASK 2 

 /* let credits = 23580;
  const pricePerDroid = 3000;
  let quantityOfDroid = prompt('Введите количество дроидов');
  let totalPrice = quantityOfDroid * pricePerDroid;
  let balance = credits - totalPrice;
  
  if (quantityOfDroid === null) {
      console.log('Отменено пользователем!');
  } else if (totalPrice > credits) {
    console.log('Недостаточно средств на счету!');
  } else {
      alert(`Вы купили ${quantityOfDroid} дроидов, на счету осталось ${balance} кридитов.`);
  } */

  // TASK 1

  let message;
  let question = prompt('Введите пароль');
  const ADMIN_PASSWORD = 'm4ng0h4ckz';

  if (question === null) {
      message = 'Отменено пользователем!';
  } else if (question === ADMIN_PASSWORD) {
      message = 'Добро пожаловать!';
  } else {
      message = 'Доступ запрещен, неверный пароль!';
  } 
    alert(message);
  





