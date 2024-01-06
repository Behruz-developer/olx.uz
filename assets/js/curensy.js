document.querySelectorAll('.currency_box p').forEach(function(currency) {
    currency.addEventListener('click', function() {
        // Barcha valyutalardan "active_currency" klassini olib tashlaymiz
        document.querySelectorAll('.currency_box p').forEach(function(c) {
            c.classList.remove('active_currency');
        });

        // Bosilgan valyutaga "active_currency" klassini qo'shamiz
        currency.classList.add('active_currency');
    });
});
