for(let i = 1; i <= 10; i++){
    let string = "";
    if(i%3 == 0){
        string += "Fizz";
    }
    else if(i%5 == 0){
        string += "Buzz";
    }
    console.log(i + ": " + string);
}
