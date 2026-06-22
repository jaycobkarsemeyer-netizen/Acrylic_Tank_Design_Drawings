const svg=document.getElementById('canvas');
let selected=null;

function makeSelectable(el){
  el.addEventListener('click',(e)=>{
    e.stopPropagation();
    if(selected) selected.setAttribute('stroke-width',2);
    selected=el;
    selected.setAttribute('stroke-width',4);
  });
}

document.getElementById('rectBtn').onclick=()=>{
 let r=document.createElementNS('http://www.w3.org/2000/svg','rect');
 r.setAttribute('x',100);r.setAttribute('y',100);
 r.setAttribute('width',200);r.setAttribute('height',100);
 r.setAttribute('rx',15);
 r.setAttribute('fill','none');r.setAttribute('stroke','black');
 r.setAttribute('stroke-width',2);
 makeSelectable(r);svg.appendChild(r);
};

document.getElementById('circleBtn').onclick=()=>{
 let c=document.createElementNS('http://www.w3.org/2000/svg','circle');
 c.setAttribute('cx',300);c.setAttribute('cy',300);
 c.setAttribute('r',50);
 c.setAttribute('fill','none');c.setAttribute('stroke','blue');
 c.setAttribute('stroke-width',2);
 makeSelectable(c);svg.appendChild(c);
};

document.getElementById('deleteBtn').onclick=()=>{
 if(selected){selected.remove();selected=null;}
};

document.getElementById('saveBtn').onclick=()=>{
 const blob=new Blob([svg.outerHTML],{type:'image/svg+xml'});
 const a=document.createElement('a');
 a.href=URL.createObjectURL(blob);
 a.download='design.svg';
 a.click();
};