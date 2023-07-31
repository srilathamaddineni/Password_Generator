const btnEl=document.querySelector(".btn");
const inputElement=document.getElementById("input");
const copyIconEl=document.querySelector(".fa-copy");
const alertContainerEl=document.querySelector(".alert-container");

btnEl.addEventListener("click",createPassword);
copyIconEl.addEventListener("click",()=>{
    passwordCopy();
    if(inputElement.value)
    {
        alertContainerEl.classList.remove("active");
        setTimeout(() => {
            alertContainerEl.classList.add("active");
        }, 2000);
    }
});
function createPassword(){
    const chars="0123456789abcdefghijklmnopqrstuvwxtz!@#$%^&*()_+?:{}[]ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const passwordLength=14;
    let password="";
    for (let index = 0; index < passwordLength; index++) {
        const randomNum=Math.floor(Math.random()*chars.length);
        password+=chars.substring(randomNum,randomNum+1);

        
    }
    inputElement.value=password;
}
function passwordCopy(){
    inputElement.select();

}