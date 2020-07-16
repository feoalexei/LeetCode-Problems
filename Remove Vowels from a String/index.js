////////// 1119. Remove Vowels from a String //////////

//=====================================================

function removeVowels(string){
    return string.replace(/[aeiou]/gi,'');
}

//=====================================================

function removeVowels(string) {
    const vowels = ["a","o","u","e","i"];
    return [...string].filter(letter => vowels.indexOf(letter) == -1).join('')        
}

console.log(removeVowels('load up on guns bring your friends'));











