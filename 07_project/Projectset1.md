# Project Related to DOM

# Solution Code

## Project1
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

## Project2

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