
const btn=document.getElementById("btn")
const inp=document.getElementById("inp")
const demo=document.getElementById("demo")
const order=document.getElementById("order")
const btn2=document.getElementById("btn-2")
let arr=[]

btn.addEventListener("click",()=>{
   
    arr.push(inp.value)
    order.innerHTML=arr.map(item=>`<li>${item}</li>`)
   
   
})
btn2.addEventListener("click",()=>{

arr.pop()
order.innerHTML=arr.map(item=>`<li>${item}</li>`)

// if()
})







