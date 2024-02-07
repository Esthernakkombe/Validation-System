function validateCredentials(email,password){
    const validEmail ="nakkombeesther@gmail.com";
    const validPassword ="23/U/26485";
    
    if(email=== validEmail && password===validPassword){
        console.log(`User email is ${email},login successfully!`);
    }
    else{
        console.log("Incorrect user credentials");
    }

    
}
validateCredentials('nakkombeesther@gmail.com',"23/U/26485");
