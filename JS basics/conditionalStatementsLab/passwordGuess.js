function passwordGuess(input){
    let passwordGuess = input[0];
    let password = "s3cr3t!P@ssw0rd"
    if (passwordGuess === password){
        console.log("Welcome");
    }
    else{
        console.log("Wrong password!");
    }
}
passwordGuess(["s3cr3t!P@ssw0rd"])