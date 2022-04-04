var texts = [
    'Software Engineering',
    'Machine Learning',
    'Artificial Intelligence'
];
var startTime = null;
var i = 0;
var j = 0;
var elmStage = document.getElementById('stage');
var reverse = false;

function textAnimation(stamp){

    if(!startTime) {
        startTime = stamp
    }

    var interval = stamp-startTime;

    if(interval>=70 && reverse) {
        var text = texts[j];
        elmStage.innerText = text.substring(0, k--);

        if(k === 0){
            j++;
            reverse = false;

            if(j>=texts.length) {
                j=0;
            }
        }
    }

    if(interval>=150 && !reverse){
        startTime = stamp;

        var text = texts[j];

        elmStage.innerText = text.substring(0, i++);

        if(i > (text.length + 10)) {
            reverse = true;
            i=0;
            k=text.length;
        }
    }
    requestAnimationFrame(textAnimation);
}

requestAnimationFrame(textAnimation);