import * as singleSpa from 'single-spa';

const loadingFunction = () => import('./app-2.js');
const activityFunction = location => location.pathname.startsWith('/');

const createNavigation = () => {
  const navApp1 = document.querySelector('#nav-app-1');
  const navApp2 = document.querySelector('#nav-app-2');
  const navApp3 = document.querySelector('#nav-app-3');

  navApp1.addEventListener('click', () => history.pushState({}, 'app-1', '/'));
  navApp2.addEventListener('click', () =>
    history.pushState({}, 'app-2', '/app-2')
  );
  navApp3.addEventListener('click', () =>
    history.pushState({}, 'app-2', '/app-3')
  );
};

singleSpa.registerApplication(
  'app-1',
  () => import('./app-2.js'),
  location => location.pathname === '/'
);

singleSpa.registerApplication(
  'app-2',
  () => import('./app-1.js'),
  location => location.pathname.startsWith('/app-2')
);

singleSpa.registerApplication(
  'app-3',
  () => import('./app-3.js'),
  location => location.pathname.startsWith('/app-3')
);

window.UbExpUI = class {
  init() {
    const container = document.getElementById('ub-exp-ui');
    if (container) {
      container.innerHTML = `
      <div>
        <h1 class="headline-1">Testing</h1>
        <div id="nav">
          <button id="nav-app-1">App 1</button>
          <button id="nav-app-2">App 2</button>
          <button id="nav-app-3">App 3</button>
        </div>
        <div id="container"></div>
      </div>
      `;
    }

    singleSpa.start();
    createNavigation();
  }
};
