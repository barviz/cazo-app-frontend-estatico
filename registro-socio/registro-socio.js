const stepCircle = document.querySelectorAll(".progress-step");
const btnNextAll = document.querySelectorAll(".next");
const btnPrevAll = document.querySelectorAll(".prev");
const allForms = document.querySelectorAll(".form-step");;
const progress = document.getElementById("progress");

let cantFormActual = 0;

btnNextAll.forEach((button) => {
    button.addEventListener('click', () => {
        cantFormActual++;

        updateCircles();
        updateBar();

    });
});

btnPrevAll.forEach((button) => {
    button.addEventListener('click', () => {
        /*Queda con el valor actual del cantFormActual cuando presionamos en un botón
        siguiente y este botón lo único que hace es decrementarlo para volver hacía atrás*/
        cantFormActual--;


        updateCircles();
        updateBar();

    });
});

function updateCircles() {

    allForms.forEach((formStep) => {
        /*
            Si un formulario contiene la clase form-step-active el contains
            devuelve un true y por lo tanto aplicará el método remove
        */
        formStep.classList.contains("form-step-active") &&
            formStep.classList.remove("form-step-active");
    });

    allForms[cantFormActual].classList.add("form-step-active");

}


function updateBar() {

    stepCircle.forEach((stepCircle, i) => {
        if (i < cantFormActual + 1) {
            stepCircle.classList.add("progress-step-active");
        } else {
            stepCircle.classList.remove("progress-step-active");
        }
    });

    const progressActive = document.querySelectorAll(".progress-step-active");

    progress.style.width = ((progressActive.length - 1) / (stepCircle.length - 1)) * 100 + "%";

}




