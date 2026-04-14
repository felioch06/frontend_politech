document.addEventListener('DOMContentLoaded', () => {
    renderFavoritos();
});

function renderFavoritos() {
    const container = document.getElementById('favorites-list');
    if (!container) return;

    const favoritos = JSON.parse(localStorage.getItem('favoritos')) || [];
    
    container.innerHTML = '';
    
    if (favoritos.length === 0) {
        container.innerHTML = `
            <div class="favorites-empty">
                <p>Aún no tienes servicios en tus favoritos.</p>
                <a href="servicios.html" class="cta-btn">Explorar servicios</a>
            </div>
        `;
        return;
    }
    
    favoritos.forEach(servicio => {
        const card = document.createElement('div');
        card.className = 'card';
        
        card.innerHTML = `
            <div class="card-img">
                <img src="../assets/${servicio.image}" alt="${servicio.nombre}">
            </div>
            <h3>${servicio.nombre}</h3>
            <p>${servicio.descripcion}</p>
            <button class="btn-eliminar" onclick="eliminarFavorito('${servicio.nombre}')">Eliminar de favoritos</button>
        `;
        
        container.appendChild(card);
    });
}

window.eliminarFavorito = function(nombre) {
    let favoritos = JSON.parse(localStorage.getItem('favoritos')) || [];
    favoritos = favoritos.filter(f => f.nombre !== nombre);
    localStorage.setItem('favoritos', JSON.stringify(favoritos));
    renderFavoritos();
}
