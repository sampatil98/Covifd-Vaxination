let tbody=document.getElementById("tbody");
let filtervaccine=document.getElementById("Vaccinefilter");
let filterage=document.getElementById("Agefilter");
let filterpriority=document.getElementById("Priorityfilter");
let count=0;
let userdata=JSON.parse(localStorage.getItem("completed_list"));

fetchdata(userdata);
let vaccinatedData=[];
let completevaccination=[];

function fetchdata(userdata){
    count=0;
    tbody.innerHTML=null;
    
    userdata.forEach((element,index) => {
        count++;
        
        let tr=document.createElement("tr")
        let td1=document.createElement("td");
        td1.innerText=count;
        let td2=document.createElement("td");
        td2.innerText=element.name;
        let td3=document.createElement("td");
        td3.innerText=element.number;
        let td4=document.createElement("td");
        td4.innerText=element.age;
        let td5=document.createElement("td");
        td5.innerText=element.designation;
        let td6=document.createElement("td");
        td6.innerText=element.vaccine;
        let td7=document.createElement("td");
        td7.innerText=element.priority;
        
       
        tr.append(td1,td2,td3,td4,td5,td6,td7);
        tbody.append(tr);
        
        
    });
    
}
filtervaccine.addEventListener("change",()=>{
    if(filtervaccine.value==="Vaccine"){
        fetchdata(userdata);
    }else{
        let filterdata1=userdata.filter((element)=>{
        
        if(element.vaccine==filtervaccine.value){
            return true
        }
    })
    fetchdata(filterdata1);
    }
});
filterage.addEventListener("change",()=>{
    
    
    if(filterage.value==="High"){
        userdata.sort((a,b)=>{
            return b.age - a.age;
        });
        fetchdata(userdata);
    }else if(filterage.value==="Low"){
        userdata.sort((a,b)=>{
            return a.age - b.age
        });
        fetchdata(userdata);
    }else{
        fetchdata(userdata);
    }
});
filterpriority.addEventListener("change",()=>{
    if(filterpriority.value==="Priority"){
        fetchdata(userdata);
    }else{
        let filterdata2=userdata.filter((element)=>{
        if(element.priority==filterpriority.value){
            return true
        }
    })
    fetchdata(filterdata2);
    }
});