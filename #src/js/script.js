function testWebP(callback) {
    var WebP = new Image();
    WebP.onload = WebP.onerror = function () {
        callback(WebP.height == 2);
    };
    webp.src = 'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA'
}
testWebP(function (support) {
    if (support == true) {
        document.querySelector('body').classList.add('webp');
    }
});