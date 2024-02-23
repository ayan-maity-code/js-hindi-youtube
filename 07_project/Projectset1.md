# Project Related to DOM

# Solution Code

## Project1(background color chnanging)
``` javascript
const button = document.querySelectorAll('.button')
const body = document.querySelector('body')

button.forEach(function(button){
    console.log(button)
    button.addEventListener('click' , function(event){
      console.log(event)
      console.log(event.target)
      const bgColor = event.target.id
          switch(bgColor === 'click'){
            case bgColor === 'grey':
                    body.style.backgroundColor = bgColor
                    break
            case bgColor === 'white':
                    body.style.backgroundColor = bgColor
                    break
            case bgColor === 'blue':
                    body.style.backgroundColor = bgColor
                    break
            case bgColor === 'yellow':
                    body.style.backgroundColor = bgColor
                    break
                }
      // if(event.target.id === 'grey'){
      //   body.style.backgroundColor = event.target.id
      // }
      // else if(event.target.id === 'white'){
      //   body.style.backgroundColor = event.target.id
      // }
      // else if(event.target.id === 'blue'){
      //   body.style.backgroundColor = event.target.id
      // }
      // else if(event.target.id === 'yellow'){
      //   body.style.backgroundColor = event.target.id
      // }
    })

})
```

## Project2(BMI calculator)

```javascript
const form = document.querySelector('form')
// this usecase will give you empty
// const height = parseInt(document.querySelector('#height').value)
form.addEventListener('submit' , function(event){
      event.preventDefault()
      const height = parseInt(document.querySelector('#height').value)
      const weight = parseInt(document.querySelector('#weight').value)
      const results = document.querySelector('#results')
  
      if( height === '' || height < 0 || isNaN(height)){
        results.innerHTML = `Please provide a valid height ${height}`
      }
      else if( weight === '' || weight < 0 || isNaN(weight)){
        results.innerHTML = `Please provide a valid weight ${weight}`
      }
      else{
        const bmi = (weight / ((height*height) / 10000 )) .toFixed(2)
        // results.innerHTML = `<span>${bmi}</span>`
        if(bmi < 18.6){
          results.innerHTML = `under weight : <span>${bmi}</span>`
        }
        else if(bmi>=18.6 && bmi<=24.9){
          results.innerHTML = `Normal Range : <span>${bmi}</span> `
        }
        else {
          results.innerHTML = `Overweight : <span>${bmi}</span>`
        }
      }
})
```

## Project3(display clock)

```javascript
const clock = document.getElementById('clock')
// const lock = document.querySelector('#clock')

setInterval(function(){
  let date = new Date()
  // console.log(date.toLocaleTimeString()) 
  clock.innerHTML = date.toLocaleTimeString()
} , 1000);
```

## Project4(guess the number)

```javascript
let randomNum = parseInt(Math.random()*100 + 1)

const submit = document.querySelector('#subt')
const userInput = document.querySelector('#guessField')
const guessSlot = document.querySelector('.guesses')
const remainig = document.querySelector('.lastResult')
const lowOrHi = document.querySelector('.lowOrHi')
const startOver = document.querySelector('.resultParas')

let p = document.createElement('p')

let prevGuess = []
let numGuess = 1
let playGame = true
if(playGame){
  submit.addEventListener('click' , function(e){
    e.preventDefault()
    const guess = parseInt(userInput.value)
    console.log(guess)
    validateGuess(guess)

  });
}
function validateGuess(guess){
  if(isNaN(guess)){
    alert('Please enter a valid number')
  } else if( guess < 1){
    alert('Please enter a number more than 1')
  } else if(guess > 100){
    alert('Please enter a number less than 100')
  } else{
    prevGuess.push(guess)
    if(numGuess === 11){
      displayGuess(guess)
      displayMessage(`Game Over. Random number was ${randomNum}`)
      endGame()
    }
    else{
      displayGuess(guess)
      checkGuess(guess)
    }
  }
}

function checkGuess(guess){
  if(guess === randomNum){
    displayMessage('You Guessed it right')
    endGame()
  } else if( guess < randomNum){
    displayMessage('Number is Too Low')
  } else if( guess > randomNum){
    displayMessage('Number is Too high')
  }
}

function displayGuess(guess){
  userInput.value = ''
  guessSlot.innerHTML += `${guess} , `
  numGuess++
  remainig.innerHTML = `${11 - numGuess}`
}

function displayMessage(message){
  lowOrHi.innerHTML = `<h2>${message}</h2>`
}

function newGame(){
  const newGameButton = document.querySelector('#newGame')
  newGameButton.addEventListener('click' , function(e){
    randomNum = parseInt(Math.random()*100 + 1)
    prevGuess = []
    numGuess = 1
    guessSlot.innerHTML =''
    remainig.innerHTML = `${11 - numGuess}`
    userInput.removeAttribute('disabled')
    startOver.removeChild(p)
    playGame = true
  })
}

function endGame(){
  userInput.value =''
  userInput.setAttribute('disabled' , '')
  p.classList.add('button')
  p.innerHTML = `<h2 id="newGame">Start new Game</h2>`
  startOver.appendChild(p)
  playGame = false
  newGame()
}
```