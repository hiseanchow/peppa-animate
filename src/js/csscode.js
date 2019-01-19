let cssCode = `/* 
* 小猪佩奇身上纹，掌声送给社会人
* 今天用CSS画一个小猪佩奇
* 别眨眼，现在开始
*/
.peppa{
    height: 320px;
    width: 160px;
    position: relative;
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
    top: -26px;
    transform: rotate(34deg);
}
/* 然后是五官 */
/* 先画两只眼睛 */
.eye, .eye-right, .eye-left{
    z-index: 10;
    position: absolute;
    width: 28px;
    height: 28px;
    background-color: white;
    border-radius: 100% ;
    border: 5px solid #f5a8cb;
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
    top: 10px;
    left: 62px;
}
.patcher{
    background-color: #f8c6e0;
    margin-top: -10px;
    margin-left: 4px;
    width: 96px;
    height: 80px;
    transform: rotate(12deg);
}
/* 脸 */
.face{
    position: absolute;
    top: -18px;
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
    left: -10px;
    width: 44px;
    height: 54px;
    position: absolute;
    background: #f8c6e0;
    border: 5px solid #f5a8cb;
    transform: rotate(10deg);
    border-radius: 70% 50% 50% 60%;
}
/* 鼻子 */
.nostril, .nostril-right, .nostril-left{
    height: 10px;
    width: 10px;
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
    top: 30px;
    left: 20px;
}
/* 嘴巴 */
.smile{
    width: 72px;
    height: 20px;
    background-color: transparent;
    position: absolute;
    bottom: 30px;
    left: 15px;
    border-radius: 0px 0px 64px 64px;
    border-bottom: 10px solid #e94e90;
    border-top: 10px solid transparent;
    border-right: 10px solid transparent;
    border-left: 10px solid transparent;
    transform: rotate(22deg);
}
.cheek{
    position: absolute;
    width: 48px;
    height: 56px;
    border-radius: 24px;
    background-color: #f5a8cb;
    top: 46px;
    right: 20px;
}
/* 头画完了，接下来是裙子 */
.dress{
    margin-top: -40px;
    margin-left: -16px;
    width: 128px;
    height: 178px;
    background-color: #ea655d;
    border-left: 8px solid #e63b29;
    border-bottom: 8px solid #e63b29;
    border-top: 8px solid #e63b29;
    border-top-left-radius: 152px;
    border-bottom-left-radius: 12px;
    border-top-right-radius: 0px;
    position: relative;
    z-index: 1;
}
.dress:after{
    position: absolute;
    left: 40px;
    content: "";
    margin-top: -10px;
    margin-left: 10px;
    height: 180px;
    width: 130px;
    background-color: #ea655d;
    border-right: 8px solid #e63b29;
    border-bottom: 8px solid #e63b29;
    border-top: 8px solid #e63b29;
    border-top-right-radius: 312px;
    border-bottom-right-radius: 12px;
    border-top-left-radius: 0px;
}
/* 两个肘子，呸，是两只手 */
.hand, .hand-right, .hand-left{
    background-color: #f8c6e0;
}
.hand-right{
    position: absolute;
    z-index: 0;
    width: 100px;
    height: 10px;
    margin-top: 40px;
    margin-left: -60px;
    transform: rotate(-30deg);
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
}
.hand-right:before{
    content: "";
    position: absolute;
    top: -8px;
    left: 4px;
    width: 20px;
    height: 8px;
    background-color: #f8c6e0;
    transform: rotate(45deg);
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
}
.hand-right:after{
    content: "";
    position: absolute;
    top: 10px;
    left: 6px;
    width: 20px;
    height: 8px;
    background-color: #f8c6e0;
    transform: rotate(-45deg);
    border-top-left-radius: 6px;
    border-bottom-left-radius: 6px;
}
.hand-left{
    position: absolute;
    z-index: 0;
    width: 72px;
    height: 9px;
    margin-top: 56px;
    margin-left: 160px;
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
    top: 10px;
    left: 50px;
    width: 20px;
    height: 8px;
    background-color: #f8c6e0;
    transform: rotate(54deg);
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
}
/* 最后是两条腿 */
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
/* 
* OK，完成了。
* author: ZhouShuo
* email: zhoushuozh@gmail.com
* time: 2018/5/17
* git: https://zhoushuo.me/peppa-animate/
*/
`
module.exports = cssCode;