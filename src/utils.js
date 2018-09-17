export function scriptTagLoader(url, globalVarName) {
  return new Promise((resolve, reject) => {
    const scriptEl = document.createElement('script');
    scriptEl.src = url;
    scriptEl.async = true;

    scriptEl.onload = () => resolve(window[globalVarName]);
    scriptEl.onerror = err => reject(err);

    document.head.appendChild(scriptEl);
  });
}