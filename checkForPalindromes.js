
function palindrome(str) {
  // Good luck!
  str.toLowerCase();
  a = str.split('');
  a.reverse();
  revStr = a.join("");
  if (str == revStr) {
    console.log(str);
  return true;
  }
    else { 
      console.log(str);
  return false;
      }
}



palindrome("eye");
palindrome("CFC");
