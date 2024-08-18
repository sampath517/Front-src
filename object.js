let person = {
    name: "sampath",
    age: 21,
    city: "Anakapalli",
    "1": "JS ",
    "my location": "gavarapalem" //invaild keywords used to double qutotes
};
console.log(person); //accessing object properties

console.log(person.name); //dot notation

console.log(person['city']); //bracketnotation

let { age } = person; //object destructuring
console.log(age);