let str="Welcome to this Javascript Guide!";
let ansStr="";
for(let ind=0;ind<str.length;ind++){
    if(str[ind]=" "){
        let start=ind-1;
        for(;str.charAt(start)!=" ";start--){
            ansStr+=str.charAt(start);
            if(start==0){
                break;
            }
        }
        ansStr+=" ";
        
    }
    else if(ind==str.length-1){
        let start=ind;
        for(;str.charAt(start)!=" ";start--){
            ansStr+=str.charAt(start);
            if(start==0){
                break;
            }
        }
        //str[ind]="";
        
    }
}

console.log(str);
console.log(ansStr);