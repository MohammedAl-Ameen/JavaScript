btns = document.querySelectorAll(".control");

function changeClass(choice){
    if(choice == 0){
        let currentBtn = document.querySelectorAll('.control-green');
        currentBtn[0].classList = currentBtn[0].className.replace('control-green', '');
        btns[0].className += ' control-green';

    }else if(choice == 1){
        let currentBtn = document.querySelectorAll('.control-green');
        currentBtn[0].classList = currentBtn[0].className.replace('control-green', '');
        btns[1].className += ' control-green';

    }else if(choice == 2){

        let currentBtn = document.querySelectorAll('.control-green');
        currentBtn[0].classList = currentBtn[0].className.replace('control-green', '');
        btns[2].className += ' control-green';
    }else if(choice == 3){

        let currentBtn = document.querySelectorAll('.control-green');
        currentBtn[0].classList = currentBtn[0].className.replace('control-green', '');
        btns[3].className += ' control-green';
    }
}

