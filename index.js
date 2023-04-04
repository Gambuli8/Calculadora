//muestra cuando se carga la pagina
window.addEventListener('load', () => {
    //traemos todos los numeros
    const display = document.querySelector('.result');
    const numbers = document.getElementsByClassName('btn');

    //convertimos el HTMLCollection en un array
    const arrayNumbers = Array.from(numbers);

    //recorremos el array de numeros
    arrayNumbers.forEach((button) => {

        //agregamos un evento click a cada boton
        button.addEventListener('click', () => {
            calculadora(button, display)
        });
    });
});


const calculadora = (button, display) => {
    switch (button.innerHTML) {
        case 'AC':
            borrar(display);
            break;
        case '=':
            resultado(display);
            break;
        default:
            actualizar(display, button);
            break;
    };
};


    function resultado(display) {
        display.innerHTML = eval(display.innerHTML);
    }

// const resultado = (display) => {
//     display.innerHTML = eval(display.innerHTML); //tomar el string, resolverlo y guardarlo en el innerHTML del display
// };

const borrar = (display) => {
    display.innerHTML = 0;
}

const actualizar = (display, button) => {
    if(display.innerHTML == '0'){
        display.innerHTML = '';
    }
    display.innerHTML += button.innerHTML;
}