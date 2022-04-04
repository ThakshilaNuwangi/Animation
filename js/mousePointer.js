var elmCircle = document.createElement('div');
var tmrId = null;

elmCircle.classList.add('pointer');
elmCircle.classList.add('hode');
document.body.append(elmCircle);

addEventListener('mousemove', function (e) {

    if (tmrId) {
        elmCircle.classList.remove('hide');
        this.clearTimeout(tmrId);
        tmrId = null;
    }

    tmrId = this.setTimeout(function () {
        elmCircle.classList.add('hide');
    }, 2000);

    if (elmCircle.classList.contains('hide')) {
        elmCircle.classList.remove('hide');
    }

    var xPos = e.pageX;
    var yPos = e.pageY;

    elmCircle.style.left = xPos + 'px';
    elmCircle.style.top = yPos + 'px';

});