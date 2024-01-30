//1 zadacha
// function delay(ms) {
//   // ваш код
//   return new Promise(function (resolve, reject) {
//     setTimeout(() => {
//       resolve();
//     }, ms);
//   });
// }

// delay(3000).then(() => alert("выполнилось через 3 секунды"));

//2 zadacha
// let promise = new Promise(function (resolve, reject) {
//   resolve(1);

//   setTimeout(() => resolve(2), 1000);
// });

// promise.then(alert);
// выведет- "1" сразу же после обновления страницы
//  так как не задана секунда как у "2", и можно толькол один раз
// вызвать resolve либо reject

//3 zadacha
promise.then(f1).catch(f2);
promise.then(f1, f2);
// код не одинаковый, первый - f1 и null = ошибка, второй просто f1 и f2
