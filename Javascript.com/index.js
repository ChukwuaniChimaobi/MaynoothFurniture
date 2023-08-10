let para = document.getElementById('paragraph')
let select = document.getElementById('select')
let brief = document.getElementById('brief')
let hobby = document.getElementById('my-hobby')
let school = document.getElementById('my-school')


let me = " you"
let us = "everyone"

  select.addEventListener('change', (event) =>{
    let optionSelected = select.value
    let we = me.innerHTML
    let our = us.innerHTML
    
    if(optionSelected === 'Intro' ){
        para.innerText = "My name is Chimaobi,I am a boy and I am 14 years old"
    }else if(optionSelected === 'Hobby') {
        para.innerHTML = "my mind"
    }else if(optionSelected === 'School'){
        para.innerText = "i no dey d0"
    }
    event.preventDefault()
  
  })
// let paragraph = document.getElementById('para')
// let button = document.getElementById('button')

// paragraph.style.visibility = 'hidden'
// button.addEventListener('click', ()=>{
//     paragraph.style.visibility = 'visible'
// })

// let about = document.getElementById('about')
// let button1 = document.getElementById('more-about')

// button1.addEventListener('click',(event)=>{
//     let more = 'I am 14 years old and I live at imiringi road'
//     about.innerHTML = more
// })

// let name = document.getElementById('paragraph')
// let introduction = document.getElementsById('brief')
// let hobby = document.getElementById('my-hobby')
// let school = document.getElementById('my-school')


// let select = document.getElementById('select')
// select.addEventListener('change', ()=>{
//     let optionSelected = select.value 
//     let intro = 'My name is Chimaobi,I am a boy and I am 14 years old'

//     if(optionSelected === introduction){
//         paragraph.innerHTML = intro
//     }
//     let hobby1 = 'I love playing football and watching movies'
//     let school1 = 'The name of my school is Ebidou Comprehensive Academy'  
    
//     conso
// })