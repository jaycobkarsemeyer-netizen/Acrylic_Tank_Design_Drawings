
const svg=document.getElementById('canvas');
let tool='rect';
let selected=null;

document.getElementById('rectTool').onclick=()=>tool='rect';
document.getElementById('circleTool').onclick=()=>tool='circle';

svg.addEventListener('click',(e)=>{
 const pt=svg.createSVGPoint();
 pt.x=e.clientX; pt.y=e.clientY;
 const p=pt.matrixTransform(svg.getScreenCTM().inverse());

 if(tool==='rect'){
   const r=document.createElementNS('http://www.w3.org/2000/svg','rect');
   r.setAttribute('x',p.x);
   r.setAttribute('y',p.y);
   r.setAttribute('width',150);
   r.setAttribute('height',80);
   r.setAttribute('fill','none');
   r.setAttribute('stroke','black');
   attach(r);
   svg.appendChild(r);
 }
 else{
   const c=document.createElementNS('http://www.w3.org/2000/svg','circle');
   c.setAttribute('cx',p.x);
   c.setAttribute('cy',p.y);
   c.setAttribute('r',40);
   c.setAttribute('fill','none');
   c.setAttribute('stroke','blue');
   attach(c);
   svg.appendChild(c);
 }
});

function attach(el){
 el.addEventListener('click',(e)=>{
   e.stopPropagation();
   selected=el;
   loadProps();
 });
}

function loadProps(){
 if(!selected) return;

 if(selected.tagName==='rect'){
  xInput.value=selected.getAttribute('x');
  yInput.value=selected.getAttribute('y');
  wInput.value=selected.getAttribute('width');
  hInput.value=selected.getAttribute('height');
 }
}

updateBtn.onclick=()=>{
 if(!selected || selected.tagName!=='rect') return;
 selected.setAttribute('x',xInput.value);
 selected.setAttribute('y',yInput.value);
 selected.setAttribute('width',wInput.value);
 selected.setAttribute('height',hInput.value);
};

deleteTool.onclick=()=>{
 if(selected){selected.remove();selected=null;}
};
