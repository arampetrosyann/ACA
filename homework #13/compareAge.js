"use strict"

class Person {
    constructor(name, age) {
		this.name = name;
		this.age = age;
    }

	compareAge(other) {
        let sentence = "";

		if (this.age < other.age) {
            sentence = `${other.name} is older than me.`;

        } else if (this.age > other.age) {
            sentence = `${other.name} is younger than me.`;

        } else {
            sentence = `${other.name} is the same age as me.`;
        }	

        return sentence;
    }
    
    toString() {
        return `Person: ${this.name}`;
    }
};

const michael = new Person("Michael", 51);