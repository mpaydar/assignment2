let count_click = document.getElementById("countClick");

count_click.addEventListener("click", handleInput);

function handleInput() {
    let user_input = document.getElementById("sentence");
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let vowel_counter = 0;
    let consonants_counter = 0;
    let vowel_flag=false
    for (let i = 0; i < user_input.value.length; i++) {
        let current_letter = user_input.value[i];
        v=''
        for (let j = 0; j < vowels.length; j++) {
            v=vowels[i]
            if (current_letter == vowels[j]) {
                vowel_counter++;
                vowel_flag=true
                break;
            } 
          
        }
    
        if(!vowel_flag){
            consonants_counter++;

            
        }
        vowel_flag=false


    }

    let answer_element = document.getElementById("answerVowel");
    let answer_element2 = document.getElementById("answerconsonants");

    answer_element.innerHTML = `Number of vowels: ${vowel_counter}`;
    answer_element2.innerHTML = `Number of consonants: ${consonants_counter}`;
}
