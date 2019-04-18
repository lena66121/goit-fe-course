// TASK 3


  let country = prompt('Укажите страну доставки');
  const costOfDeliveryToChina = 100;
  const costOfDeliveryToSouthAmerica = 250;
  const costOfDeliveryToAustralia = 170;
  const costOfDeliveryToIndia = 80;
  const costOfDeliveryToJamaica = 120;

  if (country === null) {
    alert('До новых встреч!')
  } else {
  switch(country.toLowerCase()) {
      case 'китай': 
      console.log(`Доставка в ${country} будет стоить ${costOfDeliveryToChina} кредитов`);;
       break;
      case 'южная америка':
      console.log(`Доставка в ${country} будет стоить ${costOfDeliveryToSouthAmerica} кредитов`);
       break;
      case 'австралия': 
      console.log(`Доставка в ${country} будет стоить ${costOfDeliveryToAustralia} кредитов`);
       break;
      case 'индия': 
      console.log(`Доставка в ${country} будет стоить ${costOfDeliveryToIndia} кредитов`);
       break;
      case 'ямайка': 
      console.log(`Доставка в ${country} будет стоить ${costOfDeliveryToJamaica} кредитов`);
       break;
      default:
      console.log('В вашей стране доставка не доступна.');
  }
}
  


// TASK 2 

  let credits = 23580;
  const pricePerDroid = 3000;
  let quantityOfDroid = prompt('Введите количество дроидов');
  let totalPrice = quantityOfDroid * pricePerDroid;
  
  if (quantityOfDroid === null) {
      console.log('Отменено пользователем!');
  } else if (totalPrice > credits) {
    console.log('Недостаточно средств на счету!');
  } else {
      alert(`Вы купили ${quantityOfDroid} дроидов, на счету осталось ${credits - totalPrice} кридитов.`);
  } 

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
  





