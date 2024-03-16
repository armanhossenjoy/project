//background

const gd=document.getElementById('good');
const bg=document.getElementById('bg');
const cl=document.getElementById('cl')

let nu= 0;
let gv=setInterval(nm,20)
let gi=-100;
let go=setInterval(nv,20);
function nm(){
    nu++
    if( nu> 99){
        clearInterval(gv)
        gd.style.opacity='0'
        gd.style.display='none'
        cl.style.display='flex'
       
    }
    
    gd.innerText=nu+"%  Please Wait"
    
}

function nv(){
    gi++
    if(gi>-1){
        clearInterval(go)

    }
    let gm= gi*-1
    bg.style.filter='blur('+gm+'px)'

}

//backgroundend
//clock


const t1=document.getElementById('t1')
const t2=document.getElementById('t2')
const t3=document.getElementById('t3')

var d=new Date()
let d1=d.getHours()
let d2=d.getMinutes()
let d3=d.getSeconds()

let timer=setInterval(time,1000);

function time(){
    d3++
    if(d3==60){
        d3="1"
        d2++
    }
    if(d2==60){
        d2="1"
        d1++
    }
    if(d1==24){
        d1="0"
    }
    
    t1.innerText=d1
    t2.innerText=d2
    t3.innerText=d3
 
}

//clock end


