var items = document.querySelectorAll(".grid-item");
var text = document.querySelector('.button-text');

function borderchange() {

    for(var i = 0; i < items.length; i++) {
        if (items[i].classList.contains('threeD')){
            items[i].classList.remove('threeD');
            items[i].classList.add('twoD');
        }
        else {
            items[i].classList.add('threeD');
            items[i].classList.remove('twoD');
        }
    }

    if (text.innerHTML == 'Change to 3D'){
        text.innerHTML = 'Change to 2D';
    }
    else 
        text.innerHTML = 'Change to 3D';
}
