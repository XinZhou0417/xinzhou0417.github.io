import{n as e,t}from"./conversation.z6I2Xd5V.js";var n=`.johnny{z-index:41;background:var(--paper);border:1px solid var(--rule);width:24rem;max-height:min(34rem,100vh - 3rem);box-shadow:0 1px 0 var(--rule);flex-direction:column;font-size:.82rem;display:flex;position:fixed;bottom:1.25rem;right:1.25rem}.johnny.is-closed{display:none}@media (width<=30rem){.johnny{border-bottom:0;border-left:0;border-right:0;width:auto;max-height:80vh;bottom:0;left:0;right:0}}`;function r(){if(document.getElementById(`johnny-css`))return;let e=document.createElement(`style`);e.id=`johnny-css`,e.textContent=n,document.head.append(e)}function i(n,i){r();let a=document.getElementById(`johnny-root`),o=document.getElementById(`johnny-open`);if(!a)return;a.innerHTML=`
    <section id="johnny-panel" class="johnny" role="dialog" aria-label="Ask Johnny">
      <header class="johnny-head">
        <span class="johnny-dots" aria-hidden="true"><i></i><i></i></span>
        <span class="johnny-title">johnny</span>
        <span class="johnny-sub">the basics about Xin</span>
        <button class="johnny-close" type="button" aria-label="Close">esc</button>
      </header>
      <div class="johnny-log" id="johnny-log" aria-live="polite">
        <p class="johnny-hint">Ask about Xin — where he is based, where he has
          worked, what he has built. Anything about how it was built is his to
          answer, and I will say so.</p>
      </div>
      <form class="johnny-form" id="johnny-form">
        <label class="sr-only" for="johnny-input">Ask Johnny a question</label>
        <span class="johnny-prompt" aria-hidden="true">$</span>
        <input id="johnny-input" autocomplete="off" placeholder="where is Xin based?" />
      </form>
      <div class="johnny-challenge" id="johnny-challenge"></div>
    </section>`;let s=a.querySelector(`.johnny`),c=a.querySelector(`#johnny-input`),l=()=>{s.classList.add(`is-closed`),o?.setAttribute(`aria-expanded`,`false`)},u=()=>{s.classList.remove(`is-closed`),o?.setAttribute(`aria-expanded`,`true`),c.focus()};u(),a.querySelector(`.johnny-close`)?.addEventListener(`click`,l),window.addEventListener(`johnny:toggle`,()=>s.classList.contains(`is-closed`)?u():l()),document.addEventListener(`keydown`,e=>{e.key===`Escape`&&!s.classList.contains(`is-closed`)&&l()}),e({api:n,siteKey:i,log:a.querySelector(`#johnny-log`),form:a.querySelector(`#johnny-form`),input:c,challenge:a.querySelector(`#johnny-challenge`),store:t})}export{i as open};