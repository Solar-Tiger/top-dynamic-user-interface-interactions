import './style.css';
import './reset.css';

const dropdownBtns = document.querySelectorAll('#dropdown-button');

const toggleDropdownVisibility = (btn, className) => {
    btn.forEach((button) => {
        button.addEventListener('click', (e) => {
            e.preventDefault();

            const dropdownContainer = e.target.nextElementSibling;

            if (dropdownContainer.classList.contains(className)) {
                collapseAllDropdowns(btn, className);
                dropdownContainer.classList.remove(className);
            } else {
                dropdownContainer.classList.add(className);
            }
        });
    });

    collapseAllDropdownsOutside(btn, className);
};

const collapseAllDropdowns = (dropdownBtns, elClassName) => {
    dropdownBtns.forEach((button) => {
        if (!button.nextElementSibling.classList.contains(elClassName)) {
            button.nextElementSibling.classList.add(elClassName);
        }
    });
};

const collapseAllDropdownsOutside = (
    dropdownBtn,
    dropdownContainerClassName
) => {
    function openDropdown() {
        dropdownBtn.classList.contains(dropdownContainerClassName);
    }

    dropdownBtn.some(openDropdown());

    document.addEventListener('click', (e) => {
        if (!e.target.classList.contains('dropdown-button')) {
            dropdownBtn.forEach((btn) => {
                btn.nextElementSibling.classList.add(
                    dropdownContainerClassName
                );
            });
        }
    });
};

toggleDropdownVisibility(dropdownBtns, 'hidden');
