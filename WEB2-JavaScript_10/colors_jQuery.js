function setColor(color) {
//     var alist = document.querySelectorAll('a');
//     var i = 0;
//     while(i < alist.length) {
//         alist[i].style.color = color;
//         i += 1;
// }
        $('a').css('color', color);
}

function NightDayHandler(parameter) {
    var target = document.querySelector('body');
if(parameter.value === 'night')  {
    target.style.backgroundColor = 'black';
    target.style.color = 'white';
    parameter.value = 'day';
    
    setColor('powderblue');
}
else  {
    target.style.backgroundColor = 'white';
    target.style.color = 'black';
    parameter.value = 'night';

    setColor('blue');
}
}