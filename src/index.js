// First value show
    // import React from "react";
    // import ReactDOM from "react-dom";

    // const element = <h1>hello world!</h1>;
    // // console.log(element);

    // ReactDOM.render(element, document.getElementById('root'));



////// ES6 JS
// var example -> function
    // function sayHello()
    // {
    //     for (var i=0; i<5; i++)
    //     {
    //         console.log(i);
    //     }
    //     console.log(i);      // use out of declared scopes
    // }

    // sayHello();


// let example -> block/scope
    // function sayHello()
    // {
    //     for (let i=0; i<5; i++)
    //     {
    //         console.log(i);
    //     }
    //     // console.log(i);       //shows error cannot use out of scope
    // }

    // sayHello();


// const example -> block/scope
    // const x =50;
    // // x=2;      // shows error can;t change the value after declare
    // console.log(x);


//// OBJECT 
// Property, Method example 
    // const person = {
    //     name: 'Sadi',   // property
    //     walk: function() {console.log('walks')},    //method
    //     talk() {return 'talks'},      //method
    // };
    
    // // // Get Values
    // // person.name;
    // console.log(person.name);
    // person.walk();
    // // console.log(person.walk());
    // // person.talk();
    // console.log(person.talk());
    
    // // // Change
    // person.name = 'john';
    // console.log(person.name);

    // // // Dynamic change 
    // const targetMember = 'name';
    // person[targetMember] = 'Seam';       // static value hold
    // person[targetMember.value] = 'Potol';    //dynamic value hold
    // console.log(person[targetMember]);
    // console.log(person[targetMember.value]);

    // // console.log(person);    // show all property and methods of object


// this example 
    // const person = {
    //     name: 'Sadi',
    //     walk() {
    //         console.log(this);
    //     }
    // };

    // person.walk();  // refer to the same object

    // // CALLING objects outside without direct refferencing
    // const walk = person.walk;   // getting reff of a function
    // // console.log(walk);   // returns the function
    // walk();     // retuns the global object -> Window // if strict mode enabled, than it will show undifined 


// binding this example
    // const person = {
    //     name: 'Sadi',
    //     walk() {
    //         console.log(this);
    //     }
    // };

    // person.walk();  // refer to the same object

    // // CALLING objects outside with bind() for direct refferencing
    // const walk = person.walk.bind(person);   // binding reff of a method of a particular object 
    // walk();      // retuns the binded object


// Arrow  function example
    // // Normal js func
    // const square1 = function(number){
    //     return number * number;
    // }
    // console.log(square1(2));

    // // Arrow ES6 func
    // const square2 = () => {
    //     return 'empty param';
    // }
    // console.log(square2());
    
    // const square3 = () => 'empty param';
    // console.log(square3());

    // const square4 = (number) => number * number;
    // console.log(square4(4));

    // const square5 = number => number * number;
    // console.log(square5(5));

    // const square6 = (number1, number2) => number1 * number2;
    // console.log(square6(6,7));


// Arrow function usage example
    // const jobs = [
    //     { id: 1, isActive: true},
    //     { id: 2, isActive: true},
    //     { id: 3, isActive: false},
    //     { id: 4, isActive: false},
    //     { id: 5, isActive: false},
    //     { id: 6, isActive: true}
    // ];

    // // filter() is a function, filtering the elements of object 
    // // Normal
    // jobs.filter(function(job) { return job.isActive;});
    // console.log(jobs.filter(function(job) { return job.isActive;}));
    
    // // With arrow
    // jobs.filter(job => !job.isActive);
    // console.log(jobs.filter(job => !job.isActive));


// Arrow function and this usage example
    // // Normal 
    // const person = {
    //     name: 'Sadi',
    //     talk() {
    //         // Callback func with (this) shoot Window global object within strict mode
    //         setTimeout(function() {
    //             console.log("this", this);
    //         },1000);
    //     }
    // };

    // person.talk();


    // // Normal Error window solve
    // const person = {
    //     name: 'Sadi',
    //     talk() {
    //         var self = this;
    //         // Callback func with (this) declared outside of func does not shoot Window global object , works perfect
    //         setTimeout(function() {
    //             console.log("self", self);
    //         },1000);
    //     }
    // };

    // person.talk();


    // // Arrow Error window solve ES6
    // const person = {
    //     name: 'Sadi',
    //     talk() {
    //         // Callback Arrow func with (this) works fine and doesn't require declaration outside of func to not shoot Window global object
    //         setTimeout(() => {
    //             console.log("this", this);
    //         },1000);
    //     }
    // };

    // person.talk();


// array.map method example
    // // Normal callback
    // const colors1 = ['red', 'green', 'blue'];
    // const items1 = colors1.map(function(color) {
    //     return '<li>' + color + '</li>';
    // });
    // console.log(items1);

    // // Arrow callback
    // const colors2 = ['red', 'green', 'blue'];
    // const items2 = colors2.map(color => '<li>' + color + '</li>');
    // console.log(items2);

    // // Arrow callback with template litterals dynamic allocation
    // const colors3 = ['red', 'green', 'blue'];
    // const items3 = colors3.map(color => `<li>${color}</li>`);
    // console.log(items3);


//// OBJECT Destructing 
    // const address = {
    //     street: 'Rankin',
    //     city: 'Dhaka',
    //     country: 'Bangladesh'
    // };

    // // Normal VALUE extract
    // const street = address.street;
    // const city = address.city;
    // const country = address.country;

    // console.log(street);
    // console.log(city);
    // console.log(country);


    // // VALUE extract with destructing ES6
    // const { street, city, country } = address;

    // console.log(street);
    // console.log(city);
    // console.log(country);

    
    // // VALUE extract with destructing and rename + alternate sequence ES6 example
    // const { street } = address;      //single use  
    // const { country, city } = address;      //multiple
    // const { street: st, city: ct, country: cnty } = address;     //rename
    
    // console.log(street); 
    // console.log(st);
    // console.log(ct);
    // console.log(city);
    // console.log(cnty);
    // console.log(country);


// Spread Operator
    // // // Array concate
    // const first = [1, 2, 3];
    // const second = [4, 5, 6];


    // // Using concat
    // const combine1 = first.concat(second);

    // // Using ... is more effective format + can add new element
    // const combine2 = [...first, ...second];
    // const combine3 = [...first, 'hi', ...second];
    // const combine4 = ['hi', ...first, ...second, 'bye'];
    
    // console.log(combine1);
    // console.log(combine2);
    // console.log(combine3);
    // console.log(combine4);


    // // Cloning array using ...
    // const clone = [...first];
    // console.log(first);
    // console.log(clone);


    // // // Object concate
    // const first = { name: 'Sadi'};
    // const seccond = { job: 'developer'};

    // // Using ... is more effective format
    // const combine1 = {...first, ...seccond};

    // // Using ... with added new prperties
    // const combine2 = {...first, locaton: "Dhaka", ...seccond};
    // const combine3 = {...first, age: 24, locaton: "Dhaka", ...seccond};
    
    // console.log(combine1);
    // console.log(combine2);
    // console.log(combine3);

    // // Cloning Object using ...
    // const clone = {...first};
    // console.log(clone);

//// Class
    // class Person {
    //     constructor(name) {
    //         this.name = name;
    //     }

    //     walk() {
    //         console.log("walk");
    //     }
    // }

    // // Objects of Person class
    // const person1 = new Person('Sadi');
    // const person2 = new Person('Seam');
    // const person3 = new Person('Potol');

    // console.log(person1);
    // console.log(person2);
    // console.log(person3);


//// Inheritance
    // class Person {
    //     constructor(name) {
    //         this.name = name;
    //     }

    //     walk() {
    //         console.log("walk");
    //     }
    // }

    // class Teacher extends Person{
    //     constructor(name, degree) {
    //         super(name);
    //         this.degree = degree; 
    //     }

    //     teach() {
    //         console.log("teach");
    //     }
    // }
    
    // const teacher = new Teacher('Sadi', 'Bsc.');
    // console.log(teacher);
    // teacher.teach();
    // teacher.walk();


//// Modularity
    import { Person } from "./person";
    import Teacher, { promote } from "./teacher";
    
    const teacher = new Teacher('Sadi', 'Bsc.');
    console.log(teacher);
    teacher.teach();
    teacher.walk();
    promote();
    
    const person = new Person("Seam");
    console.log(person);
    person.walk();


