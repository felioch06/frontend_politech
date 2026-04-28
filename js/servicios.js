// Datos de los servicios
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
    }
};

let servicioActual = null;

// Ver detalle
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

// Cerrar modal
function closeModal() {

    const modal = document.getElementById('service-modal');

    if (modal) {
        modal.classList.remove('active');
    }
}

// Favoritos
function añadirAFavoritos() {

    if (!servicioActual) return;

    let favoritos = JSON.parse(
        localStorage.getItem('favoritos')
    ) || [];

    const existe = favoritos.some(
        fav => fav.nombre === servicioActual.nombre
    );

    if (!existe) {

        favoritos.push(servicioActual);

        localStorage.setItem(
            'favoritos',
            JSON.stringify(favoritos)
        );

        alert(
            `${servicioActual.nombre} añadido a favoritos`
        );

    } else {

        alert('Ya está en favoritos');
    }

    closeModal();
}

document.addEventListener('DOMContentLoaded', () => {

    const btnFav = document.getElementById(
        'btn-add-favorite'
    );

    if (btnFav) {
        btnFav.addEventListener(
            'click',
            añadirAFavoritos
        );
    }
});

// Abrir modal crear
function openCreateModal() {

    document
        .getElementById('create-modal')
        .classList.add('active');
}

// Cerrar modal crear
function closeCreateModal() {

    document
        .getElementById('create-modal')
        .classList.remove('active');
}

// Crear servicio
function crearServicio() {

    const titulo = document.getElementById(
        'new-title'
    ).value;

    const descripcion = document.getElementById(
        'new-description'
    ).value;

    const imagen = document.getElementById(
        'new-image'
    ).value;

    if (!titulo || !descripcion || !imagen) {

        alert('Completa todos los campos');

        return;
    }

    const container = document.getElementById(
        'services-container'
    );

    const nuevaCard = document.createElement('div');

    nuevaCard.classList.add(
        'card',
        'card-horizontal'
    );

    nuevaCard.innerHTML = `
        <div class="card-img">
            <img src="${imagen}" alt="${titulo}">
        </div>

        <div class="card-info">
            <h3>${titulo}</h3>

            <p>${descripcion}</p>

            <button 
              class="btn-ver"
              onclick="verDetalle('${titulo}')"
            >
              Ver más
            </button>
        </div>
    `;

    container.appendChild(nuevaCard);

    infoServicios[titulo] = {
        descripcion: descripcion,
        image: imagen,
        icon: '📚'
    };

    document.getElementById(
        'new-title'
    ).value = '';

    document.getElementById(
        'new-description'
    ).value = '';

    document.getElementById(
        'new-image'
    ).value = '';

    closeCreateModal();

    alert('Curso creado correctamente');
}
