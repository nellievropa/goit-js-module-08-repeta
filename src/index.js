// const sum =(a,b) => a + b;

// sum(2,3);

// class Hero {
//     constructor(name) {
//         this._name = name;
//     }
//     get name() {
//         return this._name;
//     }

//     set name(newName) {
//         this._name = newName;
//     }
// }

// const h = new Hero ('mango');

//  встановлюємо з babeljs.io з розділлу settings і із інструментів вибираємо CLI, клікаємо
// беремо звідти посилання на налаштування npm install --save-dev @babel/core @babel/cli

//   після встановлення додаєм скрипт, що рекомендується на сайті
//   "build": "babel src -d lib"

// потім запускаємо його в роботу npm run build
// він спрацював, але нічого не змінив, правда створив папку lib з таким самим файлом, 
// бо йому треба сказати до якої старої версії треба змінювати наш новий код
// тому ми встановлюємо ще один файл npm install @babel/preset-env --save-dev 
// створюємо папку, яку він рекомендує babel.config.json і туди додаемо те, що рекомендується {
//   "presets": ["@babel/preset-env"]
// }
// знову запускаємо npm run build
// і дивимось в папкі lib що змінилося

// 
// browserslist - один для всіх : по його рекомендації створюємо файл .browserslistrc

import './css/common.scss';
// import 


console.log('This is index.js');