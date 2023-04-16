const rates = document.querySelectorAll('a');
const submitBtn = document.querySelector('#submitBtn');
const ratesArray = [...rates];
const outOfFive = document.querySelector('.outOfFive');
const afterRate = document.querySelector('.afterRate');
const beforeRate = document.querySelector('.beforeRate');
let rateVal;
ratesArray.forEach(rate => {
  rate.addEventListener('click', () => {
    ratesArray.forEach(rate => {
      rate.classList.remove('selected');
    });
    rate.classList.add('selected');
    rateVal = rate.innerHTML;
    console.log(rateVal);
  });
});
submitBtn.addEventListener('click', e => {
  e.preventDefault();
  if (rateVal) {
    outOfFive.innerHTML = `You selected ${rateVal} out of 5`;
    afterRate.style.display = 'block';
    beforeRate.style.display = 'none';
  }
});
