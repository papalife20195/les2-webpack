import {sum, diff} from "./test";
import { createUser } from "./helpers/users";

console.log(sum(2,3)); 
const user = createUser('Виктор',28, 'male')
console.log(user);

const root = document.querySelector('#root');
root.innerHTML = `<h1>Имя: ${user.name}, Возраст: ${user.age}</h1>`;
