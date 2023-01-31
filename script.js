/*FUNÇÃO MUDANÇA DE TELA CADASTRO E LOGIN*/
const signupbtnlink = document.querySelector('.signupbtn-link');

const signinbtnlink = document.querySelector('.signinbtn-link');

const wrapper = document.querySelector('.wrapper');

signupbtnlink.addEventListener('click',()=> {
    wrapper.classList.toggle('active');
});

signinbtnlink.addEventListener('click',()=> {
    wrapper.classList.toggle('active');
});


/*FUNÇÃO OLHAR SENHA*/
function myFunctioneye(){
    var x = document.getElementById("myInput");
    var y = document.getElementById("eye1");
    var z = document.getElementById("eye2");

    if (x.type === 'password'){
        x.type = "text";
        y.style.display = "block";
        z.style.display = "none";
    }
    else {
        x.type = "password";
        y.style.display = "none";
        z.style.display = "block";
    }

}

function myFunctioneye01(){
    var x = document.getElementById("myInput1");
    var y = document.getElementById("eye001");
    var z = document.getElementById("eye002");

    if (x.type === 'password'){
        x.type = "text";
        y.style.display = "block";
        z.style.display = "none";
    }
    else {
        x.type = "password";
        y.style.display = "none";
        z.style.display = "block";
    }
}

const swiper = new Swiper('.swiper', {
    autoplay: {
        delay: 2000,
        disableOnInteraction: false
    },
loop: true,

pagination: {
el: '.swiper-pagination',
clickable: true
},

navigation: {
nextEl: '.swiper-button-next',
prevEl: '.swiper-button-prev',
},

});