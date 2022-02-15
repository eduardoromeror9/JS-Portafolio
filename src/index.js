import Template from '@templates/Template.js';
import '@styles/main.css';
import '@styles/vars.styl';

console.log('Hola'); //Prueba de Watch
console.log('chao'); //Prueba de Watch


(async function App() {
  const main = null || document.getElementById('main');
  main.innerHTML = await Template();
})();
