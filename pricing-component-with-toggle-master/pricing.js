function togglePlan(){
    const slider = document.querySelector('#toggle-slider');
    const monthlyPlan = document.querySelectorAll('.card__plan-monthly');
    const annualPlan = document.querySelectorAll('.card__plan-annually');
    console.log(slider);
    for(let i = 0; i < monthlyPlan.length; i++){
        if (slider.classList.contains('active')) {
            slider.classList.remove('active');
            monthlyPlan[i].style.display = 'none';
            annualPlan[i].style.display = 'block';
        }
        else {
            slider.classList.add('active');
            monthlyPlan[i].style.display = 'block';
            annualPlan[i].style.display = 'none';
        }
    }
}
togglePlan();
