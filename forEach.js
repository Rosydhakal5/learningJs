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