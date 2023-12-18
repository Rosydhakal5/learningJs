// <============Learning Objects==========>

var user = {
    firstName : "Rosy",
    lastName: "Dhakal",
    role: "Software Developer",
    loginCount: 32,
    accountSignedIn : true
};
//accessing value 

console.log(user.firstName); //printing fist name by accessing with . 'dot' 
//another way to access the value, not widley used but is possible this way 
console.log(user["lastName"]);
//Manipulating value 
user.loginCount = 44;
console.log(user.loginCount);
console.log(user.role);
console.log(user);