// Can also be included with a regular script tag
import Typed from 'typed.js';

var options = {
  stringsElement:'#cadenas-texto',
  typeSpeed: 75,
  startDelay:300,
  backSpeed:75,
  smartBackSpace:true,
  loop:true,
  showCursor:true,
  cursorChar:'|',
  contentType:'html'
};

var optionsDes = {
  strings: [
    '<i></i>',
    '<i>Soy un Desarrolador web Back End y Front End</i>'
  ],
  typeSpeed: 15,
  startDelay:300,
  backSpeed:75,
  smartBackSpace:true,
  loop:false,
  showCursor:true,
  cursorChar:'|',
  contentType:'html'
};

var typed = new Typed('.typed', options);
var typed = new Typed('.DescripcionMia', optionsDes);


export default typed