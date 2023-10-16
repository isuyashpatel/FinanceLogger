import { Invoice } from "./classes/Invoice.js";
import { ListTemplate } from "./classes/ListTemplate.js";
import { Payment } from "./classes/Payment.js";
let docOne;
let docTwo;
docOne = new Invoice('yashi', 'web work', 250);
docTwo = new Payment('mario', 'plumbing work', 200);
let docs = [];
docs.push(docOne);
docs.push(docTwo);
const me = {
    name: 'shaun',
    age: 30,
    speak(text) {
        console.log(text);
    },
    spend(amount) {
        console.log('I spent', amount);
        return amount;
    }
};
const greetPerson = (person) => {
    console.log('hello', person.name);
};
greetPerson(me);
console.log(me);
const inOne = new Invoice('mario', 'work on the mario website', 250);
const inTwo = new Invoice('luigi', 'work on the luigi website', 300);
console.log(inOne, inTwo);
let invoices = [];
invoices.push(inOne);
invoices.push(inTwo);
// console.log(invoices, "invoices");
invoices.forEach((inv) => {
    console.log(inv.client, inv.amount, inv.format());
});
const form = document.querySelector('form');
const form_item = document.querySelector('.new-item-form');
// console.log(form_item.children);
// selecting inputs
const type = document.querySelector('#type');
const toFrom = document.querySelector('#tofrom');
const detail = document.querySelector('#details');
const amount = document.querySelector('#amount');
//list template instance
const ul = document.querySelector('ul');
const list = new ListTemplate(ul);
form.addEventListener("submit", (e) => {
    e.preventDefault();
    let values; // declaring tuples
    values = [toFrom.value, detail.value, amount.valueAsNumber];
    let doc;
    if ((type === null || type === void 0 ? void 0 : type.value) === 'invoice') {
        doc = new Invoice(...values);
    }
    else {
        doc = new Payment(...values);
    }
    list.render(doc, type.value, 'end');
});
// Generics --> allows to reusable blocks with different types
const addUID = (obj) => {
    let uid = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, obj), { uid });
};
let docOnee = addUID({ name: 'yashi', age: 40 });
console.log(docOnee, 'Genric', docOnee.age);
const docThree = {
    uid: 1,
    resourceName: 'person',
    data: 'shaun'
};
const docFour = {
    uid: 2,
    resourceName: 'suyash',
    data: ['shaun', 'sheldon', 'jackie']
};
console.log(docThree, docFour);
// Enum 
var ResourceType;
(function (ResourceType) {
    ResourceType[ResourceType["BOOK"] = 0] = "BOOK";
    ResourceType[ResourceType["AUTHOR"] = 1] = "AUTHOR";
    ResourceType[ResourceType["FILM"] = 2] = "FILM";
    ResourceType[ResourceType["DIRECTOR"] = 3] = "DIRECTOR";
    ResourceType[ResourceType["PERSON"] = 4] = "PERSON";
})(ResourceType || (ResourceType = {}));
const doc1 = {
    uid: 1,
    resourceType: ResourceType.BOOK,
    data: { title: 'name of wind' }
};
const doc2 = {
    uid: 2,
    resourceType: ResourceType.AUTHOR,
    data: { title: 'yashi' }
};
console.log(doc1, doc2);
// tuples--> tuples are like array but once defined the type it won't change or replace with number/type
let arr = ['ryu', 25, true];
arr[0] = false;
arr[1] = 'yashi';
arr = [30, false, 'yashi'];
let tup = ['ryu', 25, true];
tup = ['ryu', 56, false];
console.log(tup);
