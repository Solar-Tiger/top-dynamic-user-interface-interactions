# A simple way to handle dropdown menus

Whether you have one, two, three or more dropdown menus, this npm package can handle them all!

## How to use

This NPM package has one, simple function: **toggleDropdownVisibility**

It takes the button **element** as a querySelector/querySelectorAll as the first argument and the **class name** you have hiding your dropdown container as the second argument

const dropdownBtns = document.querySelectorAll(".dropdown-button")

**toggleDropdownVisibility(dropdownBtns, "hidden")**

And that's all! Each dropdown you create will hide/reveal itself when you click the button or click anywhere that isn't the container!
