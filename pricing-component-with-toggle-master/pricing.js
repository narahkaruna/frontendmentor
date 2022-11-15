const toggleSwitch = document.querySelector("#toggle__switch");

function togglePlan(){
    const slider = document.querySelector('#toggle__slider');
    const monthlyPlan = document.querySelectorAll('.card__plan-monthly');
    const yearlyPlan = document.querySelectorAll('.card__plan-yearly');
    if(slider.classList.contains('active')){
        slider.classList.remove('active');
        monthlyPlan.forEach(month => month.style.display = 'none');
        yearlyPlan.forEach(year => year.style.display = 'block');
    }
    else {
        slider.classList.add('active');
        monthlyPlan.forEach(month => month.style.display = 'block');
        yearlyPlan.forEach(year => year.style.display = 'none');
    }   
}

toggleSwitch.addEventListener("click", togglePlan);


