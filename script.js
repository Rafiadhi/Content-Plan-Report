const BLN=["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"];
const DEFP="Kamu copywriter konten Instagram untuk bengkel teknisi: custom spare part, custom mesin, bubut mesin, service mesin dan rem, selang PU. Tulis hook tajam dan santai yang bikin orang berhenti scroll: 1 sampai 2 kalimat, ada konflik atau risiko nyata di dunia bengkel, tanpa klise. Gambaran slide dan opsi gambar dibuat singkat dan dramatis.";
const DEFT=["Selang PU","Custom spare part","Bubut mesin","Custom mesin"];
const JNS=["STORYTELLING","EDUCATION","LIFESTYLE","ASMR","TRENDING","FASHION TIPS","TUTORIAL","SOCIAL PROOF","REVIEW"];
let N={feeds:16,story:30};const nn=id=>id=='b3'?{feeds:10,story:0}:{feeds:16,story:30},FS=[2,2,3,4,3,2,3,3,2,2,3,4,3,2,3,3],ST=[3,3,3,3,2,3,2,2,4,3,3,3,3,3,2,3,2,2,4,3,2,3,2,2,4,2,3,2,2,4],$=s=>document.querySelector(s),p2=n=>String(n).padStart(2,"0"),up=s=>String(s).toUpperCase();
const esc=s=>String(s??"").replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const NOW=new Date(),NY=NOW.getFullYear(),NM=NOW.getMonth(),mk=(y,m)=>y+"-"+p2(m+1),root=document.documentElement;
const RM=matchMedia("(prefers-reduced-motion: reduce)").matches;
let cur,bid,plan,cfg,okFn,ld={feeds:new Set(),story:new Set()},busy={};
const SEED=[["rj","Rhoda Jaya"],["b2","Panarybody"],["b3","Talk Bring Changes"]];
let brands=(()=>{try{const v=JSON.parse(localStorage.getItem("rj-brands"));if(Array.isArray(v)){v.forEach(b=>{if(b.id=="b2"&&b.name=="Brand 02")b.name="Panarybody";if(b.id=="b3"&&b.name=="Brand 03")b.name="Talk Bring Changes"});return v.filter(b=>!(/^b[456]$/.test(b.id)&&/^Brand 0[1-9]$/.test(b.name)))}}catch(e){}return SEED.map(([id,name])=>({id,name}))})();
const sb=()=>{try{localStorage.setItem("rj-brands",JSON.stringify(brands))}catch(e){}};
const pk=id=>id=="rj"?"rj-plan-":"rj-plan-"+id+"-",ck=id=>"rj-cfg-"+id,isS=id=>id=="b2";
const load=(id,k)=>{try{const v=JSON.parse(localStorage.getItem(pk(id)+k));if(v&&v.feeds&&v.story)return v}catch(e){}return{focus:"",feeds:Array(16).fill(null),story:Array(30).fill(null),rows:{}}};
const save=(k=cur,p=plan,id=bid)=>{try{localStorage.setItem(pk(id)+k,JSON.stringify(p))}catch(e){}};
const loadCfg=id=>{try{const v=JSON.parse(localStorage.getItem(ck(id)));if(v&&v.prompt&&v.topics&&v.topics.length)return v}catch(e){}return{prompt:DEFP,topics:[...DEFT]}};
const tpo=(C,i)=>C.topics[i%C.topics.length],cnt=a=>a.filter(Boolean).length;
const YR=[2026,2027],y0=y=>y==2026?8:0,tot=(id,y,i)=>isS(id)?new Date(y,i+1,0).getDate()*5:nn(id).feeds+nn(id).story,unit=id=>isS(id)?'video':'ide',cn=(id,y,i)=>{const p=load(id,mk(y,i)),n=nn(id);return isS(id)?Object.values(p.rows||{}).filter(r=>r.l||r.c).length:cnt(p.feeds.slice(0,n.feeds))+cnt(p.story.slice(0,n.story))},cde=s=>{const m=String(s).toUpperCase().match(/\b[A-Z]{1,4}\d{2,5}\b/g);return m?m[m.length-1]:''};
function stat(id){let t=0;YR.forEach(y=>{for(let i=y0(y);i<12;i++)t+=cn(id,y,i)});return{t}}
let tt;function toast(s){const t=$("#ts");t.textContent=s;t.classList.add("on");clearTimeout(tt);tt=setTimeout(()=>t.classList.remove("on"),5000)}
function go(fn){const v=$("#view");if(RM){fn();scrollTo(0,0);return}v.classList.add("out");
 setTimeout(()=>{fn();scrollTo(0,0);v.classList.remove("out");v.classList.add("in");setTimeout(()=>v.classList.remove("in"),460)},220)}
const hd=(t,s)=>`<h1 class="h1">${esc(t)}</h1><p class="sub">${s}</p>`;
if(!root.dataset.theme)root.dataset.theme=matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light";
$("#tg").onclick=()=>{const t=root.dataset.theme=="dark"?"light":"dark";root.dataset.theme=t;try{localStorage.setItem("rj-theme",t)}catch(e){}};

const H=[330,380,300,400,350,320,370],W=[64,80,58,90,70,60,84];
function home(){bid=cur=plan=null;
 $("#view").innerHTML=`<p class="top"><b>PILIH BRAND</b></p><div class="shelf">${brands.map((b,i)=>{const h=H[i%7],n=up(b.name),fs=Math.max(13,Math.min(24,Math.floor((h-90)/(n.length*.78))));
 return`<button class="bs v${i%6}" style="--h:${h}px;--w:${W[(i*3)%7]}px;--fs:${fs}px;--i:${i}" data-a="brand" data-b="${b.id}" data-r="1" data-n="${stat(b.id).t} ${unit(b.id)} terisi"><em>${p2(i+1)}</em><span>${esc(n)}</span><i></i></button>`}).join("")}<button class="bs ad" style="--i:${brands.length}" data-a="add"><span>+ BRAND</span></button></div><p class="dlg" id="dl">Arahkan ke buku lalu klik untuk membuka brand.</p>`}
const info=e=>{const s=e.target.closest&&e.target.closest(".bs"),d=$("#dl");if(!s||!d)return;d.innerHTML=s.dataset.b?`<b>${esc(s.querySelector("span").textContent)}</b>, ${s.dataset.n}. Klik untuk membuka.`:"Klik untuk menambah brand baru."};
document.addEventListener("mouseover",info);document.addEventListener("focusin",info);

function brandView(id,y){const b=brands.find(x=>x.id==id);if(!b){location.hash="";return}bid=id;cur=plan=null;y=y||YR[0];
 $("#view").innerHTML=hd(up(b.name),"Pilih kaset bulan untuk membuka content plan.")+`<div class='yt'>${YR.map(v=>`<button class='btn${v==y?' on':''}' data-a='yr' data-b='${id}' data-y='${v}'>${v}</button>`).join('')}</div><div class="cg">${BLN.map((m,i)=>{if(i<y0(y))return'';const c=cn(id,y,i),t=tot(id,y,i);
 return`<button class="cs k${i%6}" data-a="month" data-b="${id}" data-m="${mk(y,i)}" style="--i:${i}"><svg viewBox="0 0 200 130"><use href="#cs"/></svg><span class="y">${y}</span><small class="n">${c}/${t}</small><span class="m">${up(m)}</span><span class="xp"><u style="width:${c/t*100}%"></u></span>${y==NY&&i==NM?'<em class="nw">BULAN INI</em>':""}</button>`}).join("")}</div>`}

function sec(k,t){const ix=[...Array(N[k]).keys()];if(k=="feeds")ix.reverse();
 return`<section class="pn ${k=="feeds"?"ph":"sc"}"><div class="sh"><h2>${t}</h2><button class="gb gen" data-a="gen" data-k="${k}"><svg><use href="#spk"/></svg>Generate</button><span class="ct" id="ct-${k}"></span></div>
 <div class="${k=="feeds"?"fg":"sg"}">${k=="feeds"?'<div class="c blank"></div>'.repeat((3-N.feeds%3)%3):""}${ix.map(i=>`<div class="${k=="feeds"?"c":"r"}" data-k="${k}" data-i="${i}"></div>`).join("")}</div></section>`}
function planView(id,k){const b=brands.find(x=>x.id==id);if(!b){location.hash="";return}bid=id;cur=k;N=nn(id);plan=load(id,k);cfg=loadCfg(id);ld={feeds:new Set(),story:new Set()};const[y,m]=k.split("-").map(Number);
 const badge=`<span class="bt">${esc(up(b.name))}</span>`;
 if(isS(id)){plan.rows=plan.rows||{};const days=new Date(y,m,0).getDate(),o=(l,v)=>`<option${l==v?" selected":""}>${l}</option>`;let h="";
  for(let d=1;d<=days;d++)for(let r=0;r<5;r++){const q=d+"-"+r,w=plan.rows[q]||{};
   h+=`<tr>${r?"":`<td class="d0" rowspan="5">${p2(d)}-${p2(m)}-${y}</td>`}<td class="${w.k=="HARDSELL"?"hs":w.k=="SOFTSELL"?"ss":""}"><select data-q="${q}" data-f="k"><option value="">-</option>${["HARDSELL","SOFTSELL"].map(l=>o(l,w.k)).join("")}</select></td><td><input data-q="${q}" data-f="c" value="${esc(w.c)}" placeholder="-"></td><td class="jn"><select data-q="${q}" data-f="j"><option value="">-</option>${JNS.map(l=>o(l,w.j=="RREVIEW"?"REVIEW":w.j)).join("")}</select></td><td><input class="lk" data-q="${q}" data-f="l" value="${esc(w.l)}" placeholder="https://vt.tiktok.com/..."></td></tr>`}
  $("#view").innerHTML=hd(up(BLN[m-1])+" "+y,badge)+`<div class='bar2'><button class='btn fill' data-a='dl'>Download spreadsheet (.csv)</button><button class='btn' data-a='cp'>Salin untuk Google Sheets</button><a class='btn' href='https://sheets.new' target='_blank' rel='noopener'>Buka Google Sheets baru</a></div><p class="tip">Tempel banyak link atau nama produk sekaligus (satu per baris) di kolom link atau kode untuk mengisi ke bawah. Kode otomatis diambil dari nama produk, contoh QN2607.</p><div class="sw"><table class="sheet"><tr><th>TANGGAL</th><th>KONTEN</th><th>KODE PRODUK</th><th>JENIS KONTEN</th><th>LINK VIDEO</th></tr>${h}</table></div>${vt(plan)}`;return}
 $("#view").innerHTML=hd(up(BLN[m-1])+" "+y,badge)+`<div class="hud"><div class="xpb"><div class="xph"><b>PROGRES</b><span id="xt"></span></div><div class="bar"><u id="xf"></u></div></div><button class="btn" data-a="prm">Ubah prompt</button></div>
 <label class="fc"><b>Ide berhubungan seputar</b><input id="fi" value="${esc(plan.focus)}" placeholder="contoh: musim hujan, promo akhir tahun, alat berat tambang"></label>
 <p class="tip">Isi kolom di atas lalu klik Generate. Klik kanan (atau tekan lama di HP) pada satu ide untuk generate ulang. Feeds 1 ada di paling bawah, Feeds ${N.feeds} di paling atas.</p><div class="pl${N.story?'':' one'}">${sec("feeds","Feeds IG")}${N.story?sec("story","Story"):''}</div>`;
 ["feeds","story"].forEach(t=>plan[t].forEach((_,i)=>paint(t,i)))}

function inner(k,i){const it=plan[k][i],l=ld[k].has(i),tg=`<span class="t t${i%4}">${esc(it&&it.tp||tpo(cfg,i))}</span>`;
 const hk=l?'<span class="hk e">Menulis ide…</span>':it?`<span class="hk">${esc(it.hook)}</span>`:'<span class="hk e">Belum ada ide</span>';
 return k=="feeds"?`<span class="n">Feeds ${i+1}</span>${hk}${tg}`:`<b>${i+1}</b><div class="rb">${hk}${tg}</div>`}
function paint(k,i,f){const e=document.querySelector(`[data-k="${k}"][data-i="${i}"]`);if(!e)return;e.innerHTML=inner(k,i);
 const l=ld[k].has(i);e.classList.toggle("ld",l);e.classList.remove("pop");
 if(f&&!l){void e.offsetWidth;e.style.animationDelay=(i%8)*40+"ms";e.classList.add("pop")}
 const c=$("#ct-"+k);if(c)c.textContent=cnt(plan[k])+" / "+N[k]+" ide";
 const t=cnt(plan.feeds)+cnt(plan.story);const M=N.feeds+N.story;$("#xt").textContent=t>=M?"SELESAI":t+" / "+M;$("#xf").style.width=t/M*100+"%"}

async function ask(k,idx,avoid,P,key,nm,C){
 const Sm=window.claude&&await window.claude.use("sample");if(!Sm)throw{code:"na"};
 const spec=idx.map(i=>`${i+1}=${tpo(C,i)}`).join(", ");
 const p=`${C.prompt}\n\nBrand: ${nm}. Bulan: ${BLN[+key.split("-")[1]-1]}. Seputar: ${P.focus||"bebas"}.\nBuat ${idx.length} ide ${k=="feeds"?"postingan feed carousel":"story"} Instagram. Topik tiap nomor (nomor=topik): ${spec}. Tiap ide murni tentang topiknya dan beda satu sama lain.${avoid?` Jangan mirip dengan: ${avoid}`:""}\nBalas HANYA baris dengan format persis ini, tanpa tabel dan tanpa teks lain, satu ide satu baris:\nnomor||Hook tajam||Gambaran slide (singkat, pakai tanda panah)||Opsi gambar (singkat)`;
 const r=await Sm(p,{cache:false});
 return r.text.split("\n").map(l=>l.split("||").map(s=>s.trim())).filter(a=>a.length>=4&&/^\d+$/.test(a[0])&&a[1]).map(a=>({n:+a[0],hook:a[1].replace(/^["“”]+|["“”]+$/g,""),slide:a[2],gambar:a[3]}))}
function bz(k,on){busy[k]=on;const b=document.querySelector(`.gen[data-k="${k}"]`);if(b){b.disabled=on;b.classList.toggle("sp",on)}}
async function gen(k,only){
 const id=bid,key=cur,P=plan,C=cfg,nm=(brands.find(x=>x.id==id)||{}).name,all=only||[...Array(N[k]).keys()],old=only&&P[k][only[0]],live=()=>P===plan,pt=(i,f)=>live()&&paint(k,i,f),sz=k=="feeds"?8:10;
 all.forEach(i=>{ld[k].add(i);pt(i)});if(!only)bz(k,true);
 let er=null,got=0;const q=[];for(let j=0;j<all.length;j+=sz)q.push(all.slice(j,j+sz));
 await Promise.all([0,1].map(async()=>{while(q.length){const c=q.shift();
  try{(await ask(k,c,old?old.hook:"",P,key,nm,C)).forEach(o=>{const i=o.n-1;if(c.includes(i)){P[k][i]={hook:o.hook,slide:o.slide,gambar:o.gambar,tp:tpo(C,i)};got++}})}catch(e){er=e}
  c.forEach(i=>{ld[k].delete(i);pt(i,true)});save(key,P,id)}}));
 if(!only&&live())bz(k,false);
 if(er&&!got)toast(er.code=="not_granted"?"Izin generate belum diberikan.":er.code=="rate_limited"?"Terlalu banyak permintaan, tunggu sebentar lalu coba lagi.":er.code=="na"?"Generate otomatis hanya jalan di dalam Claude.":"Gagal membuat ide: "+String(er.message||er.code||"coba lagi").slice(0,120));
 else if(got<all.length)toast(got+" dari "+all.length+" ide berhasil. Klik kanan ide yang kosong untuk generate ulang.")}

function detail(k,i){const it=plan[k][i];if(!it)return;const sl=it.slide||(it.slides||[]).map(x=>x.isi).join(" → "),gm=it.gambar||(it.slides||[]).map(x=>x.gambar).join(" / ");
 $("#md").innerHTML=`<span class="t t${i%4}">${k=="feeds"?"Feeds":"Story"} ${i+1}</span><span class="t t0">${esc(it.tp||tpo(cfg,i))}</span><h3>${esc(it.hook)}</h3>
 <div class="tw"><table class="dt"><tr><th>Gambaran slide</th><th>Opsi gambar</th></tr><tr><td>${esc(sl)}</td><td>${esc(gm)}</td></tr></table></div>
 <div class="ma"><button class="btn" data-a="redo" data-k="${k}" data-i="${i}">Generate ulang</button><button class="btn" data-a="mat" data-k="${k}" data-i="${i}">Buka materi</button><button class="btn fill" data-a="x">Tutup</button></div>`;$("#ov").classList.add("on")}
async function mat(k,i,force){const it=plan[k][i];if(!it)return;const n=(k=='feeds'?FS:ST)[i],P=plan,id=bid,key=cur,C=cfg,nm=(brands.find(x=>x.id==id)||{}).name,on=()=>$('#ov').classList.contains('on'),
 show=()=>{if(P!==plan||!on())return;const R=Array.from({length:n},(_,j)=>it.m[j]||{t:'',v:''});
  $('#md').innerHTML=`<p class='tip' style='margin:0 0 14px'>${esc(it.hook)}</p><div class='tw'><table class='mx'><tr><th class='hh' colspan='3'>${k=='feeds'?'FEEDS':'STORY'} ${i+1}</th></tr><tr><th class='ch'>Slide</th><th class='ch'>Judul / Isi Konten</th><th class='ch'>Opsi Gambar / Visual</th></tr>${R.map((r,j)=>`<tr><td>${j+1}</td><td>${esc(r.t)}</td><td>${esc(r.v)}</td></tr>`).join('')}</table></div><div class='ma'><button class='btn' data-a='mre' data-k='${k}' data-i='${i}'>Generate ulang materi</button><button class='btn fill' data-a='x'>Tutup</button></div>`};
 $('#ov').classList.add('on');
 if(it.m&&!force){show();return}
 $('#md').innerHTML=`<h3>Menulis materi ${k=='feeds'?'Feeds':'Story'} ${i+1}…</h3><p class='tip'>${n} slide, tunggu sebentar.</p>`;
 try{const Sm=window.claude&&await window.claude.use('sample');if(!Sm)throw{code:'na',message:'Generate otomatis hanya jalan di dalam Claude.'};
  const p=`${C.prompt}

Brand: ${nm}. Ide ${k=='feeds'?'feed carousel':'story'} Instagram bertopik ${it.tp||''}.
Hook: ${it.hook}
Gambaran: ${it.slide||''} Opsi gambar: ${it.gambar||''}
Buat materi tepat ${n} slide. Tiap slide: teks yang tertulis di desain (headline pendek dan tajam, maksimal 14 kata) dan gambaran visual yang tampil (1 kalimat singkat). Slide 1 adalah cover yang memuat hook, slide terakhir penutup atau ajakan.
Balas HANYA ${n} baris dengan format persis: nomor||Teks di desain||Gambaran visual. Tanpa teks lain.`;
  const r=await Sm(p,{cache:false}),rows=r.text.split(String.fromCharCode(10)).map(l=>l.split('||').map(s=>s.trim())).filter(a=>a.length>=3&&a[0]&&!isNaN(a[0])).map(a=>({t:a[1],v:a.slice(2).join(' ')}));
  if(!rows.length)throw{code:'empty',message:'Jawaban kosong'};it.m=rows;save(key,P,id);show()
 }catch(e){if(P===plan&&on())$('#md').innerHTML=`<h3>Materi gagal dibuat</h3><p class='tip'>${esc(String(e.message||e.code||'coba lagi').slice(0,140))}</p><div class='ma'><button class='btn' data-a='mre' data-k='${k}' data-i='${i}'>Coba lagi</button><button class='btn fill' data-a='x'>Tutup</button></div>`}}
function form(t,v,lb,fn){okFn=fn;$("#md").innerHTML=`<h3>${t}</h3>${v===null?"":`<input class="in" id="fv" value="${esc(v)}" maxlength="30" autocomplete="off">`}<div class="ma"><button class="btn" data-a="x">Batal</button><button class="btn fill" data-a="ok">${lb}</button></div>`;$("#ov").classList.add("on");setTimeout(()=>{const f=$("#fv");f&&f.focus()},350)}
function menu(x,y,h){const m=$("#cm");m.innerHTML=h;m.style.left=Math.max(8,Math.min(x,innerWidth-236))+"px";m.style.top=Math.max(8,Math.min(y,innerHeight-150))+"px";m.classList.add("on")}
function ctx(c,x,y){const bt=(a,t,at)=>`<button data-a="${a}" ${at}>${t}</button>`;
 if(c.dataset.r){const at=`data-b="${c.dataset.b}"`;return menu(x,y,bt("ren","Ubah nama",at)+bt("del","Hapus brand",at))}
 const k=c.dataset.k,i=+c.dataset.i,has=plan[k][i],at=`data-k="${k}" data-i="${i}"`;
 menu(x,y,bt("redo","Generate ide ini",at)+(has?bt("mat","Buka materi",at)+bt("d","Lihat detail",at)+bt("clr","Kosongkan",at):""))}

const A={
 brand(d){location.hash="brand-"+d.b},month(d){location.hash="plan-"+d.b+"-"+d.m},home(){location.hash=""},
 back(){location.hash=cur?"brand-"+bid+"-"+cur.slice(0,4):""},
 add(){form("Tambah brand","","Simpan",v=>{brands.push({id:"n"+Date.now().toString(36),name:v});sb();route(true)})},
 ren(d){const b=brands.find(x=>x.id==d.b);form("Ubah nama brand",b.name,"Simpan",v=>{b.name=v;sb();route(true)})},
 del(d){const b=brands.find(x=>x.id==d.b);form(`Hapus “${esc(up(b.name))}”? Semua isi di brand ini ikut terhapus.`,null,"Hapus",()=>{try{localStorage.removeItem(ck(b.id));Object.keys(localStorage).filter(k=>k.startsWith(pk(b.id))&&(b.id!="rj"||/^rj-plan-\d/.test(k))).forEach(k=>localStorage.removeItem(k))}catch(e){}brands=brands.filter(x=>x!=b);sb();route(true)})},
 ok(){const i=$("#fv"),v=i?i.value.trim():"";if(i&&!v)return;const f=okFn;A.x();f(v)},
 prm(){$("#md").innerHTML=`<h3>Ubah prompt content plan</h3><label class="lb">Prompt<textarea class="in" id="pp" rows="7">${esc(cfg.prompt)}</textarea></label><label class="lb">Topik (pisahkan dengan koma, dirotasi berurutan agar tidak ada topik sama yang berdekatan)<input class="in" id="pt" value="${esc(cfg.topics.join(", "))}"></label><p class="tip">Brand, bulan, isi “ide berhubungan seputar”, jumlah ide, dan format hasil (nomor, hook tajam, gambaran slide, opsi gambar) ditambahkan otomatis. Prompt ini hanya berlaku untuk brand ini.</p>
 <div class="ma"><button class="btn" data-a="rst">Kembalikan default</button><button class="btn" data-a="x">Batal</button><button class="btn fill" data-a="psv">Simpan</button></div>`;$("#ov").classList.add("on")},
 rst(){$("#pp").value=DEFP;$("#pt").value=DEFT.join(", ")},
 psv(){const t=$("#pt").value.split(",").map(s=>s.trim()).filter(Boolean);cfg={prompt:$("#pp").value.trim()||DEFP,topics:t.length?t:[...DEFT]};try{localStorage.setItem(ck(bid),JSON.stringify(cfg))}catch(e){}A.x();["feeds","story"].forEach(k=>plan[k].forEach((_,i)=>paint(k,i)));toast("Prompt disimpan. Klik Generate untuk memakainya.")},
 yr(d){location.hash='brand-'+d.b+'-'+d.y},mat(d){mat(d.k,+d.i)},mre(d){mat(d.k,+d.i,1)},
 vadd(){plan.vids=plan.vids||[];for(let i=0;i<10;i++)plan.vids.push({});save();route(true)},
 async dl(){const data=String.fromCharCode(65279)+tbl(','),fn='panarybody-'+cur+'.csv';try{const D=window.claude&&await window.claude.use('downloads');if(D){await D.save({filename:fn,data});return}}catch(e){if(e.code=='declined'){toast('Download dibatalkan.');return}}const a=document.createElement('a');a.href=URL.createObjectURL(new Blob([data],{type:'text/csv;charset=utf-8'}));a.download=fn;document.body.appendChild(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(a.href),1000)},
 async cp(){const s=tbl(String.fromCharCode(9));try{await navigator.clipboard.writeText(s)}catch(e){const a=document.createElement('textarea');a.value=s;document.body.appendChild(a);a.select();try{document.execCommand('copy')}catch(x){}a.remove()}toast('Tabel disalin. Buka sheets.new lalu tempel (Ctrl+V atau Cmd+V).')},
 gen(d){if(!busy[d.k])gen(d.k)},d(d){detail(d.k,+d.i)},
 redo(d){$("#ov").classList.remove("on");gen(d.k,[+d.i])},
 clr(d){plan[d.k][+d.i]=null;save();paint(d.k,+d.i)},x(){$("#ov").classList.remove("on")}};
function sv(t){plan.rows=plan.rows||{};const q=t.dataset.q,r=plan.rows[q]=plan.rows[q]||{};r[t.dataset.f]=t.value;if(t.dataset.f=="k")t.parentNode.className=t.value=="HARDSELL"?"hs":t.value=="SOFTSELL"?"ss":"";save()}
function ext(t){const m=t.value.toUpperCase().match(/\b[A-Z]{1,4}\d{2,5}\b/g);if(m)t.value=m[m.length-1]}
function sv2(t){const r=plan.vids[+t.dataset.v],f=t.dataset.f;r[f]=t.value;if(f=='n'){const c=cde(t.value),e=t.closest('tr').querySelector('[data-f=c]');if(c&&e){e.value=c;r.c=c}}save()}
const vt=p=>{const v=p.vids=p.vids||[];while(v.length<10)v.push({});
 return`<div class='sh' style='margin-top:40px'><h2>LINK VIDEO</h2></div><p class='tip'>Tempel link video di kolom link (boleh banyak sekaligus, satu per baris). Nama produk di keranjang kuning dan deskripsinya diisi dengan menyalin dari TikTok, karena TikTok tidak bisa dibaca otomatis. Kode produk terisi sendiri dari nama produk.</p><div class='sw'><table class='sheet vt'><tr><th>NO</th><th>LINK VIDEO</th><th>NAMA PRODUK (KERANJANG KUNING)</th><th>KODE</th><th>DESKRIPSI</th></tr>${v.map((x,j)=>`<tr><td>${j+1}</td><td><input class='lk' data-v='${j}' data-f='l' value="${esc(x.l)}" placeholder='https://vt.tiktok.com/...'></td><td><textarea data-v='${j}' data-f='n' rows='2'>${esc(x.n)}</textarea></td><td><input data-v='${j}' data-f='c' value="${esc(x.c)}" placeholder='-'></td><td><textarea data-v='${j}' data-f='d' rows='2'>${esc(x.d)}</textarea></td></tr>`).join('')}</table></div><div class='bar2'><button class='btn' data-a='vadd'>Tambah 10 baris</button></div>`};
function tbl(sep){const y=+cur.slice(0,4),m=+cur.slice(5),days=new Date(y,m,0).getDate(),R=[['TANGGAL','KONTEN','KODE PRODUK','JENIS KONTEN','LINK VIDEO']];
 for(let d=1;d<=days;d++)for(let r=0;r<5;r++){const w=plan.rows[d+'-'+r]||{};R.push([p2(d)+'-'+p2(m)+'-'+y,w.k||'',w.c||'',w.j=='RREVIEW'?'REVIEW':w.j||'',w.l||''])}
 return R.map(a=>a.map(c=>sep==','?'"'+String(c).split('"').join('""')+'"':String(c).split(sep).join(' ')).join(sep)).join(String.fromCharCode(10))}
let sup=false,lp;
document.addEventListener("click",e=>{if(sup){sup=false;return}$("#cm").classList.remove("on");
 if(e.target.id=="ov")return A.x();
 const a=e.target.closest("[data-a]");if(a)return A[a.dataset.a](a.dataset);
 const c=e.target.closest("[data-i]");if(c&&plan)detail(c.dataset.k,+c.dataset.i)});
document.addEventListener("contextmenu",e=>{const c=e.target.closest("[data-r],[data-i]");if(!c||(!plan&&!c.dataset.r))return;e.preventDefault();ctx(c,e.clientX,e.clientY)});
addEventListener("touchstart",e=>{sup=false;const c=e.target.closest("[data-r],[data-i]");if(!c||(!plan&&!c.dataset.r))return;const t=e.touches[0];lp=setTimeout(()=>{sup=true;ctx(c,t.clientX,t.clientY)},550)},{passive:true});
["touchend","touchmove","touchcancel"].forEach(n=>addEventListener(n,()=>clearTimeout(lp),{passive:true}));
document.addEventListener("input",e=>{const t=e.target;if(t.id=="fi"&&plan){plan.focus=t.value;save()}else if(t.dataset&&t.dataset.q&&plan)sv(t);else if(t.dataset&&t.dataset.v!==undefined&&plan)sv2(t)});
document.addEventListener("change",e=>{const t=e.target;if(t.dataset&&t.dataset.f=="c"&&t.dataset.q&&plan){ext(t);sv(t)}});
document.addEventListener("paste",e=>{const t=e.target;if(!t.dataset||(!t.dataset.q&&t.dataset.v===undefined)||!/^(INPUT|TEXTAREA)$/.test(t.tagName)||!plan)return;
 const ls=(e.clipboardData.getData("text")||"").split(/\r?\n/).map(s=>s.trim()).filter(Boolean);if(ls.length<2)return;e.preventDefault();
 const all=[...t.closest('table').querySelectorAll(`[data-f="${t.dataset.f}"]`)],s=all.indexOf(t);
 ls.forEach((v,j)=>{const x=all[s+j];if(x){x.value=v;if(x.dataset.q){if(x.dataset.f=="c")ext(x);sv(x)}else sv2(x)}})});
addEventListener("keydown",e=>{if(e.key=="Escape"){A.x();$("#cm").classList.remove("on")}else if(e.key=="Enter"&&e.target.id=="fv")A.ok()});
addEventListener("scroll",()=>$("#cm").classList.remove("on"),{passive:true});
function route(first){const h=location.hash.slice(1),p=/^plan-([a-z0-9]+)-(\d{4}-\d{2})$/.exec(h),b=/^brand-([a-z0-9]+?)(?:-(\d{4}))?$/.exec(h),
 f=()=>{p?planView(p[1],p[2]):b?brandView(b[1],+b[2]):home();$("#bk").style.display=h?"":"none"};if(first){f();$("#view").classList.add("in")}else go(f)}
addEventListener("hashchange",()=>route());route(true);
