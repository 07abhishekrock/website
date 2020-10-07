collapse_nav_bar = document.querySelector("div.nav-container");
collapse_button = document.querySelector("div.nav-container i");
container = document.querySelector("div.page-container");
images_list = document.querySelectorAll("div.page-container>div.page1")
slider_list = document.querySelectorAll("div.slider>span");
info_panel = document.querySelectorAll("div.info");
svg = document.querySelector("div.footer-container>svg");
containerFooter = document.querySelector("div.footer-container");
section_list = document.querySelectorAll("div.info>div.section");
up = document.querySelector("div.up");


    //initialisation of the image frame
    let i=0;
    images_list[0].style.zIndex = 1;
    images_list[1].style.zIndex = 0;
    images_list[2].style.zIndex = -1;
   
        slider_list[0].style.backgroundColor="white";
        slider_list[0].style.border="black 2px solid";
    
    function animation_slider(){
       slider_list.forEach(function(element,index){
           if(index===i){
        slider_list[i].style.backgroundColor="white";
        slider_list[i].style.border="black 2px solid";
           } 
           else{
        slider_list[index].style.backgroundColor="black";
        slider_list[index].style.border="white 2px solid";
           }
        });
    }
    
    
    function animation(value){
        if(value===1){
            if(i!==2){
            images_list[i].style.transform = "translateY(-100%)";
            i++;
            }
        }
        else if(value===-1){
            if(i>0){
               images_list[i-1].style.transform = "translateY(0%)";
               if(i!==0){
                   i--;
               }
            }
        }
    }
    
    

    
        var clientY;
    container.addEventListener('touchstart',function(e)
    {
        e.preventDefault();
            clientY = e.touches[0].clientY;
    
    })
    
    container.addEventListener('touchend',function(ev){
        ev.preventDefault();
        let deltaY;
       deltaY = ev.changedTouches[0].clientY - clientY;
       
       if(deltaY<-150){
           animation(1);
           animation_slider();
           console.log("hello")
       }
       else if(deltaY>150){
           animation(-1);
           animation_slider();
           console.log("hello there")
       }
    
    })





collapse_nav_bar.addEventListener('click', function(e){

if(e.target.classList[1] === "fa-cog"){
    e.target.classList.toggle("cog-rotate");
collapse_nav_bar.classList.toggle("collapse");
}

})

info_panel[0].addEventListener('touchend',function(e){
    if(e.target.classList[0] === "hero-image"){
        e.target.parentNode.children[1].style.opacity=0;
        if(e.target.classList[1]==="left"){
        e.target.style.transform="translateX(-20%)";
        }
        else{
        e.target.style.transform="translateX(20%)";
        }
    setTimeout(()=>{
        e.target.style.transform="translateX(0%)";
        e.target.parentNode.children[1].style.opacity=1;
    },3000)
    }
})


svg.addEventListener('click', function(){
    info_panel[0].classList.add('expand');
    info_panel[0].classList.remove('no-expand');
    containerFooter.style.transform="translateY(-88%)";
    setTimeout(function(){
        section_list[0].style.transform="translateX(0%)";
    },500)  
    setTimeout(function(){
        section_list[1].style.transform="translateX(0%)";
    },1000)  
    setTimeout(function(){
        section_list[2].style.transform="translateX(0%)";
    },1500)  
})

up.addEventListener('click', function(){
    info_panel[0].classList.add('no-expand');
    info_panel[0].classList.remove('expand');
        section_list[0].style.transform="translateX(110%)";
        section_list[1].style.transform="translateX(-110%)";
        section_list[2].style.transform="translateX(110%)";
    containerFooter.style.transform="translateY(0%)";
})