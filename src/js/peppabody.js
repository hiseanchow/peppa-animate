const peppaBodyHtml = `<div class="ear-right"></div>
<div class="ear-left"></div>
    
<div class="head">
  <div class="eye-left">
      <div class="eye-ball"></div>
  </div>
  <div class="eye-right">
      <div class="eye-ball"></div>
  </div>
  <div class="smile"></div>
  <div class="patcher"></div>
  <div class="cheek"></div>
</div>
<div class="face">
  <div class="nostril-right"></div>
  <div class="nostril-left"></div>
</div>
<div class="hand-right"></div>
<div class="hand-left"></div>
<div class="dress"></div>
<div class="leg-right"></div>
<div class="leg-left"></div>
<div class="shoe-right"></div>
<div class="shoe-left"></div>`

let peppaBody = document.createElement('div')
peppaBody.className = "peppa"
peppaBody.innerHTML = peppaBodyHtml

module.exports = peppaBody;