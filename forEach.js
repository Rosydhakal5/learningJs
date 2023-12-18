//<============ for Each==========>
const ourStates = [
    "NSW", 
    "Queensland", 
    "Tasmania", 
    "victoria",
    "WA", 
    123434,
    "southAus"];

    const mystates = [
        "happy", 
        "Place", 
        "Somewhere"
    ];

ourStates.forEach((s) => (console.log(s)));

//changing to Uppercase
mystates.forEach(a => {
    a = a.toUpperCase();
    console.log(a);
});

//deleting last value using pop 
mystates.forEach(ab => {
    ab = mystates.pop();
    console.log(ab);
    
});

//for of (FOR ARRAYS )
const social = ["linkdein", "facebook", "instagram", "X"]
for (const  n of social) {
    console.log(n);
}

//for in for OBJECTS 

const symbol = {
    yt: "Youtube",
    fb: "Facebook",
    ig: "instagram",
    rd: "Rosy Dhakal"
}

for (const sy in symbol) {
    console.log(`key is: ${sy} and value is ${symbol[sy]}`)
    }


// <=======LEARNING ABOUT THIS===========>

//Trying different things by using this 

var user = {
    firstName: "Rozie",
    courseCount: 5,
    getCourseCount :function(){
        console.log("This is coming from Line 60", this);
        function sayHello(){
            console.log("Hello");
            console.log("Line 63", this);
        }
        sayHello(); //regular function calls, this points to window object
    }
};

user.getCourseCount();

