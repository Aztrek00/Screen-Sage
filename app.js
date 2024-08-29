const arrow = document.querySelectorAll('.arrow');
const movieList = document.querySelectorAll('.movie-list');

arrow.forEach((arrow, i) => {
    const itemNumber = movieList[i].querySelectorAll('img').length;
    let clickcounter = 0
    arrow.addEventListener('click', () => {
        const ratio = Math.floor(window.innerWidth/270);
        clickcounter++;
        if(itemNumber - (4 + clickcounter) + (4 - ratio) >= 0){
             movieList[i].style.transform = `translateX(${
                movieList[i].computedStyleMap().get("transform")[0].x.value-300}px)`;
             } else{
                movieList[i].style.transform = 'translateX(0)';
                clickcounter = 0
             }
    });

    console.log(Math.floor(window.innerWidth/270));
})


//TOGGLE

const ball = document.querySelector('.toggle-ball');
const items = document.querySelectorAll('.container,.movie-list-title,.navbar-container,.side-bar,.left-menu-icon,.toggle');
ball.addEventListener('click', () => {
    items.forEach(item => {
        item.classList.toggle('active');
    })
    ball.classList.toggle('active');
})

