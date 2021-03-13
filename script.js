// Query Selectors
const inputs = document.querySelectorAll('.controls input');
const valueOutputs = document.querySelectorAll('#value-output');
const box = document.querySelector('.box');
const xOffset = document.querySelector('#x-offset');
const yOffset = document.querySelector('#y-offset');
const blur = document.querySelector('#blur');
const spread = document.querySelector('#spread');
const opacity = document.querySelector('#opacity');
const shadowColor = document.querySelector('#shadow-color');
const playground = document.querySelector('.playground');
const codeOutput = document.querySelector('.code-output');
const boxColor = document.querySelector('#box-color');
const backgroundColor = document.querySelector("#background-color");
const xOffsetValueOutput = document.querySelector("#xOffset-value-output");
const yOffsetValueOutput = document.querySelector("#yOffset-value-output");
const blurValueOutput = document.querySelector("#blur-value-output");
const spreadValueOutput = document.querySelector("#spread-value-output");
const opacityValueOutput = document.querySelector("#opacity-value-output");
const shadowColorValueOutput = document.querySelector("#shadow-color-value-output");
const backgroundColorValueOutput = document.querySelector("#background-color-value-output");
const boxColorValueOutput = document.querySelector("#box-color-value-output");
const resetBtn = document.querySelector(".reset-btn");

// Input Event Listeners
inputs.forEach(input => input.addEventListener('change', updateBoxShadow));
inputs.forEach(input => input.addEventListener('mousemove', updateBoxShadow));

boxColor.addEventListener('change', updateBoxColor);
backgroundColor.addEventListener('change', updatePlaygroundColor);

// Output Event Listeners
xOffset.addEventListener('change', xOffsetValueUpdate);
xOffset.addEventListener('mousemove', xOffsetValueUpdate);

yOffset.addEventListener('change', yOffsetValueUpdate);
yOffset.addEventListener('mousemove', yOffsetValueUpdate);

blur.addEventListener('change', blurValueUpdate);
blur.addEventListener('mousemove', blurValueUpdate);

spread.addEventListener('change', spreadValueUpdate);
spread.addEventListener('mousemove', spreadValueUpdate);

opacity.addEventListener('change', opacityValueUpdate);
opacity.addEventListener('mousemove', opacityValueUpdate);

shadowColor.addEventListener('change', shadowColorValueUpdate);
shadowColor.addEventListener('mousemove', shadowColorValueUpdate);

backgroundColor.addEventListener('change', backgroundColorValueUpdate);
backgroundColor.addEventListener('mousemove', backgroundColorValueUpdate);
backgroundColor.addEventListener('load', backgroundColorValueUpdate);

boxColor.addEventListener('change', boxColorValueUpdate);
boxColor.addEventListener('mousemove', boxColorValueUpdate);

resetBtn.addEventListener('click', resetValues);

// Update Functions

function resetValues() {
  console.log("working");
  box.style.boxShadow = '0px 0px 0px rgba(0, 0, 0, 1)';

  box.style.background = "#d3d3d3";
  boxColor.value = "#d3d3d3";
  boxColorValueOutput.innerText = "#d3d3d3";

  playground.style.background = "#ffffff";
  backgroundColorValueOutput.innerText = "#ffffff";
  backgroundColor.value = "#ffffff";

  shadowColor.value = "#000000";
  shadowColorValueOutput.innerText = "#000000";

  xOffset.value = '0px';
  xOffsetValueOutput.innerText = '0';

  yOffset.value = '0px';
  yOffsetValueOutput.innerText = '0';

  blur.value = '0';
  blurValueOutput.innerText = '0';

  spread.value = '0';
  spreadValueOutput.innerText = '0';

  opacity.value = 1;
  opacityValueOutput.innerText = '1';

  codeOutput.innerText = "box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 1)";
}

function xOffsetValueUpdate() {
  xOffsetValueOutput.innerText = `${this.value}`;
}

function yOffsetValueUpdate() {
  yOffsetValueOutput.innerText = `${this.value}`;
}

function blurValueUpdate() {
  blurValueOutput.innerText = `${this.value}`;
}

function spreadValueUpdate() {
  spreadValueOutput.innerText = `${this.value}`;
}

function opacityValueUpdate() {
  opacityValueOutput.innerText = `${this.value}`;
}

function shadowColorValueUpdate() {
  shadowColorValueOutput.innerText = `${this.value}`;
}

function backgroundColorValueUpdate() {
  backgroundColorValueOutput.innerText = `${this.value}`;
}

function boxColorValueUpdate() {
  boxColorValueOutput.innerText = `${this.value}`;
}

function updateBoxShadow() {
  const boxShadow = `${xOffset.value}px ${yOffset.value}px ${blur.value}px ${spread.value}px rgba(${hexToRGB(shadowColor.value).join(", ")}, ${opacity.value})`;
  box.style.boxShadow = boxShadow;
  codeOutput.innerText = `box-shadow: ${boxShadow}`;
};

function updateBoxColor() {
  const newColor = this.value;
  box.style.background = newColor;
}

function updatePlaygroundColor() {
  const newColor = this.value;
  playground.style.background = newColor;
}

// Hex function
function hexToRGB(h) {
  let r = 0;
  let g = 0;
  let b = 0;

  // 3 digits
  if (h.length == 4) {
    r = "0x" + h[1] + h[1];
    g = "0x" + h[2] + h[2];
    b = "0x" + h[3] + h[3];
  }

  // 6 digits
  else if (h.length == 7) {
    r = "0x" + h[1] + h[2];
    g = "0x" + h[3] + h[4];
    b = "0x" + h[5] + h[6];
  }
  return [+r, +g, +b];
};
