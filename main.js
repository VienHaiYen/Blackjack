let cards=[]
let ableToGet=true

function getNewCard(){
    if (ableToGet==true){
        let randomCard=Math.floor(Math.random()*10)+1
        cards.push(randomCard)
        outputResult()
    }
}
let start_ele= document.querySelector('.start_screen')
start_ele.addEventListener('click',changePage)
blur_ele = document.querySelector('.blur')

function changePage(){
    start_ele.classList.remove('display')
    blur_ele.classList.add('display')
}

let card_ele= document.querySelector('#cards')
let total_ele= document.querySelector('#total')

let newCard_ele= document.querySelector('#new-card_btn')
let restart_ele= document.querySelector('#restart_btn')

newCard_ele.addEventListener('click',getNewCard)
restart_ele.addEventListener('click',newGame)

let back_ele= document.querySelector('.back')
back_ele.addEventListener('click',returnHome)
function returnHome(){
    blur_ele.classList.remove('display')
    start_ele.classList.add('display')

}

let status_ele= document.querySelector('#status_game')

function outputResult(){
    card_ele.textContent = `Cards: `+ cards.join(' ')
    sum=cards.reduce((total, curr)=>{
        return total+curr
    },0)
    checkSum(sum)
    total_ele.textContent =`Total: ${sum}`
}


function checkSum(sum) {
    if(sum<16){
        status_ele.textContent='Please get one more'
    }
    else if(sum==21){
        status_ele.textContent='WIN'
        ableToGet=false
    }
    else if(sum>=15 && sum<=20){
        status_ele.textContent='Do you want a new card ?'
    }
    else if(sum>21){
        ableToGet=false
        status_ele.textContent='YOU FAILED'
    }
}

function newGame(){
    ableToGet=true
    cards=[]
    outputResult()
    status_ele.textContent='Start Game'
}