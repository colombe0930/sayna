const text = document.querySelector(".input p")
const stoc = document.querySelector(".stockage p")
const rep = document.querySelector(".input h3")
const btns = document.querySelectorAll(".btn button")
const equal = document.querySelector(".egal")
const racine = document.querySelector('.racine');
let calc = []
let stock = []
btns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        calc.push(e.target.textContent)
        text.textContent = calc.join('')

    })
})

equal.addEventListener("click", () => {
    if (!(calc.length < 2 && isNaN(calc.join('')))) {
        rep.textContent = eval(calc.join(""))
        stock.push(calc.join('') + ` = ${eval(calc.join(""))}`)
        let txt = ''
        stock.forEach(value => {
            txt += '<br> ' + value
        })
        stoc.innerHTML = txt
        calc = [];
    }
})

let del = document.querySelector('.adel');
let ac = document.querySelector('.aAC');

del.addEventListener('click', () => {
    if (calc.length > 1) {
        calc.pop();
        text.textContent = calc.join('');
    } else {
        text.textContent = '0';
    }
})

ac.addEventListener('click', () => {
    calc = [];
    text.textContent = '0';
})

racine.addEventListener('click', () => {
    calc = [Math.sqrt(parseInt(calc.join('')))];
    rep.textContent = calc;
})

window.addEventListener('keypress', (e) => {
    if (!isNaN(e.key)) {
        calc.push(e.key)
        text.textContent = calc.join('')
    }
})

let histo = document.querySelector('.histo');
let stockage = document.querySelector('.stockage');

histo.addEventListener('click', function() {
    stockage.classList.toggle('active')
})