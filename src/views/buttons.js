let btnWrap = document.createElement("div");
btnWrap.classList.add('btn-group', 'init')
let showHideCodeBtn = document.createElement("div")
let swichAnimateBtn = document.createElement("div")
showHideCodeBtn.classList.add('btn', 'show-hide-code-btn')
swichAnimateBtn.classList.add('btn', 'swich-animate-btn')
showHideCodeBtn.innerText = '隐藏代码'
swichAnimateBtn.innerText = '点此开始'
btnWrap.appendChild(swichAnimateBtn);
btnWrap.appendChild(showHideCodeBtn);

module.exports = { btnWrap, showHideCodeBtn, swichAnimateBtn };