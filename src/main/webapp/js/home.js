function clickProjectContentImage(classIcon){
    const listClassIconArrow = ['icon_arrow_1', 'icon_arrow_2', 'icon_arrow_3'];
    listClassIconArrow.map((item) =>{
        const iconRowRight = document.querySelector(`.${item}`);
        if(item === classIcon){
            iconRowRight.classList.add('show_icon');
        } else {
            iconRowRight.classList.remove('show_icon');
        }
    })
    
}