// Constants Declaration

const mainBtn = document.querySelector('.main-btn')
const colorChoose = document.querySelector('.chose-color')

// Main Button Event Listener

mainBtn.addEventListener('click',()=>{
    let rgbStore = ""
    for (let i=0; i<3;i++){
        // Random number is got from getRandomNumber function and added to rgb store
        rgbStore += getRandomNumber() + ","
    }
    // The last comma is removed using slice function
    rgbStore = rgbStore.slice(0, -1);
    // The body background color is changed to rgbstore color value and added 
    // to colorChoose text
    document.body.style.backgroundColor = `rgb(${rgbStore})`
    colorChoose.textContent = `rgb(${rgbStore})`
})

function getRandomNumber(){
    // Random number is returned here
    return Math.floor(Math.random()*255)
}