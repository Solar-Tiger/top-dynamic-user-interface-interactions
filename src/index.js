import './style.css';
import './reset.css';

const dropdownBtns = document.querySelectorAll('#dropdown-button');

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
        // if (!e.target.closest('div')) {
        //     dropdownBtn.forEach((btn) => {
        //         btn.nextElementSibling.classList.add(
        //             dropdownContainerClassName
        //         );
        //     });
        // }

        dropdownBtn.forEach((btn) => {
            const btnContainer = btn.parentNode;

            console.log(e.target.parentNode.parentNode);

            if (btnContainer.contains(e.target.parentNode.parentNode)) {
                console.log(e.target.parentNode.parentNode);
                console.log(btn);
            } else {
                console.log('NOT THE TARGET');
                console.log(btn);
            }
        });
    });
};

toggleDropdownVisibility(dropdownBtns, 'hidden');
