let funcVar;

/**Menu Mobile  */
const btnMenu = document.querySelector('.MenuMov');

btnMenu.addEventListener('click',mostrarMenu);


/**Funciones */

function mostrarMenu(){
    const listaNav = document.querySelector('.Lista-Navegacion');
    listaNav.classList.toggle('Invisible');
}


/**Funcion Al scrolear*/
window.onscroll = function(){
    AddOrRemove()
};


const seccionBien = document.querySelector('.SeccionBienvenida');
const NavPosition = seccionBien.offsetHeight-100;


function AddOrRemove(){
    const Barra = document.querySelector('header');
    if(window.pageYOffset >= NavPosition){
        Barra.classList.add('Negro');
        }
    else{
        Barra.classList.remove('Negro');
    }
}
export default funcVar;