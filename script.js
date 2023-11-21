//your JS code here. If required.
function openModal() {
    var modalContainer = document.getElementById('modalcontainer');
	    var btn = document.getElementById('openModal');

    var closeButton = document.getElementByClassName('close-modal')[0];

    btn.onclick = function () {
        modalContainer.style.display = 'block';
    }

    window.onclick = function (event) {
        if (event.target === modal) {
            modalContainer.style.display = 'none';
        }
    }

    closeButton.onclick = function () {
        modalContainer.style.display = 'none';
    }
});
