document.addEventListener('DOMContentLoaded', function() {
    cookies = document.cookie.split('; ').reduce((prev, current) => {
        const [name, ...value] = current.split('=');
        prev[name] = value.join('=');
        return prev;
      }, {});

    person = {
        nombre : document.getElementById("nombre"),
        apellido : document.getElementById("apellido"),
        correo : document.getElementById("correo"),
        carrera : document.getElementById("carrera"),
    }

    var result = document.getElementById("result").getElementsByTagName("p")[0];
    if(cookies.nombre){
        result.innerHTML = `Buenos dias ${cookies.nombre} ${cookies.apellido}, recuerdo que tu correo es ${cookies.correo} y tu carrera ${cookies.carrera}.`;
        document.getElementsByClassName("container")[0].style.display = "none";
    }
 }, false);

function create_cookie(){
    for(key in person){
        document.cookie = `${key}=${person[key].value}; max-age=7200`;
    }
}