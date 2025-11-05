let formData = { email: '', message: '' };

const form = document.querySelector('.feedback-form');

form.addEventListener('input', (event) => {
    formData.email = event.target.name === 'email' ? event.target.value : formData.email;
    formData.message = event.target.name === 'message' ? event.target.value : formData.message;
    localStorage.setItem('feedback-form-state', JSON.stringify(formData));

});

window.onload = () => {
    const savedData = localStorage.getItem('feedback-form-state');
    if (savedData) {
        formData = JSON.parse(savedData);
        form.email.value = formData.email;
        form.message.value = formData.message;
    }   
};
form.addEventListener('submit', (event) => {
    event.preventDefault();
    if (formData.email === '' || formData.message === '') {
        alert('Fill please all fields');
        return;
    };
    console.log( formData);
    localStorage.removeItem('feedback-form-state');
    form.reset();
    formData = { email: '', message: '' };
}
);