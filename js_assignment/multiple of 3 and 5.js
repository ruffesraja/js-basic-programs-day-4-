for(var itr=1;itr<=100;itr++){
    if(itr%3==0 && itr%5==0){
        console.log(itr+"fizzbuzz");
    }
    else if(itr%3==0){
        console.log(itr+"fizz");
    }
    else if(itr%5==0){
        console.log(itr+"buzz");
    }
}