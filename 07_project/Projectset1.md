# Project Related to DOM

# Solution Code

## Project1
```
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