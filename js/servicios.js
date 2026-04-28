const infoServicios = {
    'Desarrollo Web': {
        descripcion: 'Creación de sitios modernos.',
        image: '../assets/code.jpg',
        icon: '🌐'
    },
    'Curso de IA': {
        descripcion: 'Aprende inteligencia artificial.',
        image: '../assets/ia.jpg',
        icon: '🤖'
    }
};

let servicioActual = null;

function verDetalle(nombreServicio) {
    const modal = document.getElementById('service-modal');
    const title = document.getElementById('modal-title');
    const desc = document.getElementById('modal-description');
    const icon = document.getElementById('modal-icon-content');

    const info = infoServicios[nombreServicio];

    if (info) {
        servicioActual = {
            nombre: nombreServicio,
            descripcion: info.descripcion,
            icon: info.icon,
            image: info.image
        };

        title.innerText = nombreServicio;
        desc.innerText = info.descripcion;
        icon.innerText = info.icon;

        modal.classList.add('active');
    }
}

function closeModal() {
    document.getElementById('service-modal').classList.remove('active');
}

// MODAL CREAR
function abrirModalCrear() {
    document.getElementById('crear-modal').classList.add('active');
}

function cerrarModalCrear() {
    document.getElementById('crear-modal').classList.remove('active');
}

function crearCurso() {
    const titulo = document.getElementById('titulo-curso').value;
    const descripcion = document.getElementById('descripcion-curso').value;
    const imagen = document.getElementById('imagen-curso').value;

    if (!titulo || !descripcion || !imagen) {
        alert("Completa todos los campos");
        return;
    }

    const contenedor = document.querySelector('.services-list');

    const card = document.createElement('div');
    card.classList.add('card', 'card-horizontal');

    card.innerHTML = `
        <div class="card-img">
            <img src="${imagen}">
        </div>
        <div class="card-info">
            <h3>${titulo}</h3>
            <p>${descripcion}</p>
            <button class="btn-ver" onclick="verDetalle('${titulo}')">Ver más</button>
        </div>
    `;

    contenedor.appendChild(card);

    infoServicios[titulo] = {
        descripcion: descripcion,
        image: imagen,
        icon: '📘'
    };

    document.getElementById('titulo-curso').value = '';
    document.getElementById('descripcion-curso').value = '';
    document.getElementById('imagen-curso').value = '';

    cerrarModalCrear();
}
