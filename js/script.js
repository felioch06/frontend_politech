document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.querySelector('.contact-form');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            showModal();
            contactForm.reset();
        });
    }
});

function showModal() {
    const modal = document.getElementById('modal-success');
    if (modal) {
        modal.classList.add('active');
    }
}

function closeModal() {
    const modal = document.getElementById('modal-success');
    if (modal) {
        modal.classList.remove('active');
    }
function verDetalle(servicio) {
    alert("Estás viendo el servicio: " + servicio);
}    
}
