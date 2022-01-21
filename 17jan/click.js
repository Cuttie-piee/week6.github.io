function checkAnagram(a, b) {
    var l1 = a.length;
    var l2 = b.length;
    if(l1 !== l2){
       console.log('Invalid Input');
       return
    }
    var s1 = a.split('').sort().join('');
    var s2 = b.split('').sort().join('');
    if(s1 === s2){
       console.log("The given data is an anagram");
    } else { 
       console.log("The given data is not an anagram");
    }
 }
 checkAnagram("indian","ndiani")