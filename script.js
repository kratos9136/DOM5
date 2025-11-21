let card = document.querySelector(".card")
let mainlike = document.querySelector("#mainlike")
let like = document.querySelector("#like")


card.addEventListener("dblclick", function () {
    mainlike.style.opacity = 1
    mainlike.style.transform = 'translate(-50%,-50%) scale(1) rotate(0)'

    setTimeout(function () {
        mainlike.style.transform = 'translate(-50%,-500%) scale(1) rotate(60deg)'

    }, 800)
    setTimeout(function(){
        mainlike.style.opacity = 0
        
    },1000)
    setTimeout(function(){
        mainlike.style.transform= 'translate(-50%,-50%) scale(0) rotate(-60deg)'
    },1200)

    like.style.color="red";



})


like.addEventListener("click", function () {
     if (like.style.color === "red") {
        like.style.color = "white";   
    } else {
        like.style.color = "red";     
    }

})


// let card = document.querySelector('.card')
// let mainlike = document.querySelector('#mainlike')
// let like = document.querySelector('#like')
// let img = document.querySelector('img')

// function likeStyle() {
// like.style.opacity = 1
// like.style.scale = 2
// like.style.rotate = '0deg'
// like.style.transform = 'translate(-50%, -50%)'
// like2.style.color = 'rgb(249, 66, 179)'
// setTimeout(() => {
//     like.style.opacity = 0
//     like.style.scale = 1
// }, 1000)
// }

// img.addEventListener('dblclick', () => {
// likeStyle()
// })
// like2.addEventListener('click', () => {
// likeStyle()
// })
