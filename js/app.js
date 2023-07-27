console.log('Hi from Node.js!!!')

// node app.js - щоб подивитись консоль, не запускаючи браузер

// npm -v - посмотреть версию npm 
// npm - єто приложение, которое дает возможность подключать библиотеки 
// npm init - в проекте делается один раз и эта команда инициализирует npm  в текущей папке (проекте)
// About to write to D:\Demorepositori\goit-js-module-08-repeta\goit-js-module-08-repeta\package.json: єта фраза говорит, что сейчас будет установлен package.json в мою программу
// Is this OK? (yes) - нажимаем  у - и package.json будет установлен
// npm init -y -- сразу создаст package.json без проклацивания по пунктам
// npm instal Name.. ще можна записати так npm i ім'я файла з сайту npmjs.com

// node_modules НЕ можна додавати в репозіторій 
// тому в папаці gitignore повинен бути такий запис ОБОВ'ЯЗКОВО  .node_modules/  - це важливо!!!

// щоб видалити пакет npm remove uuid.v4

//  создастся файл  package.json  со служебной информацией
// он похож на джава скрипт об'єкт: у него есть ключ "name": -ОБЯЗАТЕЛЬНО в двойніх кавічках ""
//  и значение ключа "goit-js-module-08-repeta", - может біть что угодно: строка, буль, НО НЕ ФУНкция!!!!

// як використовувати закачані пакети:
// треба написати require('joi'); і отримаємо абсолютний шлях до файлу і запис:
// це можна також прочитати  в описі joi
const Joi = require('joi');
const express = require('express');
const app = express();

// тут можна писати навіть HTML рядки
app.use('*', (req, res) => {
    console.log('Біл запрос браузера');
    res.send('<h1>Це типу відповідь</h1>');
});

const listener = app.listen(4444, () => {
    console.log(`Веб-сервер запущений на порті ${listener.address().port}`);
});
// ми хочемо валідувати пароль - це рядок мін з 3 і макс з 10 символів і використовує тільки літери і цифри
// запис буде виглядати так

const passwordSchema = Joi.string().min(3).max(10).alphanum();
// щоб подивитись роботу в Node в терміналі команда виглядає так node app.js
console.log(passwordSchema.validate('qqqqqqq'));

// "scripts": {
//     "test": "echo \"Error: no test specified\" && exit 1"
//   }, -- це скорочений запис наших команд, ми можемо самі задавати свої занчення і вони будуть виконуватися

// запустити скрипт : npm run test (Name скрипта)

// pre and post - ці плюшки використовуються що запустити скріпт до тест "pretest" або після "posttest"

// pre - скріпти потрібні, якщо треба щось повидаляти, що залишилось від розробника
// post -якщо треба використати автоматичний деплой
// "pretest": "echo \"Це pretest\"",
// "posttest": "echo \"Це posttest\""

// "echo \"Error: no test specified\" - це команда, щоб вивести строку в терміналі

//  npm instal (npm i) автоматично встановлює на новому компі або місці все, що в тебе було до цього

// в package.jason  скріпт був такий
//   "scripts": {
    // "test": "echo \"Error: no test specified\" && exit 1",
    // "start": "node app.js"
//   },

