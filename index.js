function same_chars(word, index1, index2){
    
    // User inputs are saved into new varibale 
    let term = word;
    let termIndex1 = index1
    let termIndex2 = index2

    // Letter at the user input indexes is extracted and saved into new varibles for comparison
    let term1 = term[index1]
    let term2 = term[index2]

    // if statemet to comparison letters 
    if(term1 === term2) {

        console.log("True"); // Checks if letters at both indexes are same and console logs True 

    }else{

        console.log("False"); // Or else False
    }

    // Testing if words match 
 
    /* console.log(term1);
        console.log(term2); */
}

same_chars("programmer", 6, 7)
same_chars("programmer", 0, 4);
same_chars("programmer", 0, 12);
