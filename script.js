class Student {
    constructor(naam,b_Year){
        this.name = naam;
        this.year = b_Year;
    };
    age(){
        let date = new Date();
        return(date.getFullYear() - this.year);
    };
}

student1 = new Student("Ayan",2019);

console.log(`My brother's name is ${student1.name}. He is ${student1.age()} years old.`);
