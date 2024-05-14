// Описаний у документації
import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";


const form = document.querySelector('.form');

form.addEventListener('submit', function (event) {
    event.preventDefault();

    const formData = new FormData(this);
    const delay = formData.get('delay');
    const state = formData.get('state');

    const promise = new Promise((resolve, reject) => {
        if (state === 'fulfilled') {
            setTimeout(() => {
                resolve(delay);
            }, delay);
        } else if (state === 'rejected') {
            setTimeout(() => {
                reject(delay);
            }, delay);
        }
    });

    promise.then((delay) => {
        iziToast.success({
            message: `✅ Fulfilled promise in ${delay}ms`,
            position: 'topRight'
        });
    }).catch((delay) => {
        iziToast.error({
            message: `❌ Rejected promise in ${delay}ms`,
            position: 'topRight'
        });
    });
});