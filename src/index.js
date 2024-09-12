import './style.css';
import './reset.css';

const dropdownBtn = document.querySelectorAll('#dropdown-button');

const toggleDropdownVisibility = (btn, className) => {
    btn.forEach((button) => {
        button.addEventListener('click', (e) => {
            e.target.nextElementSibling.classList.toggle(className);
        });
    });
};

toggleDropdownVisibility(dropdownBtn, 'hidden');
