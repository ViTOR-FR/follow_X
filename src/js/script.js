
const bx = document.querySelector('.bx');
const menu_mobile = document.querySelector('.menu-mobile');
const link_mobile = document.querySelectorAll('.link-menu-mobile');
const input_cpf = document.querySelectorAll('.input-cpf');


bx.addEventListener('click', () => {
    bx.classList.toggle('active');
    menu_mobile.classList.toggle('showmenu');
})

link_mobile.forEach((item) => {
    item.addEventListener('click', () => {
        menu_mobile.classList.remove('showmenu');
        bx.classList.toggle('active');
    })
});

function mascara(i){
   
    var v = i.value;
    
    if(isNaN(v[v.length-1])) { // impede entrar outro caractere que não seja número
       i.value = v.substring(0, v.length-1);
       return;
    }
    
    i.setAttribute("maxlength", "14");
    if (v.length == 3 || v.length == 7) i.value += ".";
    if (v.length == 11) i.value += "-";
 
 }