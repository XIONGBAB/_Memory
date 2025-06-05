const MAX_WIDTH = 1920;
const MOBILE_WIDTH = 375;

function setRem() {
  const clientWidth = Math.min(document.documentElement.clientWidth, MAX_WIDTH);
  document.documentElement.style.fontSize = `${(clientWidth / MOBILE_WIDTH) * 37.5}px`;
}

window.addEventListener('resize', setRem);
setRem();
