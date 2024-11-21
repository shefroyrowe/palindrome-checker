const input = document.getElementById('text-input');
const button = document.getElementById('check-btn');
const result = document.getElementById('result');
const vision = document.getElementById('vision');

//mount this function to button element
const checkInput = () => {
  if (input.value === '') {
     alert("Please input a value");
  } else {
    // invoke isPalindrome with user input as argument
    isPalindrome(input.value);
    result.classList.toggle("hidden_results");
  }
};

const isPalindrome = (str) => {
  //regex class to math all non-alphanumeric characters
  const regex = /[\W_]/g;
  const cleanStr = str.toLowerCase().replace(regex, '');
  //reverse string 
  const newStr = cleanStr.split('').reverse().join('');
 //check match between strings and assign to result element
  if (cleanStr === newStr) {
    result.textContent = str + " is a palindrome";
  } else {
    result.textContent = str + " is not a palindrome";
  }
  
};

button.onclick = checkInput;
