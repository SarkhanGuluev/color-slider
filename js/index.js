// Слайдеры
const red = document.querySelector('#red')
const green = document.querySelector('#green')
const blue = document.querySelector('#blue')

// Текст и фон текста
const text = document.querySelector('#text')
const textBg = document.querySelector('#text-bg')

//Выбор кнопки изменения цвета текста и фона
const colorButton = document.querySelector('#color')
const bgColorButton = document.querySelector('#bg-color')

let selectButton = 'color'

bgColorButton.addEventListener('click', function() {
    selectButton = 'backgroundColor'
    this.style.background = 'blue'
    this.style.color = '#fff'
    colorButton.style.background = '#cecece'
    colorButton.style.color = '#000'
})

colorButton.addEventListener('click', function () {
    selectButton = 'color'
    this.style.background = 'blue'
    this.style.color = '#fff'
    bgColorButton.style.background = '#cecece'
    bgColorButton.style.color = '#000'
})

// Привязка событий на ползунки слайдера 
red.addEventListener('change', () => {
    setColor()
})

green.addEventListener('change', () => {
    setColor()
})

blue.addEventListener('change', () => {
    setColor()
})


// Функция изменения цвета
function setColor() {
    let redHex = parseInt(red.value, 10).toString(16)
    let greenHex = parseInt(green.value, 10).toString(16)
    let blueHex = parseInt(blue.value, 10).toString(16)

    if(selectButton === 'color'){
        text.style.color = `#${isDoubleHex(redHex)}${isDoubleHex(greenHex)}${isDoubleHex(blueHex)}`
    }
    if(selectButton === 'backgroundColor') {
        text.style.background = `#${isDoubleHex(redHex)}${isDoubleHex(greenHex)}${isDoubleHex(blueHex)}`
    }
}

// Функция проверки числа на соответствие
function isDoubleHex(number) {
    return number.length < 2 ? `0${number}` : number
} 

