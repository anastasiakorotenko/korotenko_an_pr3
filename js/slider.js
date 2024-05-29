const img = document.querySelector('.bowl__slider-img');
// Создадим массив всех изображений
const imgArr = ['images/bowl.svg', 'images/bowl2.svg', 'images/bowl3.svg'];
// Создаем текущий индекс
let currentIndex = 0;

function nextIndex(direction){
    currentIndex +=direction;
    // дополнительно делаем проверку чтобы индекс не вышел за пределы
    if(currentIndex >= imgArr.length){
        // Получаем первый элемент путем обнуления
        currentIndex = 0;
    } else if (currentIndex<0) {
        // Получаем последний элемент
        currentIndex = imgArr.length - 1;
    }
    slide(currentIndex);    
}

function slide(index){
    img.style.display = 'none';
    setTimeout(()=>{
        img.style.display = 'block';
    }, 0);
    //меняем атрибут src
    img.src = imgArr[index];
    
}

//Саму функцию нужно повесить на кнопки при событии клика
const btnLeft = document.querySelector('.bowl__slider-nav-left');
const btnRight = document.querySelector('.bowl__slider-nav-right');

 btnLeft.addEventListener('click', ()=>{
    nextIndex(-1)
});
btnRight.addEventListener('click', ()=>{
    nextIndex(1)
});

