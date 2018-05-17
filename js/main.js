let editor = document.querySelector('#editor pre');
let editorWrap = document.querySelector('#editor');
let styleTag = document.createElement('style');
document.head.appendChild(styleTag);

let CssCode = `/* 
* 小猪佩奇身上纹，掌声送给社会人
* 今天就用CSS画一个小猪佩奇
* 别眨眼，现在开始画。
*/
.peppa{
    position: absolute;
    top: 50%;
    left: 50%;
    height: 320px;
    width: 160px;
    transform: translate(-50%, -50%);
}
/* 先画一个头 */
.head{
    position: relative;
    width: 180px;
    height: 176px;
    background-color: #f8c6e0;
    border: 6px solid #f5a8cb;
    border-right: 6px solid #f5a8cb;
    border-top: 6px solid #f5a8cb;
    border-radius: 160px;
    z-index: 2;
}
/* 两只耳朵 */
.ear, .ear-right, .ear-left{
    z-index: -2;
    position: absolute;
    width: 27px;
    height: 40px;
    border: 6px solid #f5a8cb;
    background-color: #f8c6e0;
    border-top-left-radius: 24px;
    border-top-right-radius: 24px;
}
.ear-right{
    top: -46px;
    right: 32px;
    transform: rotate(16deg);
}
.ear-left{
    right: -20px;
    top: -25.6px;
    transform: rotate(34deg);
}
/* 然后是五官 */
/* 先画两只眼睛 */
.eye, .eye-right, .eye-left{
    z-index: 10;
    position: absolute;
    width: 27px;
    height: 27px;
    background-color: white;
    border-radius: 100% ;
    border: 6px solid #f5a8cb;
}
.eye-ball{
    position: absolute;
    top: 38%;
    left: 30%;
    width: 12px;
    height: 12px;
    background-color: black;
    border-radius: 100%;
    transform: translate(-50%, -50%);
}
.eye-right{
    top: -8px;
    left: 24px;
}
.eye-left{
    top: 9.6px;
    left: 62.4px;
}
.patcher{
    background-color: #f8c6e0;
    margin-top: -9.6px;
    margin-left: 4px;
    width: 96px;
    height: 80px;
    transform: rotate(12deg);
}
/* 脸 */
.face{
    position: absolute;
    top: -17.6px;
    height: 88px;
    width: 160px;
    background-color: #f8c6e0;
    border: 6px solid #f5a8cb;
    border-radius: 50% 0% 0% 50% / 30% 0% 0% 60%;
    transform: rotate(14deg);
    right: 48px;
}
.face:before{
    content: "";
    top: 2px;
    left: -9.6px;
    width: 43.2px;
    height: 54.4px;
    position: absolute;
    background: #f8c6e0;
    border: 6px solid #f5a8cb;
    transform: rotate(10deg);
    border-radius: 70% 50% 50% 60%;
}
/* 鼻子 */
.nostril, .nostril-right, .nostril-left{
    height: 9px;
    width: 9px;
    border-radius: 8px;
    background-color: #bc709b;
}
.nostril-right{
    position: absolute;
    top: 30px;
    left: 4px;
}
.nostril-left{
    position: absolute;
    top: 28.8px;
    left: 19.2px;
}
/* 嘴巴 */
.smile{
    width: 72px;
    height: 20.8px;
    background-color: transparent;
    position: absolute;
    bottom: 30px;
    left: 16px;
    border-radius: 0px 0px 64px 64px;
    border-bottom: 9px solid #e94e90;
    border-top: 9px solid transparent;
    border-right: 9px solid transparent;
    border-left: 6px solid transparent;
    transform: rotate(22deg);
}
.cheek{
    width: 48px;
    height: 56px;
    border-radius: 24px;
    background-color: #f5a8cb;
    position: absolute;
    top: 46.4px;
    right: 19.2px;
}
/* 头画完了，接下来是身子 */
.dress{
    margin-top: -40px;
    margin-left: -16px;
    width: 128px;
    height: 176px;
    background-color: #ea655d;
    border-left: 9px solid #e63b29;
    border-bottom: 9px solid #e63b29;
    border-top: 9px solid #e63b29;
    border-top-left-radius: 152px;
    border-bottom-left-radius: 12px;
    border-top-right-radius: 0px;
}
.dress:after{
    content: "";
    margin-top: -9px;
    margin-left: 10px;
    height: 176px;
    position: absolute;
    width: 128px;
    background-color: #ea655d;
    left: 40px;
    border-right: 9px solid #e63b29;
    border-bottom: 9px solid #e63b29;
    border-top: 9px solid #e63b29;
    border-top-right-radius: 312px;
    border-bottom-right-radius: 12.8px;
    border-top-left-radius: 0px;
}
/* 两个肘子，呸，是两只手 */
.hand, .hand-right, .hand-left{
    background-color: #f8c6e0;
}
.hand-right{
    width: 96px;
    height: 10px;
    margin-top: 40px;
    margin-left: -60px;
    position: absolute;
    z-index: -1;
    transform: rotate(-30deg);
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
}
.hand-right:before{
    content: "";
    width: 20px;
    height: 8px;
    background-color: #f8c6e0;
    position: absolute;
    transform: rotate(45deg);
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
    top: -8px;
    left: 4px;
}
.hand-right:after{
    content: "";
    width: 20px;
    height: 8px;
    background-color: #f8c6e0;
    position: absolute;
    transform: rotate(-45deg);
    border-top-left-radius: 6px;
    border-bottom-left-radius: 6px;
    top: 11.2px;
    left: 6px;
}
.hand-left{
    width: 72px;
    height: 9px;
    margin-top: 56px;
    margin-left: 160px;
    position: absolute;
    transform: rotate(30deg);
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
}
.hand-left:before{
    content: "";
    position: absolute;
    width: 20px;
    height: 8px;
    background-color: #f8c6e0;
    transform: rotate(-50deg);
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
    top: -9px;
    left: 50px;
}
.hand-left:after{
    content: "";
    position: absolute;
    width: 20px;
    height: 8px;
    background-color: #f8c6e0;
    transform: rotate(54deg);
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
    top: 10px;
    left: 50px;
}
/* 最后是两只腿 */
.leg, .leg-right, .leg-left{
    height: 45px;
    width: 12px;
    background-color: #f8c6e0;
}
.leg-right{
    margin-left: 50px;
}
.leg-left{
    margin-top: -50px;
    margin-left: 120px;
}
.shoe, .shoe-right, .shoe-left{
    width: 45px;
    height: 16px;
    background-color: black;
    border-radius: 30px 20px 20px 30px;
}
.shoe-right{
    margin-left: 20px;
}
.shoe-left{
    margin-left: 90px;
    margin-top: -16px;
}
/* OK，完成了。*/
`

function writeCss(code, fn){
    let n = 0;
    let timer = setInterval(function (){
        n+=3;
        editor.innerHTML = Prism.highlight(code.substring(0, n), Prism.languages.css)
        styleTag.innerHTML = code.substring(0, n)
        editorWrap.scrollTop = 50000;
        if (n >= code.length){
            clearInterval(timer);
        }
    }, 50);
}

writeCss(CssCode)