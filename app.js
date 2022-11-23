let opciones = document.querySelectorAll('.main__item');
opciones.forEach((item, index) => {
    item.addEventListener('mouseenter', () => {
        function cambio (num) {
            item.children[0].textContent = num
            item.classList.add('main__active')
            return num
        }
        switch (index) {
            case 0:
                cambio('$17.45')
                break;
            case 1:
                cambio('$39.41')
                break;
            case 2:
                cambio('$52.36')
                break;
            case 3:
                cambio('$31.07')
                break;
            case 4:
                cambio('$23.39')
                break;
            case 5:
                cambio('$43.28')
                break
            default:
                cambio('$25.48')
                break;
        }
    })
    item.addEventListener('mouseout', () => {
        item.children[0].textContent = ''
    })
})