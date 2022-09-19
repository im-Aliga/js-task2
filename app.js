var infovalue = document.getElementById('inp');
var textInfo =document.getElementById('t')
function Mode(){
    if(document.body.style.backgroundColor=='white'){
        document.body.style.backgroundColor='black'
        textInfo.style.color='white'
        
    }
   else if(document.body.style.backgroundColor='black') {
        document.body.style.backgroundColor='white'
        textInfo.style.color='black'
    }
  
}
function Info(){
    var result = infovalue.value.slice(-3,-2)
    if(result==3)
    {   
        textInfo.innerHTML=`<span style='color:yellow'>${infovalue.value}</span>:Siz seher qrupusuz`
       
    }
    else if(result==4)
    {  
        textInfo.innerHTML=`<span style='color:red'>${infovalue.value}</span>:Siz gunorta qrupusuz`
    }
    else if(result==5)
    {
        textInfo.innerHTML=`<span style='color:black'>${infovalue.value}</span>:Siz axwam qrupusuz`
    }
    else(
        textInfo.innerHTML="Bele qrup movcud deyl zehmet olmasa yoxlayin"
    )
   
}