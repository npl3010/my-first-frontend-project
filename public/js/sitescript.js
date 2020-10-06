// Popup:
$(document).ready(function() {
    var stopAutoHide;
    function showWindow() {
        $('#popup_background').show();
        // // Stop scrolling:
        // $('html body').css('overflow-y', 'hidden');
        // Auto hide:
        stopAutoHide = setTimeout(hideWindow, 5000);
    }
    function hideWindow() {
        $('#popup_background').hide();
        // // On scroll:
        // $('html body').css('overflow-y', 'scroll');
    }

    // Call function automatically after some time:
    //setTimeout(showWindow, 1000);
    // Close after clicking:
    $('#close-btn').click(function() {
        hideWindow();
        clearTimeout(stopAutoHide);
    })
});