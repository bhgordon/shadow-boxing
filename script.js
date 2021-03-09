// Query Selectors
const inputs = document.querySelectorAll('.controls input');
const valueOutputs = document.querySelectorAll('#value-output');
const box = document.querySelector('.box');
const hOffset = document.querySelector('#h-offset');
const vOffset = document.querySelector('#v-offset');
const blur = document.querySelector('#blur');
const spread = document.querySelector('#spread');
const opacity = document.querySelector('#opacity');
const shadowColor = document.querySelector('#shadow-color');
const playground = document.querySelector('.playground');
const codeOutput = document.querySelector('.code-output');
const boxColor = document.querySelector('#box-color');
const backgroundColor = document.querySelector("#background-color");
const hOffsetValueOutput = document.querySelector("#hOffset-value-output");
const vOffsetValueOutput = document.querySelector("#vOffset-value-output");
const blurValueOutput = document.querySelector("#blur-value-output");
const spreadValueOutput = document.querySelector("#spread-value-output");
const opacityValueOutput = document.querySelector("#opacity-value-output");
const shadowColorValueOutput = document.querySelector("#shadow-color-value-output");
const backgroundColorValueOutput = document.querySelector("#background-color-value-output");
const boxColorValueOutput = document.querySelector("#box-color-value-output");

// Input Event Listeners
inputs.forEach(input => input.addEventListener('change', updateBoxShadow));
inputs.forEach(input => input.addEventListener('mousemove', updateBoxShadow));

boxColor.addEventListener('change', updateBoxColor);
backgroundColor.addEventListener('change', updatePlaygroundColor);

// Output Event Listeners
hOffset.addEventListener('change', hOffsetValueUpdate);
hOffset.addEventListener('mousemove', hOffsetValueUpdate);

vOffset.addEventListener('change', vOffsetValueUpdate);
vOffset.addEventListener('mousemove', vOffsetValueUpdate);

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

boxColor.addEventListener('change', boxColorValueUpdate);
boxColor.addEventListener('mousemove', boxColorValueUpdate);

// Update Functions
// Very frustrating because I can't seem to use string literals for the element
// that I want to target, so I need a new function for every fucking element! //

function hOffsetValueUpdate() {
  hOffsetValueOutput.innerText = `${this.value}`;
}

function vOffsetValueUpdate() {
  vOffsetValueOutput.innerText = `${this.value}`;
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
  const boxShadow = `${hOffset.value}px ${vOffset.value}px ${blur.value}px ${spread.value}px rgba(${hexToRGB(shadowColor.value).join(", ")}, ${opacity.value})`;
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
