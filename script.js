document.addEventListener('scroll',scrolling);

const images = document.querySelectorAll('.thumbnail img');
const overlay=document.querySelector('.overlay')


images.forEach(image => {

    image.addEventListener('click', function() {
        
        overlay.style.display='block';

        if(overlay.lastElementChild.hasAttribute("src")){
            overlay.lastElementChild.setAttribute("src", image.src);
        }

    });

    
});

const closeOverlay = document.querySelector('.overlay span');

closeOverlay.addEventListener('click', function() {

    overlay.style.display='none';

    if(overlay.lastElementChild.hasAttribute("src")){
        overlay.lastElementChild.setAttribute("src", "");
    }
});






function scrolling(){
    const wscroll=scrollY;
    const offsettop=document.getElementsByClassName('container')[0].offsetTop;
    const section =document.getElementById('section').offsetTop;
    const header=document.getElementsByClassName('header')[0];
    const items=document.getElementsByClassName('thumbnail');

    if(wscroll >= offsettop){
        header.classList.add('scroll');
    }else if(wscroll <= offsettop){
        header.classList.remove('scroll');
    }


    if(wscroll >= section){
        for(let i=0; i<items.length; i++){
            setTimeout(function(){
                items[i].classList.add('klass');
            },(300*i)+1)
        }
    }else if(wscroll <= section){
        for(let i=0; i<items.length; i++){
            setTimeout(function(){
                items[i].classList.remove('klass');
            },(300*i)+1)
        }
    }

}