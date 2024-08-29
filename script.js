$(document).ready(function() {
    // Adiciona interação ao hover nas máquinas
    $('.machine').hover(function() {
        $(this).css('background-color', 'rgba(0, 255, 0, 0.3)');
    }, function() {
        $(this).css('background-color', 'rgba(255, 255, 0, 0.3)');
    });
});