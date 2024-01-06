document.querySelectorAll('.filtr_icon_box svg').forEach(function(icon) {
    icon.addEventListener('click', function() {
        // Barcha ikonalardan "active_icon" klassini olib tashlaymiz
        document.querySelectorAll('.filtr_icon_box svg').forEach(function(i) {
            i.classList.remove('active_icon');
        });

        // Bosilgan ikonaga "active_icon" klassini qo'shamiz
        icon.classList.add('active_icon');
    });
});


