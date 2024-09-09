import './style.css';
import './reset.css';

const dropdownBtn = document.querySelector('#dropdown-button');
const dropdownContainer = document.querySelector('#dropdown-container');

dropdownBtn.addEventListener('click', () => {
    dropdownContainer.classList.toggle('hidden');
});

dropdownContainer.addEventListener('click', (e) => {
    console.log(e.target);
});
