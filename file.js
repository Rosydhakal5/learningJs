// <============Learning Objects==========>

var user = {
    firstName : "Rosy",
    lastName: "Dhakal",
    role: "Software Developer",
    loginCount: 32,
    accountSignedIn : true,
    courseList : [],
    buyCourse: function(courseName){
        this.courseList.push(courseName);
    },
    getCourseCount: function(){
        return `${this.firstName} have enrolled you in total of ${this.courseList.length} courses, they are ${this.courseList}, Are you ready to learn?`
    },

};
// <============Learning Methods==========>
var courseList = true;
console.log(user.firstName);

user.buyCourse(" react JS course");
user.buyCourse(" Node Js course");
user.buyCourse(" Angular course");


console.log(user.getCourseCount());

















//accessing value 

// console.log(user.firstName); //printing fist name by accessing with . 'dot' 
// //another way to access the value, not widley used but is possible this way 
// console.log(user["lastName"]);
// //Manipulating value 
// user.loginCount = 44;
// console.log(user.loginCount);
// console.log(user.role);
// console.log(user);

// //displaying values in table format
// console.table(user);




