let x: number = 10;

let temp: any = "This can be any tybe";
temp = 40;
temp = { name: "John", age: 30 };

function tempFn(a: number, b: number): number {

    return a + b;
}

const result = tempFn(5, 10);
console.log(`The result of tempFn is: ${result}`);

let arr: number[] = [1, 2, 3, 4, 1];

let arr2: Array<string> = ["Hello", "TypeScript", "Array"];

let unknwnData: unknown = "This is an unknown type";
unknwnData = 34;

if (typeof unknwnData === "string") {
    console.log(`The unknownData is a string ${unknwnData}`);
}

// optional parametear
// to make optional just add "?" in last 

function t1(name: string, age?: number): string {
    if (age) {
        return `Name: ${name}, Age ${age}`;
    }
    return `Name: ${name}`;

}

const r = t1("O");
console.log(r);
const r1 = t1("B", 1);
console.log(r1);

let obj: { name: string; age?: number} = {
    name: "john",
    age: 30,
};

// interface  // 
// Read only // ?

interface Person{
    name: string,
    age?: number,
}

let obj1: Person = {
    name: "john",
    age: 30,
};



// we can mke our own data type
type Admin = "Head" | "Manager" | "Employee";

let personA: Admin = "Head";


class Student{
    name: string;
    age: number;

    constructor(name: string, age: number){
        this.name = name;
        this.age = age;
    }
}

const sd = new Student("aa", 1)
console.log(sd.name);
console.log(sd.age);


class child extends Student{

}

const ch = new child("bb", 2);

console.log(ch.name);
console.log(ch.age);



// Accordion //
// do this aa HW
// it is like a drop down button > -- v


// sampel data by gemeni

// 1. Define the type structure
// interface AccordionData {
//     title: string;
//     data: number; // TypeScript uses 'number' instead of 'int'
//     "is open": boolean; // Quotes are needed because of the space in the key
// }

// 2. Create the array with three objects
const AccordionData : Array<title: string, data: number, "is open": boolean> = [
    {
        title: "Introduction",
        data: 101,
        "is open": true
    },
    {
        title: "Getting Started",
        data: 204,
        "is open": false
    },
    {
        title: "Advanced Features",
        data: 404,
        "is open": false
    }
];


// itrate with help of forEach and map       -- to do

function toggleAccordion(index: number): void{
    console.log(AccordionData[index])
    AccordionData[index].isOpen = !AccordionData
}