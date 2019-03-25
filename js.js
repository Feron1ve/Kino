 var colorArray2 = document.body.getElementsByClassName("container");
    for (var i = 0; i < colorArray2.length; i++) {
        var innerHtml = "";
        for (var j = 0; j < 99; j++) {
            innerHtml += '<div class="element"></div>';
        }
        colorArray2[i].innerHTML = innerHtml;
    }

/*function createDiv(className){
    let div = document.createElement('div');
    div.className = className;
    div.style.width  = '20px';
    div.style.height = '20px';
    div.style.backgroundColor = 'red'
    return div;
}*/
/*
for (var i = 0; i < 10; i++) {
    document.body.appendChild(createDiv('part1'));
}
for (var i = 0; i < 10; i++) {
    document.body.appendChild(createDiv('part2'));
}
for (var i = 0; i < 10; i++) {
    document.body.appendChild(createDiv('part3'));
}
for (var i = 0; i < 10; i++) {
    document.body.appendChild(createDiv('part4'));
}
for (var i = 0; i < 10; i++) {
    document.body.appendChild(createDiv('part5'));
}
*/