import './style.css';
import './reset.css';

const dropdownBtns = document.querySelectorAll('.dropdown-button');

const toggleDropdownVisibility = (btn, className) => {
    btn.forEach((button) => {
        button.addEventListener('click', (e) => {
            e.stopPropagation();

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
    document.addEventListener('click', (e) => {
        const checkIfParentContainer = (parentContainer) => {
            return parentContainer.parentNode.contains(e.target);
        };

        const arrDropdownBtn = Array.from(dropdownBtn);

        if (!arrDropdownBtn.some(checkIfParentContainer)) {
            dropdownBtn.forEach((dropdown) => {
                dropdown.nextElementSibling.classList.add(
                    dropdownContainerClassName
                );
            });
        }
    });
};

toggleDropdownVisibility(dropdownBtns, 'hidden');

export default toggleDropdownVisibility;
