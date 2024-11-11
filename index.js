const buttonEl = document.getElementById("btn");
const resultEl = document.getElementById("result");
const dateEl = document.getElementById("date");

function calculateAge(){
    const dateValue = dateEl.value;
    if(dateValue === ""){
        alert("Please enter your birthday");
    }else{
        const age = getAge(dateValue);
        resultEl.innerText = `Your are ${age} ${age > 1 ? "years" : "year"} old`;
    }

}

function getAge(dateValue){
    const currentDate = new Date();
    const birthDate = new Date(dateValue);
    let age = currentDate.getFullYear() - birthDate.getFullYear();
    const month = currentDate.getMonth() - birthDate.getMonth();
    
    if(month<0 || (month === 0 && currentDate.getDate() < birthDate.getDate())){
        age--;
    }

    return(age);
}

buttonEl.addEventListener("click", calculateAge);