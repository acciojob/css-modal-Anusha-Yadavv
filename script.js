//your JS code here. If required.
	    var btn = document.getElementById('openModal');
    btn.onclick= function() {
	

    var modalContainer = document.getElementById('modalcontainer');

    var closeButton = document.getElementByClassName('close-modal')[0];

    btn.onclick = function () {
        modalContainer.style.display = 'block';
    }

    window.onclick = function (event) {
        if (event.target === modalContainer) {
            modalContainer.style.display = 'none';
        }
    }

    closeButton.onclick = function () {
        modalContainer.style.display = 'none';
    }
}