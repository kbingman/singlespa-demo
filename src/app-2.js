const domEl = document.getElementById('container');

export function bootstrap(props) {
  return Promise
    .resolve()
    .then(() => {
      domEl.textContent = 'Loading';
    });
}

export function mount(props) {
  return Promise
    .resolve()
    .then(() => {
        // This is where you would normally use a framework to mount 
        // some ui to the dom. See https://single-spa.js.org/docs/ecosystem.html.
        domEl.textContent = 'App 1 is mounted!'
    });
}

export function unmount(props) {
  return Promise
    .resolve()
    .then(() => {
        // This is normally where you would tell the framework to unmount 
        // the ui from the dom. See https://single-spa.js.org/docs/ecosystem.html
        // domEl.textContent = '';
        console.log('unmount App-2');
    })
}
