const questions = [

/* ========== MCQ (1–20) ========== */

{type:"mcq",q:"Parenteral Nutrition (PN) is primarily used when:",options:[
"The patient prefers IV fluids",
"The GI tract is nonfunctional or unsafe to use",
"The patient needs to lose weight quickly",
"Oral intake is slightly decreased"],a:1},

{type:"mcq",q:"Total Parenteral Nutrition (TPN) is administered through a:",options:[
"Peripheral vein","Nasogastric tube",
"Central venous catheter (CVC)",
"Subcutaneous injection"],a:2},

{type:"mcq",q:"Which of the following is an indication for PN?",options:[
"Severe pancreatitis","Simple diarrhea for 1 day",
"Normal recovery after minor surgery",
"Functioning GI tract"],a:0},

{type:"mcq",q:"The osmolarity of PPN solutions should be kept below:",options:[
"300 mOsm/L","600 mOsm/L","900 mOsm/L","1500 mOsm/L"],a:2},

{type:"mcq",q:"Dextrose in PN provides how many kcal per gram?",options:[
"4","3.4","9","7"],a:1},

{type:"mcq",q:"Primary role of amino acids in PN:",options:[
"Rapid energy","Fluid balance only",
"Tissue repair","Vitamin transport"],a:2},

{type:"mcq",q:"Lipid emulsions in PN should not exceed ____% of calories:",options:[
"10%","20%","30%","50%"],a:2},

{type:"mcq",q:"Critical electrolyte for cardiac & muscle function:",options:[
"Sodium","Potassium","Bicarbonate","Chloride"],a:1},

{type:"mcq",q:"Zinc in PN is essential for:",options:[
"Bone density","Wound healing & immunity",
"Taste only","Vision only"],a:1},

{type:"mcq",q:"A 3-in-1 PN admixture contains:",options:[
"Dextrose, AA, Electrolytes",
"Dextrose, AA, Lipids",
"Vitamins & minerals",
"Lipids & insulin"],a:1},

{type:"mcq",q:"Refeeding syndrome causes dangerous drop in:",options:[
"Glucose","Sodium","Phosphorus","Calcium"],a:2},

{type:"mcq",q:"To prevent rebound hypoglycemia TPN should be:",options:[
"Stopped suddenly","Tapered gradually",
"Replaced by saline","Night only"],a:1},

{type:"mcq",q:"Filter size for lipid PN (3-in-1):",options:[
"0.22 micron","1.2 micron","5 micron","No filter"],a:1},

{type:"mcq",q:"PN tubing should be changed every:",options:[
"12 h","24 h","72 h","1 week"],a:1},

{type:"mcq",q:"Common metabolic complication of PN:",options:[
"Hypertension","Hyperglycemia",
"Constipation","Hypothyroidism"],a:1},

{type:"mcq",q:"PN solutions must be prepared under:",options:[
"Kitchen","Laminar airflow hood",
"Bedside","Open ICU"],a:1},

{type:"mcq",q:"Which vitamins are included in PN?",options:[
"Fat-soluble only","Water-soluble only",
"Both","None"],a:2},

{type:"mcq",q:"Adult fluid requirement on PN:",options:[
"10–20","30–40","50–70","100 mL/kg"],a:1},

{type:"mcq",q:"Fever & chills in TPN patient suggest:",options:[
"Air embolism","Catheter sepsis",
"Fluid overload","Normal"],a:1},

{type:"mcq",q:"Parameter monitored every shift:",options:[
"Weight","Albumin",
"Catheter site & IV flow","Bone density"],a:2},

/* ========== TRUE / FALSE (21–40) ========== */

{type:"tf",q:"PPN is for long-term nutrition (>2 weeks).",a:false},
{type:"tf",q:"Cracking in lipid emulsion means it is safe.",a:false},
{type:"tf",q:"TPN solutions are hypertonic.",a:true},
{type:"tf",q:"Insulin can be added to PN if ordered.",a:true},
{type:"tf",q:"PN is started immediately in unstable patients.",a:false},
{type:"tf",q:"Fat overload syndrome may cause fever & hepatosplenomegaly.",a:true},
{type:"tf",q:"0.22 micron filter is used for clear PN.",a:true},
{type:"tf",q:"1 kg/day weight gain means muscle gain.",a:false},
{type:"tf",q:"PN can stop when oral intake is 20%.",a:false},
{type:"tf",q:"Smart pumps reduce PN errors.",a:true},
{type:"tf",q:"Vitamin K always included in PN.",a:false},
{type:"tf",q:"Pneumothorax is a CVC complication.",a:true},
{type:"tf",q:"PN bags must be checked for expiry.",a:true},
{type:"tf",q:"Trace elements are never added to PN.",a:false},
{type:"tf",q:"Rebound hypoglycemia occurs if TPN stopped fast.",a:true},
{type:"tf",q:"TPN must use an infusion pump.",a:true},
{type:"tf",q:"Peripheral veins tolerate 1500 mOsm/L.",a:false},
{type:"tf",q:"Glucose monitored every 6 h initially.",a:true},
{type:"tf",q:"Home PN is option for chronic patients.",a:true},
{type:"tf",q:"Omega-3 lipids reduce inflammation.",a:true},

/* ========== CRITICAL THINKING (41–50) ========== */

{type:"mcq",q:"If TPN bag empties & new delayed, hang:",options:[
"Normal saline","D10W","LR","Sterile water"],a:1},

{type:"mcq",q:"Why TPN via central vein?",options:[
"High blood flow dilutes hypertonic solution",
"Closer to heart","Easier insertion","More calories"],a:0},

{type:"mcq",q:"Sudden chest pain on TPN – priority?",options:[
"Slow infusion","Left Trendelenburg + O2",
"Cough","Check glucose"],a:1},

{type:"mcq",q:"Which lab needs ↓ protein in PN?",options:[
"Low Hb","High BUN & creatinine",
"Low sodium","High TG"],a:1},

{type:"mcq",q:"Why start PN slowly in malnourished?",options:[
"Save money","Prevent refeeding syndrome",
"Stomach stretch","Taste"],a:1},

{type:"mcq",q:"Yellow layer in 3-in-1 PN bag:",options:[
"Shake it","Infuse slowly",
"Return to pharmacy","Add lipids"],a:2},

{type:"mcq",q:"Why monitor daily weight in PN?",options:[
"Check obesity","Assess fluid balance",
"Exercise","Adjust vitamins"],a:1},

{type:"mcq",q:"GI tract works but patient won’t eat – PN?",options:[
"Yes","No – use the gut",
"If rich","Causes weight loss"],a:1},

{type:"mcq",q:"Glucose 300 mg/dL on TPN – expect:",options:[
"Increase dextrose","Sliding scale insulin",
"Stop PN","Sugar-free soda"],a:1},

{type:"mcq",q:"Stop TPN when oral intake reaches:",options:[
"25%","40%",">60%","100%"],a:2},

];
/* SHUFFLE */
questions.sort(()=>Math.random()-0.5);

let index=0;
let answers=Array(questions.length).fill(null);

/* ELEMENTS */
const qText=document.getElementById("questionText");
const optionsDiv=document.getElementById("options");
const counter=document.getElementById("counter");
const progress=document.getElementById("progressBar");
const nextBtn=document.getElementById("nextBtn");
const retryBtn=document.getElementById("retryBtn");
const qList=document.getElementById("questionsList");

/* MENU */
function toggleMenu(){
  const m=document.getElementById("sideMenu");
  const o=document.getElementById("overlay");
  if(m.style.right==="0px"){m.style.right="-250px";o.style.display="none";}
  else{m.style.right="0";o.style.display="block";}
}

/* DARK MODE */
function toggleDark(){
  document.body.classList.toggle("dark");
}

/* QUIZ */
function startQuiz(){
  index=0;
  answers.fill(null);
  document.getElementById("home").style.display="none";
  document.getElementById("quiz").style.display="block";
  loadQuestion();
}

function loadQuestion(){
  optionsDiv.innerHTML="";
  nextBtn.style.display="none";

  const q=questions[index];
  qText.innerText=q.q;
  counter.innerText=`Question ${index+1} / ${questions.length}`;
  progress.style.width=((index+1)/questions.length*100)+"%";

  if(q.type==="tf"){
    createOption("True",true);
    createOption("False",false);
  }else{
    q.options.forEach((o,i)=>createOption(o,i));
  }
}

function createOption(text,val){
  const b=document.createElement("button");
  b.innerText=text;
  b.onclick=()=>select(val,b);
  optionsDiv.appendChild(b);
}

function select(val,btn){
  if(answers[index]!==null)return;
  answers[index]=val;

  const q=questions[index];
  [...optionsDiv.children].forEach((b,i)=>{
    const correct=q.type==="tf"?((i===0)===q.a):(i===q.a);
    if(correct)b.style.background="#27ae60";
    else if(b===btn)b.style.background="#e74c3c";
    b.disabled=true;
  });
  nextBtn.style.display="inline-block";
}

function nextQuestion(){
  if(index<questions.length-1){
    index++;
    loadQuestion();
  }else finishQuiz();
}

function finishQuiz(){
  let score=0;
  questions.forEach((q,i)=>{if(answers[i]===q.a)score++;});
  qText.innerText=`✅ Finished\nScore ${score}/${questions.length}`;
  optionsDiv.innerHTML="";
  counter.innerText="";
  nextBtn.style.display="none";
  retryBtn.style.display="inline-block";
}

function retryQuiz(){
  location.reload();
}

function toggleQuestions(){
  qList.innerHTML="";
  qList.style.display=qList.style.display==="block"?"none":"block";

  answers.forEach((a,i)=>{
    const d=document.createElement("div");
    d.className="q-item "+(a===null?"unanswered":a===questions[i].a?"correct":"wrong");
    d.innerText=i+1;
    d.onclick=()=>{index=i;loadQuestion();qList.style.display="none";}
    qList.appendChild(d);
  });
}