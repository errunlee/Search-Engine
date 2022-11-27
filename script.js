let val='';
let titles=document.querySelectorAll('.title')
let match;


let search=()=>{
  val=input.value;
  titles.forEach((elem)=>{
     if(val===''){
       elem.parentElement.parentElement.style.display='initial'
     }
     match=elem.textContent.toLowerCase().includes(val.toLowerCase()) 
     elem.parentElement.parentElement.style.display='none'
    if(match){
       elem.parentElement.parentElement.style.display='initial'
    }
  })
  
}
input.addEventListener('keyup',()=>{
  search();
})

let js=0;
let container=document.querySelector('.container')
container.addEventListener('scroll',()=>{
   js=container.scrollTop;
  if(js<5){
    container.classList.add('top')
    container.classList.remove('notop')
  }
  else{
  container.classList.add('notop')
  container.classList.remove('top')
  }
})
