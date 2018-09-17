import { scriptTagLoader } from './utils';

export function bootstrap(props) {
  const src = 'http://localhost:8081/main.js';

  return scriptTagLoader(src, 'Listings')
    .then((Listings) => {
      console.log(Listings);
    });
}

let unsubscribe;
export function mount(props) {
  return Promise
    .resolve()
    .then(() => {
        // This is where you would normally use a framework to mount 
        // some ui to the dom. See https://single-spa.js.org/docs/ecosystem.html.
        const container = document.getElementById('container');
        const domEl = document.createElement('div');
        container.appendChild(domEl);
        unsubscribe = Listings(domEl);
      });
}

export function unmount(props) {
  return Promise
    .resolve()
    .then(() => {
        // This is normally where you would tell the framework to unmount 
        // the ui from the dom. See https://single-spa.js.org/docs/ecosystem.html
        unsubscribe();
        const domEl = document.getElementById('container');
        domEl.textContent = '';
    })
}