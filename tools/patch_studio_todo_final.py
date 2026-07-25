#!/usr/bin/env python3
from pathlib import Path
p=Path('studio/studio-todo.html')
s=p.read_text(encoding='utf-8')
orig=s

def one(a,b):
    global s
    n=s.count(a)
    if n!=1: raise SystemExit(f'expected 1 match, got {n}: {a[:80]}')
    s=s.replace(a,b,1)

css='''

/* 全站通用模板71：统一钥匙登录与错误弹窗 */
body.room10ModalOpen{overflow:hidden!important}.room10LoginMask,.room10ErrorMask{position:fixed;inset:0;display:none;align-items:center;justify-content:center;padding:14px;background:rgba(0,0,0,.5);z-index:2200}.room10LoginMask.show,.room10ErrorMask.show{display:flex}.room10-login-panel{position:relative;width:min(720px,94vw,calc(100dvh - 28px));container-type:inline-size}.room10-login-panel img{width:100%;display:block;pointer-events:none;user-select:none;-webkit-user-drag:none}#room10LoginNickname,#room10LoginCode{position:absolute;left:36.2%;height:8.1%;border:0;outline:0;padding:0 10px;font-size:18px;color:#5b3e28;background:transparent;line-height:1.1;font-family:inherit}#room10LoginNickname{top:40%;width:27.5%}#room10LoginCode{top:56%;width:20%}#room10LoginToggle{position:absolute;top:56%;left:56%;width:8%;height:8.1%;border:0;cursor:pointer;background:rgba(255,215,120,.15);border-radius:6px;color:transparent;font-size:0}#room10LoginToggle:hover{background:rgba(255,215,120,.35);box-shadow:0 0 8px rgba(255,220,120,.6)}#room10LoginSubmit{position:absolute;top:68%;left:40%;width:20%;height:9%;border:0;background:transparent;cursor:pointer;color:transparent;font-size:0}#room10LoginSubmit:disabled{opacity:.55}.room10LoginRegisterLink{position:absolute;top:51%;left:42.5%;margin:0;padding:0;border:0;background:none;color:#6b472d;font:900 clamp(10px,3.15cqw,13px)/1 inherit;white-space:nowrap;cursor:pointer;text-shadow:0 1px 0 rgba(255,255,255,.38)}#room10LoginMessage{position:absolute;top:32%;left:53.5%;transform:translateX(-50%);width:44%;max-width:320px;color:#7a4f2b;text-align:center;font-size:13px;font-weight:600;line-height:1.2}.room10LoginClose{position:absolute;top:4px;right:6px;width:32px;height:32px;border:0;border-radius:50%;background:#fff;color:#5b4632;cursor:pointer;font-size:18px}.room10ErrorMask{background:rgba(60,42,23,.22);backdrop-filter:blur(4px)}.room10ErrorDialog{width:min(430px,92vw);max-height:calc(100dvh - 40px);overflow:auto;padding:24px 22px 20px;border:1px solid rgba(203,167,123,.3);border-radius:22px;background:rgba(255,249,241,.98);color:#6a4525;text-align:center;box-shadow:0 18px 45px rgba(85,58,34,.2)}.room10ErrorTitle{margin:0 0 10px;color:#6f4726;font-size:20px;font-weight:900}.room10ErrorMessage{margin:0;font-size:14px;font-weight:700;line-height:1.75;white-space:pre-line}.room10ErrorDetail{margin-top:12px;padding:10px 12px;border:1px solid rgba(194,151,108,.18);border-radius:12px;background:rgba(246,239,230,.72);color:#7a5231;font-size:12px;line-height:1.55;text-align:left;white-space:pre-wrap;word-break:break-word}.room10ErrorDetail:empty{display:none}.room10ErrorMeta{margin-top:10px;color:#9a7656;font-size:10px;line-height:1.45;white-space:pre-line}.room10ErrorConfirm{display:inline-flex;align-items:center;justify-content:center;min-width:108px;height:40px;margin:16px auto 0;padding:0 18px;border:0;border-radius:12px;background:linear-gradient(180deg,#efd5ab,#dfbd8a);color:#6a4120;font:900 13px/1 inherit;cursor:pointer}@media(max-width:520px){#room10LoginNickname,#room10LoginCode{font-size:15px;padding:0 7px}#room10LoginMessage{font-size:8.6px}.room10ErrorDialog{width:min(360px,92vw);padding:20px 17px 17px}.room10ErrorConfirm{width:100%}}@media(max-width:380px){.room10-login-panel{width:95vw}#room10LoginNickname,#room10LoginCode{font-size:12px;padding:0 5px}.room10LoginClose{width:28px;height:28px}}
'''
a='/* =========================\n   统一奖励弹窗\n========================= */'
if '全站通用模板71：统一钥匙登录' not in s: one(a,css+'\n'+a)
html='''
  <div class="room10LoginMask" id="room10LoginMask" aria-hidden="true"><div class="room10-login-panel" role="dialog" aria-modal="true" aria-label="钥匙验证"><img id="room10LoginImage" src="" alt=""><input id="room10LoginNickname" type="text" autocomplete="username" aria-label="昵称"><input id="room10LoginCode" type="password" autocomplete="current-password" aria-label="钥匙"><button id="room10LoginToggle" type="button" aria-label="显示或隐藏钥匙"></button><button id="room10LoginSubmit" type="button" aria-label="开启大门"></button><button class="room10LoginRegisterLink" id="room10LoginRegister" type="button">还没有钥匙？去宿管室登记</button><button id="room10LoginClose" class="room10LoginClose" type="button" aria-label="关闭">×</button><div id="room10LoginMessage" aria-live="polite"></div></div></div>
  <div class="room10ErrorMask" id="room10ErrorMask" aria-hidden="true"><section class="room10ErrorDialog" role="alertdialog" aria-modal="true" aria-labelledby="room10ErrorTitle"><h2 class="room10ErrorTitle" id="room10ErrorTitle">操作失败</h2><p class="room10ErrorMessage" id="room10ErrorMessage">本次操作未成功。请截图此提示，并及时反馈给维修工。</p><div class="room10ErrorDetail" id="room10ErrorDetail"></div><div class="room10ErrorMeta" id="room10ErrorMeta"></div><button class="room10ErrorConfirm" id="room10ErrorConfirm" type="button">知道了</button></section></div>
'''
if 'id="room10LoginMask"' not in s: one('  <div id="toastMask" aria-hidden="true">',html+'\n  <div id="toastMask" aria-hidden="true">')
s=s.replace('currentUserText.textContent = `${nickname} | ${roleLabel}`;','currentUserText.textContent = `${nickname}｜${roleLabel}`;')
refs='''  const toastConfirmBtn = document.getElementById("toastConfirmBtn");
  let toastResolve = null;'''
newrefs='''  const toastConfirmBtn = document.getElementById("toastConfirmBtn");
  const room10LoginMask=document.getElementById("room10LoginMask"),room10LoginImage=document.getElementById("room10LoginImage"),room10LoginNickname=document.getElementById("room10LoginNickname"),room10LoginCode=document.getElementById("room10LoginCode"),room10LoginSubmit=document.getElementById("room10LoginSubmit"),room10LoginMessage=document.getElementById("room10LoginMessage");
  const room10ErrorMask=document.getElementById("room10ErrorMask"),room10ErrorTitle=document.getElementById("room10ErrorTitle"),room10ErrorMessage=document.getElementById("room10ErrorMessage"),room10ErrorDetail=document.getElementById("room10ErrorDetail"),room10ErrorMeta=document.getElementById("room10ErrorMeta"),room10ErrorConfirm=document.getElementById("room10ErrorConfirm");
  let room10PendingLoginTarget="",room10ErrorReturnFocus=null;
  let toastResolve = null;'''
if 'const room10LoginMask=' not in s: one(refs,newrefs)
one('''  function redirectToIndex() {
    window.location.href = getRoom10Page("index");
  }
''','''  function redirectToIndex() {
    openRoom10Login(getRoom10Page("studioTodo"));
  }
''')
helpers=r'''
  function syncRoom10BodyLock(){document.body.classList.toggle("room10ModalOpen",Boolean(room10LoginMask?.classList.contains("show")||room10ErrorMask?.classList.contains("show")||toastMask?.classList.contains("show")||wheelModalMask?.classList.contains("show")))}
  function setRoom10LoginMessage(v,ok=false){if(room10LoginMessage){room10LoginMessage.style.color=ok?"#5f7d3a":"#8b4a2d";room10LoginMessage.textContent=String(v||"")}}
  function openRoom10Login(target=""){if(isLoggedIn()){if(target&&target!==getRoom10Page("studioTodo"))location.href=target;return}room10PendingLoginTarget=String(target||"").trim();setRoom10LoginMessage("");if(room10LoginImage&&!room10LoginImage.src)room10LoginImage.src=getRoom10Asset("root.login");room10LoginMask?.classList.add("show");room10LoginMask?.setAttribute("aria-hidden","false");syncRoom10BodyLock();setTimeout(()=>room10LoginNickname?.focus(),30)}
  function closeRoom10Login(){room10LoginMask?.classList.remove("show");room10LoginMask?.setAttribute("aria-hidden","true");setRoom10LoginMessage("");syncRoom10BodyLock()}
  function toggleRoom10LoginCode(){if(room10LoginCode)room10LoginCode.type=room10LoginCode.type==="password"?"text":"password"}
  function errorText(e){if(!e)return"";if(typeof e==="string")return e.trim();const a=[e.message,e.error_description,e.details,e.hint,e.code].filter(v=>v!=null&&String(v).trim());if(a.length)return a.map(String).join("｜");try{return JSON.stringify(e)}catch{return String(e)}}
  function showOperationFailure(e,action="本次操作"){if(!room10ErrorMask)return;const a=String(action||"本次操作").trim()||"本次操作",d=errorText(e).slice(0,500);room10ErrorTitle.textContent="操作失败";room10ErrorMessage.textContent=`${a}未成功。\n请截图此提示，并及时反馈给维修工。`;room10ErrorDetail.textContent=d?`错误信息：${d}`:"";room10ErrorMeta.textContent=`页面：${document.title||location.pathname}\n时间：${new Date().toLocaleString("zh-CN",{hour12:false})}`;room10ErrorReturnFocus=document.activeElement instanceof HTMLElement?document.activeElement:null;room10ErrorMask.classList.add("show");room10ErrorMask.setAttribute("aria-hidden","false");syncRoom10BodyLock();requestAnimationFrame(()=>room10ErrorConfirm?.focus())}
  function closeOperationFailure(){room10ErrorMask?.classList.remove("show");room10ErrorMask?.setAttribute("aria-hidden","true");syncRoom10BodyLock();const t=room10ErrorReturnFocus;room10ErrorReturnFocus=null;if(t?.isConnected)t.focus()}
  window.showOperationFailure=showOperationFailure;window.showOperationError=showOperationFailure;
  async function submitRoom10Login(){if(!room10LoginNickname||!room10LoginCode||!room10LoginSubmit)return;const nickname=String(room10LoginNickname.value||"").replace(/\u3000/g," ").trim(),code=String(room10LoginCode.value||"").replace(/\u3000/g," ").trim();if(!nickname||!code){setRoom10LoginMessage("还没填写完整呢");return}room10LoginSubmit.disabled=true;setRoom10LoginMessage("正在验证……");try{const{data,error}=await supabaseClient.rpc("verify_member_login",{input_nickname:nickname,input_code:code});if(error)throw error;const u=Array.isArray(data)?data[0]:data,id=String(u?.member_id||u?.id||"").trim();if(!u||!id){setRoom10LoginMessage("没有找到你的记录哎");return}localStorage.setItem(STORAGE_KEYS.loggedIn,"true");localStorage.setItem(STORAGE_KEYS.user,u.nickname||nickname);localStorage.setItem(STORAGE_KEYS.role,normalizeRoleValue(u.role||"member"));localStorage.setItem(STORAGE_KEYS.memberId,id);localStorage.setItem(STORAGE_KEYS.memberCode,u.member_code||u.memberCode||u.code||code);setRoom10LoginMessage("登录成功",true);const target=room10PendingLoginTarget;room10PendingLoginTarget="";setTimeout(()=>{room10LoginNickname.value="";room10LoginCode.value="";room10LoginCode.type="password";closeRoom10Login();if(target&&target!==getRoom10Page("studioTodo"))location.href=target;else location.reload()},350)}catch(e){setRoom10LoginMessage(`登录失败：${String(e?.message||"请稍后再试")}`);showOperationFailure(e,"登录")}finally{room10LoginSubmit.disabled=false}}
  function goRoom10Register(){const x=getRoom10Page("managerRegister"),r=location.href;sessionStorage.setItem("room10RegisterReturn",r);location.href=`${x}?from=${encodeURIComponent(r)}`}
'''
if 'async function submitRoom10Login()' not in s: one('  async function ensureAuthState() {',helpers+'\n  async function ensureAuthState() {')
s=s.replace('''      clearStoredLogin();
      redirectToIndex();
      return false;''','''      clearStoredLogin();
      updateTopBarIdentity();
      openRoom10Login(getRoom10Page("studioTodo"));
      return false;''')
one('''    clearStoredLogin();
    redirectToIndex();
  }

  function showToast''','''    clearStoredLogin();
    updateTopBarIdentity();
    openRoom10Login(getRoom10Page("studioTodo"));
  }

  function showToast''')
one('  loginOpenBtn?.addEventListener("click", () => redirectToIndex());','  loginOpenBtn?.addEventListener("click", () => openRoom10Login(getRoom10Page("studioTodo")));')
listen='''  logoutBtn?.addEventListener("click", async () => { await handleLogout(); });
  document.getElementById("room10LoginClose")?.addEventListener("click",closeRoom10Login);
  document.getElementById("room10LoginToggle")?.addEventListener("click",toggleRoom10LoginCode);
  document.getElementById("room10LoginSubmit")?.addEventListener("click",submitRoom10Login);
  document.getElementById("room10LoginRegister")?.addEventListener("click",goRoom10Register);
  room10ErrorConfirm?.addEventListener("click",closeOperationFailure);
  [room10LoginNickname,room10LoginCode].forEach(i=>i?.addEventListener("keydown",e=>{if(e.key==="Enter")submitRoom10Login()}));
  room10LoginMask?.addEventListener("click",e=>{if(e.target===room10LoginMask)closeRoom10Login()});
  room10ErrorMask?.addEventListener("click",e=>{if(e.target===room10ErrorMask)closeOperationFailure()});
'''
if 'room10LoginClose")?.addEventListener' not in s: one('  logoutBtn?.addEventListener("click", async () => { await handleLogout(); });\n',listen)
if 'closeOperationFailure();closeRoom10Login();' not in s: one('  window.addEventListener("storage", (event) => {','  document.addEventListener("keydown",e=>{if(e.key==="Escape"){closeOperationFailure();closeRoom10Login();}});\n\n  window.addEventListener("storage", (event) => {')
s=s.replace('''    if (toastMask && !toastMask.classList.contains("show")) {
      showToast("页面运行错误", message);
    }''','''    showOperationFailure(event?.error || message, "页面运行");''')
s=s.replace('''    if (toastMask && !toastMask.classList.contains("show")) {
      showToast("页面操作失败", message);
    }''','''    showOperationFailure(reason || message, "页面操作");''')
s=s.replace('''      const ok = await ensureAuthState();
      if (!ok) return;''','''      updateTopBarIdentity();
      const ok = await ensureAuthState();
      if (!ok) return;''',1)
if 'room10LoginImage.src=getRoom10Asset("root.login")' not in s: one('  let toastMode = "alert";','  let toastMode = "alert";\n  if(room10LoginImage)room10LoginImage.src=getRoom10Asset("root.login");')
for t in ['id="room10LoginMask"','id="room10ErrorMask"','async function submitRoom10Login()','window.showOperationFailure=showOperationFailure','data-filter="资料补充"','function getSupplementTags(task)','let allProjectSearchItems = []','supabaseClient.rpc(']:
    if t not in s: raise SystemExit('missing token: '+t)
if '.from(' in s: raise SystemExit('direct table access found')
if s==orig: raise SystemExit('no changes')
p.write_text(s,encoding='utf-8',newline='\n')
print('patched',p,len(orig),'->',len(s))
