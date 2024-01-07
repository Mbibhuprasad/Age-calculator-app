let inputDate=document.getElementById("input-date");
let inputMonth=document.getElementById("input-month");
let inputYear=document.getElementById("input-year");
let showDate=document.getElementById("show-day");
let showmonth=document.getElementById("show-month");
let showyear=document.getElementById("show-year");
let submit=document.getElementById("submit");
let errorlabel=document.getElementsByTagName("label");
let inputerror=document.getElementsByTagName("input");
let sujjest=document.getElementsByClassName("sujjest");
let errorDate=document.getElementById("errordate");
let errorMonth=document.getElementById("errormonth");
let errorYear=document.getElementById("erroryear");

for(let i=0;i<4;i++){
    let d=new Date();
    let years=d.getFullYear();
    let months= 1 + d.getMonth();
    let days=d.getDate();
    let montharr=[31,28,31,30,31,30,31,31,30,31,30,31];
     
    function error(){
        errorlabel[i].style.color="hsl(0, 100%, 67%)";
        inputerror[i].style.borderColor="hsl(0, 100%, 67%)";
    }

    submit.addEventListener('click',(e)=>{
        if(inputerror[i].value==""){
            error();
            sujjest[i].innerHTML="This field is required";
            if(inputDate.value > 31 || inputDate.value < 0){
                errorDate.innerHTML="Must be a valid day";
                error();
            }

            if(inputMonth.value > 12 || inputMonth.value < 0){
                errorMonth.innerHTML="Must be a valid month";
                error();
            }

            if(inputYear.value > years){
                errorYear.innerHTML="Must be a valid year";
                error();
            }
        }
        else{
            if(inputDate.value>days){
                days=days+montharr[months-1];
                months=months-1;
            }
            if(inputMonth.value>months){
                months=months+12;
                years=years-1;
            }

            showyear.innerHTML=years - inputYear.value;
            showmonth.innerHTML=months - inputMonth.value;
            showDate.innerHTML=days - inputDate.value;
        }
        inputerror[i].addEventListener('click',(e)=>{
            inputerror[i].style.borderColor="hsl(0, 0%, 86%)";
            errorlabel[i].style.color="hsl(0, 0%, 8%)";
            sujjest[i].style.display="none";
        })
    })
}

