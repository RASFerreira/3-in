

function nightMode() {

    var data = new Date();
    var hora = data.getHours();
    const navbar = document.querySelector('.navbar');
    const navigation = document.querySelector('.navigation');
    const line1 = document.querySelector('.line1');
    const line2 = document.querySelector('.line2');
    const line3 = document.querySelector('.line3');
    const img_web = document.querySelector('.web__img');

    if( hora >= 22 || hora <= 7){

        navbar.classList.toggle('navbar__night--mode')
        navigation.classList.toggle('navigation__night--mode')
        document.body.style.background = ('#2C2930') 
        navigation.style.background = ('#DE5012')
        line1.style.background = ('#ffffff')
        line2.style.background = ('#ffffff')
        line3.style.background = ('#ffffff')
        //img_web.src = './img/desenwebnight.png';
        

    }

    

}

nightMode();





function scrollNavbar() {
    const navbar = document.querySelector('.navbar');

    window.addEventListener('scroll', () => {

        if(scrollY > 50){

            navbar.classList.add('navbar__scroll')

        }else if(scrollY < 100 ){
            navbar.classList.remove('navbar__scroll')

        }

    })

}

scrollNavbar();


function data(){
    var data = new Date();
    var ano = data.getFullYear();
    const data_html = document.getElementById('data')

    data_html.innerHTML = `${ano}`;
}

data();


function navSlide() {
    const navigation = document.querySelector('.navigation');
    const btn_menu = document.querySelector('.mobile__menu');

    btn_menu.addEventListener('click', () => {

        
        navigation.classList.toggle('navigation__active')
        

    })

}

navSlide();


function formValidation() {
    
    var nome = document.getElementById('name').value;
    const erro_nome = document.getElementById('erro__nome');
    

    

        erro_nome.innerHTML = ''

    if(nome.length < 3){
        erro_nome.innerHTML = `Insira um nome real`

    }


    

}


const btn_form = document.querySelector('.form__btn')
btn_form.addEventListener('click', formValidation)




