import cssCode from './csscode.js';
import peppabody from '../views/peppabody.js';
import { editor, editorWrap } from '../views/editor.js';
import { btnWrap, showHideCodeBtn, swichAnimateBtn } from '../views/buttons.js';
import Prism from 'prismjs'

let styleTag = document.createElement('style');
let paper = document.createElement('div');
paper.id = "paper"
paper.appendChild(peppabody)
paper.appendChild(btnWrap)
document.head.appendChild(styleTag);
document.body.appendChild(editorWrap);
document.body.appendChild(paper)

let codeHide = true,
    complete = false,
    stop = true,
    init = true,
    timer,
    n = 0;

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
            if (!complete) {
                paper.classList.remove('collapse');
                editorWrap.classList.remove('show');
                showHideCodeBtn.innerText = '显示代码';
                swichAnimateBtn.innerText = '重新开始';
                codeHide = true;
            }
            complete = stop = true;
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
            init = true
            complete = false
            n = 0
        }
        if (init) {
            init = false;
            btnWrap.classList.remove('init');
            editorWrap.classList.add('show');
            paper.classList.add('collapse');
            codeHide = false
            showHideCodeBtn.classList.add('show')
            setTimeout(()=> {
                writeCss(cssCode, n)
            }, 500)
        } else {
            writeCss(cssCode, n);
        }
        e.target.innerText = '停止动画';
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
        if (complete) {
            editor.innerHTML = Prism.highlight(cssCode, Prism.languages.css);
            editorWrap.scrollTop = 50000;
        }
    } else {
        paper.classList.remove('collapse');
        editorWrap.classList.remove('show');
        e.target.innerText = '显示代码';
    }
    codeHide = !codeHide;
});