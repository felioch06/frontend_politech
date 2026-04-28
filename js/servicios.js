// Datos de los servicios para el modal
const infoServicios = {
    'Desarrollo Web': {
        descripcion: 'Creación de sitios modernos.',
        image: 'code.jpg',
        icon: '🌐'
    },
    'Curso de IA': {
        descripcion: 'Aprende inteligencia artificial.',
        image: 'ia.jpg',
        icon: '🤖'
    },
    'Soporte IT': {
        descripcion: 'Soluciones técnicas.',
        image: 'IT.webp',
        icon: '🛠️'
    },
    'Cloud Computing': {
        descripcion: 'Servicios en la nube.',
        image: 'cloud.png',
        icon: '☁️'
    },
    'Ciberseguridad': {
        descripcion: 'Protección de datos.',
        image: 'cyber.webp',
        icon: '🛡️'
    },
    'Consultoría Tech': {
        descripcion: 'Optimización digital.',
        image: 'consultory.webp',
        icon: '📊'
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
    const modal = document.getElementById('service-modal');
    if (modal) {
        modal.classList.remove('active');
    }
}

function añadirAFavoritos() {
    if (!servicioActual) return;
    
    let favoritos = JSON.parse(localStorage.getItem('favoritos')) || [];
    
    const existe = favoritos.some(fav => fav.nombre === servicioActual.nombre);
    
    if (!existe) {
        favoritos.push(servicioActual);
        localStorage.setItem('favoritos', JSON.stringify(favoritos));
        alert(`${servicioActual.nombre} ha sido añadido a tus favoritos.`);
    } else {
        alert('Este servicio ya está en tus favoritos.');
    }
    
    closeModal();
}

document.addEventListener('DOMContentLoaded', () => {
    const btnFav = document.getElementById('btn-add-favorite');
    if (btnFav) {
        btnFav.addEventListener('click', añadirAFavoritos);
    }
});

// Abrir modal
function abrirModalCrear() {
    document.getElementById('crear-modal').classList.add('active');
}

// Cerrar modal
function cerrarModalCrear() {
    document.getElementById('crear-modal').classList.remove('active');
}

// Crear curso dinámicamente
function crearCurso() {
    const titulo = document.getElementById('titulo-curso').value;
    const descripcion = document.getElementById('descripcion-curso').value;
    const imagen = document.getElementById('imagen-curso').value;

    if (!titulo || !descripcion || !imagen) {
        alert("Completa todos los campos");
        return;
    }

    // Crear estructura HTML
    const contenedor = document.querySelector('.services-list');

    const card = document.createElement('div');
    card.classList.add('card', 'card-horizontal');

    card.innerHTML = `
        <div class="card-img">
            <img src="${imagen}" alt="${titulo}">
        </div>
        <div class="card-info">
            <h3>${titulo}</h3>
            <p>${descripcion}</p>
            <button class="btn-ver" onclick="verDetalle('${titulo}')">Ver más</button>
        </div>
    `;

    contenedor.appendChild(card);

    // Guardar también en el objeto para que funcione el modal
    infoServicios[titulo] = {
        descripcion: descripcion,
        image: imagen,
        icon: '📘'
    };

    // Limpiar inputs
    document.getElementById('titulo-curso').value = '';
    document.getElementById('descripcion-curso').value = '';
    document.getElementById('imagen-curso').value = '';

    cerrarModalCrear();
}
