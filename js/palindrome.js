function checkPalindrome(str){

    let checkStr = str.split(''); 
    let revStr = checkStr.reverse() 
    
    if(revStr.join('') == str){
      return true;
    }else{
      return false;
    }
    return str
  }
  
  
  let myTestCases = 'ojajo ojajo' 
let response =  checkPalindrome(myTestCases)
document.write(response)
  