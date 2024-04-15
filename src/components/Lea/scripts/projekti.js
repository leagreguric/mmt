
function draw() {
    var canvas = document.querySelector('canvas');
    if (canvas.getContext) {
        var ctx = canvas.getContext('2d');
        ctx.fillStyle = 'rgb(200, 0, 0)';
        ctx.fillRect(10, 10, 50, 50);
        ctx.fillStyle = 'rgba(0, 0, 200, 0.5)';
        ctx.fillRect(30, 30, 50, 50);
    }
}

document.addEventListener('DOMContentLoaded', function() {
    var content = document.getElementById('content');
    content.style.opacity = '1';
    content.style.marginTop = '0';

    var h2Elements = document.querySelectorAll('h2');
    h2Elements.forEach(function(element) {
        element.addEventListener('click', function() {
            var subtext = this.nextElementSibling;
            subtext.style.display = subtext.style.display === 'none' ? 'block' : 'none';

            var hex = this.querySelector('.hex');
            hex.classList.toggle('moved');
        });
    });
});
