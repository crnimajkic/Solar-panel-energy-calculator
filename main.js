window.addEventListener("load", () => {
  const loader = document.querySelector(".loader");

  loader.classList.add("loader--hidden");

  loader.addEventListener("transitionend", () => {
    document.body.removeChild(loader);
  });
});

//5 hours x 290 watts x 0.75 = 1,087.5 daily watt-hours * broj panela
const calculate = () => {
  let numberOfPanels = document.querySelector('#numberOfPanels').value
  let numberOfWatsPerPanel = document.querySelector('#wats').value
  let numberOfHours = document.querySelector('#hours').value
  let resultWrapper = document.querySelector('.result-wrapper')

  if (numberOfHours > 24) {
    resultWrapper.innerHTML = `<p class = "warning"> Number of hours must be 24 or less!</p>`

  }else if(numberOfHours&&numberOfPanels&&numberOfWatsPerPanel){
    let result = (numberOfHours * numberOfWatsPerPanel * numberOfPanels * 0.75 / 1000).toFixed(2)

    resultWrapper.innerHTML = `<p>During one day with ${numberOfHours} sunny hours, using ${numberOfPanels} solar panels with ${numberOfWatsPerPanel} W of energy, you can make <br><span> ${result} kWh of power.</span></p>`

  }else{

    resultWrapper.innerHTML = `<p class = "warning"> You must fill all inputs corectly before you calculate!</p>`

  }


}




let calculatebtn = document.querySelector('.calculate')

calculatebtn.addEventListener('click', calculate)

