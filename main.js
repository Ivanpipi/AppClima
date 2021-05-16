
var input = document.querySelector('.inputUno')
var nombreCiudad = document.querySelector('.nombreCiudad')
var descripcion = document.querySelector('.descripcion')
var temperatura = document.querySelector('.temperatura')


function TemperaturaBuscar(inputUno) {

    var inputUno = document.querySelector('.inputUno')

    var APIcode = 'a7adfec41d86cb1fb52dbbad5204583a';
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + inputUno.value + '&appid=' + APIcode)

        .then(function (resp) { return resp.json() })
        .then(function (data) {
            Mostrar(data);
        })
        .catch(function () {
            alert("Ingreso una ciudad valida!")
        });


    function Mostrar(d) {
        var celcius = Math.round(parseFloat(d.main.temp) - 273.15);


        document.querySelector('.descripcion').innerHTML = d.weather[0].description;
        document.querySelector('.temperatura').innerHTML = celcius + '°';
        document.querySelector('.nombreCiudad').innerHTML = d.name;
    }



}









