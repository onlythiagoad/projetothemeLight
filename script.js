const username = document.getElementById('itext')
const password = document.getElementById('ipassword')
const stateButton = document.querySelector(".state")
const button = document.getElementById("button")


const whiteTeme = [
    document.querySelector("body"),
    document.querySelector(".box"),
    document.querySelectorAll("label"),
    document.querySelector(".submit"),
    document.querySelector('.remember')
]




function animateInteracte(){
    username.classList.add('show')
}

username.addEventListener('keypress',animateInteracte)
username.addEventListener("mouseenter",animateInteracte)

function removeAnimate(){
    username.classList.remove('show')
    password.classList.remove('show')
    if(username.value.length > 1){
        username.style.height = '30px'
    }
     else{
        username.style.height = '8px'
    }

    if(password.value.length > 1){
        password.style.height = '30px'
    } else{
        password.style.height = '8px'
    }
}

username.addEventListener('mouseleave',removeAnimate)

password.addEventListener("mouseenter", ()=>{
    password.classList.add('show')

    password.addEventListener("keypress",()=>{
        password.classList.add("show")
    })

})


password.addEventListener('mouseleave', removeAnimate)

stateButton.addEventListener("click",()=>{
    stateButton.classList.toggle("mode")
    
    const titLogin = document.querySelector(".titLogin")
    const input = document.querySelectorAll("input")

    input.forEach((elInput)=>{
        elInput.classList.toggle("inputWhite")
    })

    button.classList.toggle("buttonWhite")
    stateButton.classList.toggle("stateWhite")
    titLogin.classList.toggle("titWhite")

    whiteTeme.map((elemento,index,array)=>{
        array[0].classList.toggle('bodyWhite')
        array[1].classList.toggle('boxWhite')
        array[2].forEach((elLabel)=>{
            elLabel.classList.toggle('labelWhite')
        })
        array[3].classList.toggle("submitWhite")
        array[4].classList.toggle('rememberWhite')
    })
    
})