// CODE here fo* We have a school to build here! This project will get you used to thinking about classes in JavaScript and building them from a brand new data set.





class Person {
    constructor(props) {
        this.name = props.name
        this.age = props.age
        this.location = prop.location

    }
    speak() {
        return `Hello my name ${this.name}, I am from, ${this.location}`

    }
}

class Instructor extends Person {
    constructor(props) {
        super(props)
        this.specialty = prop.specialty
        this.favLanguage = props.favLangauge
        this.catchPhrase = props.catchPhrase

    }
    demo(subject) {
        return 'Today we are learning about ${this.subject}'

    }
    grade(student) {
        return `${this.student.name} recieves a perfect score on ${this.subject}`
    }
}

class Student extends Instructor{
    constructor(props){
        super(props)
        this.previousBackground = props.previousBackground
        this.className=props.className
        this.favSubjects=props.favSubjects

    }
    listsSubjects(favSubjects){
           return `${listsSubjects},${favSubjects}`
    }
    PRAssignment(subject){
       return  `${student.name} has submitted a PR for ${subject}`
    }
     sprintChallange(){
         return `${student.name} has begun sprint challenge on ${this.subject}`
 

     }
}










