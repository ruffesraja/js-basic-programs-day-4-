function anagram(word1,word2){
    word1=word1.toLowerCase();
    word2=word2.toLowerCase();
    for(let ind1=0;ind1<word1.length;ind1++){
        let flag=false;
        for(let ind2=0;ind2<word2.length;ind2++){
            if(word1[ind1]==word2[ind2]){
                word2[ind2]="_";
                flag=true;
                break;
            }
        }
        if(!flag){
            return false;
        }
    }
    return true;
}
console.log(anagram("Army","Mary"));