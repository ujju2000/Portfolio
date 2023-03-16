let sectionContainer = document.querySelectorAll('.section');
let sectBtns = document.querySelectorAll('.controls');
let sectBtn = document.querySelectorAll('.control');
let allSections = document.querySelector('.main-content');


(function PageTransition(){
    // button click active class 
    for(let i =0;i< sectBtn.length;i++){
        sectBtn[i].addEventListener('click',(e) =>{
            
            let currentBtn = document.querySelectorAll('.active-btn');
            currentBtn[0].classList.remove('active-btn');

            sectBtn[i].classList.add('active-btn');

         
        
        })
    }

        //   sections active 
        allSections.addEventListener('click',(e) =>{
            const id = e.target.dataset.id;
            console.log(id);
            if(id){
                sectionContainer.forEach((section) =>{
                    section.classList.remove('active');
                })
                    
            }
            if(id){
                const elem = document.getElementById(id);
                elem.classList.add('active');
            }
        })


        // toggle theme 
        const themeBtn = document.querySelector('.theme-btn');
        themeBtn.addEventListener('click' ,(e) => {
            let element = document.body;
            element.classList.toggle('light-mode'); 
        })
})();