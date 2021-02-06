
// 
// 

class Weather{
    block
    apiKey = 'e94a06c22c14c9ab3059f89372eb2541'
    url = 'http://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}&units={units}'
    cityName = 'Tallinn'
    iconUrl = 'http://openweathermap.org/img/w/{icon}.png'

     
    units = {
        metric:'metric',
        imperial:'imperial'
    }
    currentUnit = this.units.imperial

    weatherStructure = {
        temperature:0,
        description:'',
        icon:'',
        city:''
    }

    constructor(blockIdName = 'header'){
        this.block = document.getElementById(blockIdName)
    }

    getUrl(){
        return this.url
            .replace('{city name}', this.cityName)
            .replace('{API key}', this.apiKey)
            .replace('{units}', this.currentUnit)
    }

    getIconUrl(iconCode){
        return this.iconUrl.replace('{icon}', iconCode)
    }

    getIconImage(iconCode){
        // <img src="http://x.png">
        return '<img src="' + this.getIconUrl(iconCode) + '">'
    }


    getWeatherData(){

        // ajax
        // XMLHttpRequest - old
        // fetch - new
        fetch(this.getUrl())
            .then(response => response.json())
            .then(data => {
                console.log(data)
                // 1. parse all data
                this.parseData(data)
                console.log(this.weatherStructure)

                // 2 show data on page
                this.showWeatherOnPage()
            })
    }

    parseData(data){
        if (data.name.toString().trim().length > 0) this.weatherStructure.city = data.name
        this.weatherStructure.description = data.weather[0].description
        this.weatherStructure.temperature = data.main.temp
        this.weatherStructure.icon = data.weather[0].icon
    }


    showWeatherOnPage(){
        
        let icon = this.block.querySelector('#icon')
        let temp = this.block.querySelector('#temp')
        let description = this.block.querySelector('#description')
        

        temp.innerText = this.weatherStructure.temperature + ' ' + this.weatherStructure.city
        description.innerText = this.weatherStructure.description
        icon.innerHTML = this.getIconImage(this.weatherStructure.icon)

    }

    linkToEvent(){
        let btn = this.block.querySelector('button[type="button"]')
        btn.innerText = this.units.imperial
        btn.addEventListener('click', event => {

            if (btn.innerText == this.units.imperial)
            {
                this.currentUnit = this.units.imperial
                btn.innerText = this.units.metric

            } 
            else if (btn.innerText == this.units.metric)
            {
                this.currentUnit = this.units.metric
                btn.innerText = this.units.imperial
            }
            this.getWeatherData()
        })

    }



}

let weather = new Weather('header')
weather.getWeatherData()
weather.linkToEvent()
console.log('--- end ---')