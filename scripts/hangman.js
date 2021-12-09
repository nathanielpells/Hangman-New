console.log('test');

let word = 'pells';



let allLetters = document.querySelectorAll('.alphabetContainer .letter');
let guessContainer = document.querySelector('.guessContainer');
// console.log(allLetters);

let guessLetterHTML = '<div class="guessLetter"></div>';
for(counter=0; counter < word.length; counter++){
    guessContainer.insertAdjacentHTML( 'beforeend', guessLetterHTML );
}

let guessLetters = document.querySelectorAll('.guessLetter');

allLetters.forEach(function (letter){
    // console.log(letter)
    letter.addEventListener('click',function(event){
        let currentLetterHTML = event.target
        if(!currentLetterHTML.classList.contains('clicked')){
            let currentLetter = event.target.innerHTML.toLowerCase(); 
            currentLetterHTML.classList.add('clicked');
            let answers =[...word.matchAll(currentLetter)];
            // console.log(answers);
            if(answers){
                answers.forEach(function(answer){
                    // console.log(answer.index);
                    for(counter=0; counter < guessLetters.length; counter++){
                        if(counter == answer.index){
                            // console.log('Correct letter')
                            guessLetters[answer.index].innerHTML = currentLetter.toUpperCase();
                        }
                    }
                })
            } else {
                //show the next part of the hangman.
            }
        } 
    }); 
});

