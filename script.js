const wrapper =document.querySelector('.wrapper');
const Loginlink = document.querySelector('.login-link');
const Registerlink = document.querySelector('.register-link');

const popupbro = document.querySelector('.btn-pop');

Registerlink.addEventListener('click',()=>{
    wrapper.classList.add('active');
});

Loginlink.addEventListener('click',()=>{
    wrapper.classList.remove('active');
});

popupbro.addEventListener('click',()=>{
  
    wrapper.classList.add('active-popup');

});