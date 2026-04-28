document.addEventListener('DOMContentLoaded', () => {
    // --- Contacto ---
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            showModal('modal-success');
            contactForm.reset();
        });
    }

    // --- Favoritos ---
    const favForm = document.querySelector('.favorites-form');
    if (favForm) {
        favForm.addEventListener('submit', (e) => {
            e.preventDefault();
            showModal('modal-favorito');
            favForm.reset();
        });
    }
});

// Función genérica para mostrar modales
function showModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.add('active');
    }
}

// Función para cerrar modal de contacto
function closeModal() {
    const modal = document.getElementById('modal-success');
    if (modal) {
        modal.classList.remove('active');
    }
}

// Función para cerrar modal de favoritos
function closeFavModal() {
    const modal = document.getElementById('modal-favorito');
    if (modal) {
        modal.classList.remove('active');
    }
}
function openCreateModal() {
  document.getElementById("createModal").classList.add("active");
}

function closeCreateModal() {
  document.getElementById("createModal").classList.remove("active");
}

window.onload = function () {
  document.getElementById("createModal").classList.remove("active");
};

