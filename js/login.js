

document.getElementById("subBtn").addEventListener('click',()=>{
    if (soulValidation()) {
        location.pathname = '/home.html'
    }
})
function soulValidation(){
    const regex = /^111$/
    const inputSoul = document.querySelector('input')
    if(regex.test(inputSoul.value)) {
        return true
    }else {
        inputSoul.classList.add('is-invalid')
        return false
    }
}
console.log(location.pathname);