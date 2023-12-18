// <============Learning Loops again==========>
// for (let i = 0; i < 10; i++) {
//     console.log(i); 
// } 

const ourState = [
    "NSW", 
    "Queensland", 
    "Tasmania", 
    "victoria",
    "WA", 
    123434,
    "southAus"];
    for (let i = 0; i < ourState.length; i++) {
        //only printing strings 
        if(typeof ourState[i] !== "string") break;
        const element = ourState[i];
        
    }
    console.log(ourState);