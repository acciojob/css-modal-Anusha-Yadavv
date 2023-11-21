//your JS code here. If required.

document.addEventListener('DOMContentLoaded', function () {
    var modal = document.getElementById('myModal');
    var btn = document.getElementById('openModal');
    var closeButton = document.getElementsByClassName('close-modal')[0];

    btn.onclick = function () {
        modal.style.display = 'block';
    }

    window.onclick = function (event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    }

    closeButton.onclick = function () {
        modal.style.display = 'none';
    }
});
