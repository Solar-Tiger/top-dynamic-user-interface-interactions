import './style.css';
import './reset.css';

const dropdownBtns = document.querySelectorAll('#dropdown-button');

const toggleDropdownVisibility = (btn, className) => {
    btn.forEach((button) => {
        button.addEventListener('click', (e) => {
            e.preventDefault();

            const dropdownContainerClass =
                e.target.nextElementSibling.classList;

            if (dropdownContainerClass.contains(className)) {
                collapseAllDropdowns(btn, className);
                dropdownContainerClass.remove(className);
            } else {
                dropdownContainerClass.add(className);
            }
        });
    });
};

const collapseAllDropdowns = (dropdownBtns, elClassName) => {
    dropdownBtns.forEach((button) => {
        if (!button.nextElementSibling.classList.contains(elClassName)) {
            button.nextElementSibling.classList.add(elClassName);
        }
    });
};

toggleDropdownVisibility(dropdownBtns, 'hidden');
