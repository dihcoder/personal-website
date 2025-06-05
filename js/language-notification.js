document.addEventListener('DOMContentLoaded', function () {
    const notification = document.getElementById('language-notification');
    const closeButton = document.getElementById('close-language-notification');
    const hasClosedNotification = localStorage.getItem('languageNotificationClosed');

    // Mostra a notificação se o usuário não a fechou anteriormente
    if (!hasClosedNotification) {
        // Usa um pequeno atraso para dar tempo de carregar a página e parecer mais animado
        setTimeout(() => {
            notification.classList.add('show');
        }, 1000); // Aparece após 1 segundo
    }

    closeButton.addEventListener('click', function () {
        notification.classList.remove('show');
        notification.classList.add('hide'); // Adiciona classe para animar o fechamento

        // Opcional: Remove a notificação do DOM após a animação para limpar o HTML
        notification.addEventListener('transitionend', function () {
            notification.style.display = 'none';
        }, { once: true }); // Garante que o listener seja removido após uma execução

        // Armazena no localStorage que o usuário fechou a notificação
        // Isso evita que ela apareça novamente na próxima visita
        localStorage.setItem('languageNotificationClosed', 'true');
    });
});