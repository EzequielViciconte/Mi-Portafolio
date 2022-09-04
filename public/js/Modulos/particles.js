let particles;
/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
import 'particles.js/particles';
const particlesJS = window.particlesJS;

particlesJS.load('particles-js', '/assets/particles.json', function() {
    console.log("particles.json loaded...");
  });

export default particles;