//
// This is only a SKELETON file for the 'Space Age' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const age = (planet, seconds) => {
  const secondsInEarthYears = seconds / 31557600;
  const whatPlanet = {
    mercury: 0.2408467,
    venus: 0.61519726,
    earth: 1,
    mars: 1.8808158,
    jupiter: 11.862615,
    saturn: 29.447498,
    uranus: 84.016846,
    neptune: 164.79132,
  };
  const result = secondsInEarthYears / whatPlanet[planet];
  return parseFloat(result.toFixed(2));
};

const select = document.getElementById("select-planet");
let selectValue = "mercury";
const secondsInput = document.getElementById("seconds-input");
const calcularButton = document.getElementById("calcular-button");
const limparButton = document.getElementById("limpar-button");
const resultado = document.getElementById("resultado");

select.addEventListener("change", function () {
  selectValue = select.value;
});

calcularButton.addEventListener("click", () => {
  const currentPlanet = selectValue;
  const currentSeconds = secondsInput.value;
  const finalResult = age(currentPlanet, currentSeconds);
  calcularButton.setAttribute("disabled", true);
  limparButton.removeAttribute("disabled");
  resultado.value = finalResult;
  console.log(finalResult);
  console.log(currentPlanet);
});

limparButton.addEventListener("click", () => {
  limparButton.setAttribute("disabled", true);
  calcularButton.removeAttribute("disabled");
  calcularButton.innerText = "Calcular";
  secondsInput.value = "";
  resultado.value = "";
});
