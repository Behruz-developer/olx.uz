document.addEventListener('DOMContentLoaded', function () {
    const listIcon = document.querySelector('[data-testid="list-icon"]');
    const gridIcon = document.querySelector('[data-testid="grid-icon"]');
    const categoryBox = document.querySelector('.category_box');

    listIcon.addEventListener('click', function () {
        categoryBox.classList.add('list-view');
        categoryBox.classList.remove('grid-view');
    });

    gridIcon.addEventListener('click', function () {
        categoryBox.classList.add('grid-view');
        categoryBox.classList.remove('list-view');
    });
});