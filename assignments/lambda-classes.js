// CODE here for your Lambda Classes
// #### Person

// * First we need a Person class. This will be our `base-class`
// * Person receives `name` `age` `location` all as attributes
// * Person receives `speak` as a method.
// * This method logs out a phrase `Hello my name is Fred, I am from Bedrock` where `name` and `location` are the object's own attributes


class Person {
    constructor(att){
        this.name=att.name;
        this.age-att.age;
        this.location=att.location;
    }
    speak(){
         console.log(`Hello my name is ${this.name}, I am from ${location}`)

    }
}







// #### Instructor

// * Now that we have a Person as our base class, we'll build our Instructor class.
// * Instructor uses the same attributes that have been set up by Person
// * Instructor has the following unique attributes:
//   * `specialty` what the Instructor is good at i.e. 'redux'
//   * `favLanguage` i.e. 'JavaScript, Python, Elm etc.'
//   * `catchPhrase` i.e. `Don't forget the homies`
// * Instructor has the following methods:
//   * `demo` receives a `subject` string as an argument and logs out the phrase 'Today we are learning about {subject}' where subject is the param passed in.
//   * `grade` receives a `student` object and a `subject` string as arguments and logs out '{student.name} receives a perfect score on {subject}'


class Instructor extends Person{
    constructor(attributes) {
        super(attributes);
        this.specialty=attributes.specialty;
        this.favLanguage=attributes.favLanguage;
        this.catchPhrase=attributes.catchPhrase;
    }
    demo(){
        console.log(`Today we are learining about ${subject}`)
    }
    grade(student){
        console.log(`${student} receives a perfect score on ${subject}`)

    }
}





// #### Student

// * Now we need some students!
// * Student uses the same attributes that have been set up by Person
// * Student has the following unique attributes:
//   * `previousBackground` i.e. what the Student used to do before Lambda School
//   * `className` i.e. CS132
//   * `favSubjects`. i.e. an array of the student's favorite subjects ['Html', 'CSS', 'JavaScript']
// * Student has the following methods:
//   * `listsSubjects` a method that logs out all of the student's favoriteSubjects one by one.
//   * `PRAssignment` a method that receives a subject as an argument and logs out that the `student.name has submitted a PR for {subject}`
//   * `sprintChallenge` similar to PRAssignment but logs out `student.name has begun sprint challenge on {subject}`

class Student extends Person{
    constructor(attributes){
    super(attributes);
    this.previousBackground=attributes.previousBackground;
    this.className=attributes.classname;
    this.favSubjects=attributes.favSubjects;
    this.grade=attributes.grade
    }
     listsSubjests(){
        console.log(`${favoriteSubjects}`);
     }
     PRassignment(){
        console.log(`${this.name}has submitted a PR for ${subject}`);
     }
    sprintChallenge(){
        console.log(`${this.name}has begun sprint challenge on ${subject}`);
    }
    grade() {
        return Math.floor(Math.random() * 100 + 1)
    }
};









// #### Project Manager

// * Now that we have instructors and students, we'd be nowhere without our PM's
// * ProjectManagers are extensions of Instructors
// * ProjectManagers have the following unique attributes:
//   * `gradClassName`: i.e. CS1
//   * `favInstructor`: i.e. Sean
// * ProjectManagers have the following Methods:
//   * `standUp` a method that takes in a slack channel and logs `{name} announces to {channel}, @channel standy times!​​​​​
//   * `debugsCode` a method that takes in a student object and a subject and logs out `{name} debugs {student.name}'s code on {subject}`

class ProjectManager extends Instructor {
    constructor(attributes){
        super(attributes);
    this.gradClassName=attributes.gradClassName;
    this.favInstrustor=attributes.Instructor;
    }
    standUp(channel){
        console.log(`${this.name} annouces to ${channel},@channel standy times!`)
    }
    dubugsCode(student,subject){
        console.log(`${name}debugs${student} code on ${subject}`)
    }
}


const mike = new Person({
    name: "MIke",
    age: 39,
    location: "Seattle"
    });
    
    const bill = new Student({
    previousBackground: "Truck Driver",
    className:"Web 20",
    favInstructor:"Mike",
    favSubjects: `${"math","science","english" }`,
    
       
        
    })
    
    const adam = new ProjectManager({
        gradClassName:"Web 10",
        favInstructor: "Mike",
        name:"Adam",
    })
    console.log(adam.gradClassName); 
    
    console.log(bill.favSubjects)

    console.log(adam.standUp('channel'))
    console.log(adam.grade.bill)
    console.log(bill.grade())
