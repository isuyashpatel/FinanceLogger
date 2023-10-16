import { Invoice } from "./classes/Invoice.js";
import { ListTemplate } from "./classes/ListTemplate.js";
import { Payment } from "./classes/Payment.js";
import { HasFormatter } from "./interfaces/HasFormatter.js";

let docOne: HasFormatter;
let docTwo: HasFormatter;

docOne = new Invoice('yashi', 'web work', 250);
docTwo = new Payment('mario', 'plumbing work', 200);

let docs: HasFormatter[] = [];

docs.push(docOne);
docs.push(docTwo);

interface IsPerson {
    name: string,
    age: number;
    speak(a: string): void;
    spend(a: number): number;
}

const me: IsPerson = {
    name: 'shaun',
    age: 30,
    speak(text: string): void {
        console.log(text);
    },
    spend(amount: number): number {
        console.log('I spent', amount);
        return amount;
    }
}

const greetPerson = (person: IsPerson) => {
    console.log('hello', person.name);
}

greetPerson(me)

console.log(me);


const inOne = new Invoice('mario', 'work on the mario website', 250);
const inTwo = new Invoice('luigi', 'work on the luigi website', 300);

console.log(inOne, inTwo);

let invoices: Invoice[] = [];
invoices.push(inOne);
invoices.push(inTwo);

// console.log(invoices, "invoices");
invoices.forEach((inv) => {
    console.log(inv.client, inv.amount, inv.format());

})

const form = document.querySelector('form')!;
const form_item = document.querySelector('.new-item-form') as HTMLFormElement;

// console.log(form_item.children);

// selecting inputs
const type = document.querySelector('#type') as HTMLSelectElement;
const toFrom = document.querySelector('#tofrom') as HTMLInputElement;
const detail = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

//list template instance
const ul = document.querySelector('ul')!;
const list = new ListTemplate(ul)

form.addEventListener("submit", (e: Event) => {
    e.preventDefault();
    let values: [string, string, number] // declaring tuples
    values = [toFrom!.value, detail!.value, amount!.valueAsNumber]
    let doc: HasFormatter;
    if (type?.value === 'invoice') {
        doc = new Invoice(...values);
    } else {
        doc = new Payment(...values)
    }

    list.render(doc, type.value, 'end')
});

// Generics --> allows to reusable blocks with different types

const addUID = <T extends { name: string }>(obj: T) => {
    let uid = Math.floor(Math.random() * 100);
    return { ...obj, uid };
}

let docOnee = addUID({ name: 'yashi', age: 40 });

console.log(docOnee, 'Genric', docOnee.age);

// Genric with interfaces
interface Resource<T> {
    uid: number;
    resourceName: string,
    data: T;
}

const docThree: Resource<string> = {
    uid: 1,
    resourceName: 'person',
    data: 'shaun'
}

const docFour: Resource<string[]> = {
    uid: 2,
    resourceName: 'suyash',
    data: ['shaun', 'sheldon', 'jackie']
}

console.log(docThree, docFour);



// Enum 
enum ResourceType { BOOK, AUTHOR, FILM, DIRECTOR, PERSON }


interface Resources<T> {
    uid: number;
    resourceType: ResourceType;
    data: T;
}

const doc1: Resources<object> = {
    uid: 1,
    resourceType: ResourceType.BOOK, // storing index
    data: { title: 'name of wind' }
}

const doc2: Resources<object> = {
    uid: 2,
    resourceType: ResourceType.AUTHOR,
    data: { title: 'yashi' }
}

console.log(doc1, doc2);


// tuples--> tuples are like array but once defined the type it won't change or replace with number/type

let arr = ['ryu', 25, true]
arr[0] = false;
arr[1] = 'yashi';
arr = [30, false, 'yashi'];

let tup: [string, number, boolean] = ['ryu', 25, true];
tup = ['ryu', 56, false]
console.log(tup);

