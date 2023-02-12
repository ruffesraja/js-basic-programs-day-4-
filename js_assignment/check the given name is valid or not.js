function isCapital(letter){
    if(letter>='A'&&letter<='Z'){
        return true;
    }
    return false;
}
function isCapitalize(word){
    if(isCapital(word.charAt(0))){
        for(let ind=1;ind<word.length;ind++){
            if(isCapital(word.charAt(ind))){
                return false;
            }
        }
    }
    return true;
}
function isInitial(initial){
    if(initial.length==2){
        if(isCapital(initial.charAt(0))&&initial.charAt(1)=='.'){
            return true;
        }
    }
    return false;
}
function isWord(word){
    if(word.length>2){
        if(isCapital(word.charAt(0))&&word.charAt(word.length-1)!='.'){
            if(isCapitalize(word)){
                return true;
            }
        }
    }
    return false;
}

function validName(nameArray){
    if(nameArray.length==2){
        if(isInitial(nameArray[0])&&isWord(nameArray[1])){
            return true;
        }
    }
    if(nameArray.length==3){
        if(isInitial(nameArray[0])&&isInitial(nameArray[1])&&isWord(nameArray[2])){
            return true;
        }
        if(isWord(nameArray[0])&&isInitial(nameArray[1])&&isWord(nameArray[2])){
            return true;
        }
        if(isWord(nameArray[0])&&isWord(nameArray[1])&&isWord(nameArray[2])){
            return true;
        }
    }
    return false;
}

var name = "Ruffes Raja Sathish";
var nameArr = name.split(" ");
console.log(validName(nameArr));