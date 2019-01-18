import cssCode from './csscode.js';
import peppabody from './peppabody.js';
import { editor, editorWrap } from './editor.js';
import { btnWrap, showHideCodeBtn, swichAnimateBtn } from './buttons.js';
import Prism from 'prismjs'

let styleTag = document.createElement('style');
let paper = document.createElement('div');
paper.id = "paper"
paper.appendChild(peppabody)
paper.appendChild(btnWrap)
document.head.appendChild(styleTag);
document.body.appendChild(editorWrap);
document.body.appendChild(paper)

let codeHide = true;
let complete = false;
let stop = true;
let timer;
let n = 0;

function writeCss(code) {
    timer = setInterval(function () {
        n += 5;
        if (!codeHide) {
            editor.innerHTML = Prism.highlight(code.substring(0, n), Prism.languages.css);
        }
        styleTag.innerHTML = code.substring(0, n);
        editorWrap.scrollTop = 50000;
        if (n >= code.length) {
            clearInterval(timer);
            paper.classList.remove('collapse');
            editorWrap.classList.remove('show');
            showHideCodeBtn.innerText = '显示代码';
            swichAnimateBtn.innerText = '重新开始'
            codeHide = complete = stop = true
        } else if (stop) {
            clearInterval(timer)
        }
    }, 30);
    return { timer, n }
}

// writeCss(cssCode);

swichAnimateBtn.addEventListener('click', (e) => {
    if (stop) {
        if (complete) {
            editor.innerHTML = "";
            styleTag.innerHTML = "";
        }
        codeHide = false
        showHideCodeBtn.classList.add('show')
        btnWrap.classList.remove('init')
        editorWrap.classList.add('show');
        paper.classList.add('collapse');
        e.target.innerText = '停止动画';
        writeCss(cssCode, n);
    } else {
        e.target.innerText = '开启动画';
    }
    stop = !stop;
});

showHideCodeBtn.addEventListener('click', (e) => {
    if (codeHide) {
        paper.classList.add('collapse');
        editorWrap.classList.add('show');
        e.target.innerText = '隐藏代码';
    } else {
        paper.classList.remove('collapse');
        editorWrap.classList.remove('show');
        e.target.innerText = '显示代码';
    }
    codeHide = !codeHide;
});