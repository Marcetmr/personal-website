
// Mensaje sobre interactividad

console.log('Hoja de Vida Interactiva Cargada');

// Botón para agregar experiencia

function añadirExperiencia() {
    let newExperience = prompt('Introduce experiencia:');
    if (newExperience) {
        let ul = document.getElementById('experience-list');
        let li = document.createElement('li');
        li.textContent = newExperience;
        ul.appendChild(li);
    }
} 

document.getElementById('add-experience').addEventListener('click', añadirExperiencia);

// Botón para agregar habilidades

function añadirHabilidad() {
    let newSkill = prompt('Introduce habilidad');
    let newSkillProgress = prompt('Introduce nivel de conocimiento');
    if (newSkill) {
        let table = document.getElementById('skill-list');
        let tr = document.createElement('tr');
        let tdName = document.createElement('td');
        tdName.textContent = newSkill;
        tr.appendChild(tdName);
        table.appendChild(tr);
        let tdProgress = document.createElement('td');
        let progressBar = document.createElement('progress');
        progressBar.setAttribute('value', newSkillProgress);
        progressBar.setAttribute('max', '100');
        tdProgress.appendChild(progressBar);
        tr.appendChild(tdProgress);
    }
}

document.getElementById('add-skill').addEventListener('click', añadirHabilidad);

// Botón para contactarme

document.getElementById('contact-me').addEventListener('click', function() {
    let contactAttempt = prompt('Ingrese su correo electrónico:');
    if (contactAttempt) {
        alert('Gracias ' +contactAttempt+ ' , me pondré en contacto contigo pronto!');
    }
});

// Bucle para agregar certificaciones

const certificaciones = ['Full-Stack Web Development Bootcamp - Ada School', 'SEO & Web Positioning - Udemy', 'Javascript Algorithms & Data Structure - FreeCodeCamp'];
const mostrarCertificaciones = () => {
    let ul = document.getElementById('listaCertificaciones');

    for (let i = 0; i < certificaciones.length; i++) {
        let li = document.createElement('li');
        li.textContent = certificaciones[i];
        ul.appendChild(li);
    }
}

window.onload = mostrarCertificaciones;

// Botón para ver proyectos anteriores

const misProyectos = ['Descripción de proyecto', 'Diseño de calculadora', 'Hoja de Vida', 'Página web Ada Lovelace'];

document.getElementById('ver-proyectos-anteriores').addEventListener('click', function(){
    let proyectRequest = parseInt(prompt('Cuántos proyectos desea ver? (Máximo 4)'));
    let mensaje = 'Mis proyectos: ';
    
    for (let i=0; i<proyectRequest; i++){
        mensaje = mensaje + misProyectos[i] + ', ';
    }
    alert(mensaje);
})

// Botón para calificar mi hoja de vida

const calificarHojaDeVida = () => {
    let calificacion = prompt('Del 1 al 10, ¿cómo calificarías mi hoja de vida?');
    alert(`¡Gracias por calificar con un ${calificacion}!`);
}

document.getElementById('califica-mi-CV').addEventListener('click', calificarHojaDeVida);