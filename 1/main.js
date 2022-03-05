window.addEventListener('load', function(e){
    console.log('body loaded');

    let boxs = Array.from(document.getElementsByClassName('box'));
    console.log(boxs);
    boxs.forEach((element) =>{
        bgColor = window.getComputedStyle(element, null).getPropertyValue('background-color');
        element.innerHTML = element.textContent + `<br>${bgColor}`;

    });


});


