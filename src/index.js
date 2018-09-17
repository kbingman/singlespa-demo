import * as singleSpa from 'single-spa';

const loadingFunction = () => import('./app-2.js');
const activityFunction = location => location.pathname.startsWith('/');

const createNavigation = () => {
  const navApp1 = document.querySelector('#nav-app-1');
  const navApp2 = document.querySelector('#nav-app-2');
  const navApp3 = document.querySelector('#nav-app-3');

  navApp1.addEventListener('click', () => history.pushState({}, 'app-1', '/'));
  navApp2.addEventListener('click', () => history.pushState({}, 'app-2', '/app-2'));
  navApp3.addEventListener('click', () => history.pushState({}, 'app-2', '/app-3'));
}

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

singleSpa.start();
createNavigation();
