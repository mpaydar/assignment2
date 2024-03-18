let button_element = document.getElementById("checkPalindrom");
button_element.addEventListener("click", handleInput);

function handleInput() {
    let palindrom = true; 
    let user_input = document.getElementById("userInput").value;
    console.log(user_input)
    for (let i = 0, j = user_input.length - 1; i < user_input.length; i++) {
        while (j >= 0) {
            if (user_input[i] !== user_input[j]) {
                palindrom = false; 
                break; 
            }
            j--;
            break;
        }
        if (!palindrom) {
            break; 
        }
    }

    let answer_element = document.getElementById("isPalindrom");
    if (palindrom) {
        answer_element.innerHTML = `Palindrome`;
    } else {
        answer_element.innerHTML = `Not Palindrome`;
    }
}
