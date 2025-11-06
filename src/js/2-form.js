let formData = { email: '', message: '' };

const form = document.querySelector('.feedback-form');



function initializeForm() {
    
    const savedData = localStorage.getItem('feedback-form-state');
    if (savedData) {
        const parsedData = JSON.parse(savedData);
        form.email.value = parsedData.email || '';
        form.message.value = parsedData.message || '';
        formData.email = parsedData.email || '';
        formData.message = parsedData.message || '';
    }
    
    form.addEventListener('input', (event) => {

        formData.email = event.target.name === 'email' ? event.target.value : formData.email;
        formData.message = event.target.name === 'message' ? event.target.value : formData.message;
        console.log(formData);
        localStorage.setItem('feedback-form-state', JSON.stringify(formData));
    });

    form.addEventListener('submit', (event) => {

        event.preventDefault();

        if (formData.email === '' || formData.message === '') {
            alert('Fill please all fields');
            return;
        }

        console.log(formData);
        localStorage.removeItem('feedback-form-state');
        form.reset();
        formData = { email: '', message: '' };
    });
}

// Ініціалізуємо форму після завантаження DOM
document.addEventListener('DOMContentLoaded', initializeForm);