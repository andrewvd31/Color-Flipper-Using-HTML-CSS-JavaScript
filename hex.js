// Constant Decalaration
const colorArray = ["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"]
const mainBtn = document.querySelector('.main-btn')
const colorChoose = document.querySelector('.chose-color')

// Main Button Event Listener For Hex Code
mainBtn.addEventListener('click',()=>{
    let rgbStore = ""
    for (let i=0; i<6;i++){
        // Random number is got from getRandomNumber function and a value is got from 
        //color array and added to rgb store
        rgbStore += colorArray[getRandomNumber()]
    }
    // The body background color is changed to rgbstore color value and added 
    // to colorChoose text
    document.body.style.backgroundColor = `#${rgbStore}`
    colorChoose.textContent = `#${rgbStore}`
})

function getRandomNumber(){
    // Random number is returned here
    return Math.floor(Math.random()*colorArray.length)
}