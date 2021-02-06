

class Exercise {

    #form;
    #input;
    #result;
    btn;

    #divWidth;
    #divHeight;

    divColors = ['#FF5733', '#6D8AD2', '#54B33A']

    constructor(formName, resultName, divWidth = 50, divHeight = 50){
        console.log("hello form constructor [ " + formName + " ]")
        // 1 get form as object
        this.#form = document.querySelector('form[name="' + formName + '"]')

        // 2 get input 
        this.#input = this.#form.querySelector('input[type="text"]')
        
        // 3 get button
        this.btn = this.#form.querySelector('button[type="button"]')

        // 4 
        this.linkKeyboardEvent()

        // 5 
        this.#result = document.getElementById(resultName)

        // 6 link event to button 
        this.linkEventToButton()

        // 7 set new width and height
        this.#divWidth = divWidth
        this.#divHeight = divHeight
    }


    isNumber(){
        if (isNaN(this.#input.value))
        {
            console.log("Insert a number")
            return false
        } 
        return true
    }

    linkKeyboardEvent(){
        this.#input.addEventListener('keydown', event => {
            //console.log(event.keyCode)
            if (!(event.keyCode >= 48 && event.keyCode <= 57) && 
                !(event.keyCode >= 96 && event.keyCode <= 105))
            {
                event.preventDefault()
            } else {
                this.isNumber()
            }
        })
    }

    linkEventToButton(){
        this.btn.addEventListener('click', event => {
            // TODO:  create logic
            this.drawDiv()
        })
    }

    getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    createDivObject(){
        let div = document.createElement('div')
        div.style.width = this.#divWidth + 'px'
        div.style.height = this.#divHeight + 'px'
        div.style.margin = '10px';
        div.style.border = '1px';
        div.style.borderStyle = 'solid'
        div.style.borderColor = 'black'

        let index = this.getRandomInt(0, this.divColors.length - 1)
        div.style.backgroundColor = this.divColors[index]


        return div
    }

    drawDiv(){
        if (this.isNumber() == true){
            let loops = this.#input.value

            let resultHTML = ''
            for (let index = 0; index < loops; index++) {
                
                resultHTML += this.createDivObject().outerHTML
            }
            this.#result.innerHTML = resultHTML
        }
    }

}


let box = new Exercise('formula', 'result')
console.log("fff")

let box2 = new Exercise('formula-2', 'result', 200, 100)