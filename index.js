let getValue = document.getElementById("number1");
let getValue2 = document.getElementById("number2");
let getValue3 = document.getElementById("number3");
let getValue4 = document.getElementById("number4");
let getValue5 = document.getElementById("number5");
let getValue6 = document.getElementById("number6");
let getValue7 = document.getElementById("number7");
let getValue8 = document.getElementById("number8");
let getValue9 = document.getElementById("number9");
let getSignalD = document.getElementById("signalD");
let getSum = document.getElementById("sum");
let getSub = document.getElementById("sub");
let getDevice = document.getElementById("device");
let getDulple = document.getElementById("dulple");
let getValueMonitor = document.getElementById("input_monitor");
let getEqualId = document.getElementById("equalId");
let getCalc = document.getElementById("calc");

var lengthInput = 0;
getValueMonitor.innerHTML = getValueMonitor.title;
let texts = getValue.addEventListener("click", () => {
  if (getValueMonitor.textContent === "0") {
    getValueMonitor.innerHTML = "";
  }
  getValueMonitor.innerHTML = getValueMonitor.innerHTML.concat(getValue.title);

  lengthInput++;
});

getValue2.addEventListener("click", () => {
  if (getValueMonitor.textContent === "0") {
    getValueMonitor.innerHTML = "";
  }
  getValueMonitor.innerHTML = getValueMonitor.innerHTML.concat(getValue2.title);
  console.log(getValueMonitor.textContent);
  lengthInput++;
  console.log(lengthInput);
});

getValue3.addEventListener("click", () => {
  if (getValueMonitor.textContent === "0") {
    getValueMonitor.innerHTML = "";
  }
  getValueMonitor.innerHTML = getValueMonitor.innerHTML.concat(getValue3.title);
  console.log(getValueMonitor.textContent);
  lengthInput++;
  console.log(lengthInput);
});
getValue4.addEventListener("click", () => {
  if (getValueMonitor.textContent === "0") {
    getValueMonitor.innerHTML = "";
  }
  getValueMonitor.innerHTML = getValueMonitor.innerHTML.concat(getValue4.title);
  console.log(getValueMonitor.textContent);
  lengthInput++;
  console.log(lengthInput);
});
getValue5.addEventListener("click", () => {
  if (getValueMonitor.textContent === "0") {
    getValueMonitor.innerHTML = "";
  }
  getValueMonitor.innerHTML = getValueMonitor.innerHTML.concat(getValue5.title);
  console.log(getValueMonitor.textContent);
  lengthInput++;
  console.log(lengthInput);
});
getValue6.addEventListener("click", () => {
  if (getValueMonitor.textContent === "0") {
    getValueMonitor.innerHTML = "";
  }
  getValueMonitor.innerHTML = getValueMonitor.innerHTML.concat(getValue6.title);
  console.log(getValueMonitor.textContent);
  lengthInput++;
  console.log(lengthInput);
});
getValue7.addEventListener("click", () => {
  if (getValueMonitor.textContent === "0") {
    getValueMonitor.innerHTML = "";
  }
  getValueMonitor.innerHTML = getValueMonitor.innerHTML.concat(getValue7.title);
  console.log(getValueMonitor.textContent);
  lengthInput++;
  console.log(lengthInput);
});
getValue8.addEventListener("click", () => {
  if (getValueMonitor.textContent === "0") {
    getValueMonitor.innerHTML = "";
  }
  getValueMonitor.innerHTML = getValueMonitor.innerHTML.concat(getValue8.title);
  console.log(getValueMonitor.textContent);
  lengthInput++;
  console.log(lengthInput);
});
getValue9.addEventListener("click", () => {
  if (getValueMonitor.textContent === "0") {
    getValueMonitor.innerHTML = "";
  }
  getValueMonitor.innerHTML = getValueMonitor.innerHTML.concat(getValue9.title);
  console.log(getValueMonitor.textContent);
  lengthInput++;
  console.log(lengthInput);
});
getSignalD.addEventListener("click", () => {
  getValueMonitor.innerHTML = getValueMonitor.innerHTML.concat(
    " " + getSignalD.title + " "
  );
  console.log(getValueMonitor.textContent);
  lengthInput++;
  console.log(lengthInput);
});

getSum.addEventListener("click", () => {
  getValueMonitor.innerHTML = getValueMonitor.innerHTML.concat(
    " " + getSum.title + " "
  );
  lengthInput++;
});

getSub.addEventListener("click", () => {
  // let setValueMonitor = getValueMonitor.textContent;

  getValueMonitor.innerHTML = getValueMonitor.innerHTML.concat(
    " " + getSub.title + " "
  );
  console.log(getValueMonitor.textContent);
  lengthInput++;
  console.log(lengthInput);

  // if (setValueMonitor.includes("-")) {
  //   getValueMonitor.innerHTML = getValueMonitor;
  // }
});

getDevice.addEventListener("click", () => {
  getValueMonitor.innerHTML = getValueMonitor.innerHTML.concat(
    " " + getDevice.title + " "
  );
  console.log(getValueMonitor.textContent);
  lengthInput++;
  console.log(lengthInput);
});

getDulple.addEventListener("click", () => {
  getValueMonitor.innerHTML = getValueMonitor.innerHTML.concat(
    " " + getDulple.title + " "
  );
  console.log(getValueMonitor.textContent);
  lengthInput++;
  console.log(lengthInput);
});

getEqualId.addEventListener("click", () => {
  let setValueMonitor = getValueMonitor.textContent;
  let result;

  if (setValueMonitor.includes("%")) {
    let numberOne = parseFloat(
      setValueMonitor.substring(0, setValueMonitor.indexOf("%") - 1)
    );

    let numberTwo = parseFloat(
      setValueMonitor.substring(setValueMonitor.indexOf("%") + 2)
    );
    result = numberOne % numberTwo;
    getValueMonitor.innerHTML = result;
    console.log(result);
  }
  if (setValueMonitor.includes("/")) {
    let numberOne = parseFloat(
      setValueMonitor.substring(0, setValueMonitor.indexOf("/") - 1)
    );

    let numberTwo = parseFloat(
      setValueMonitor.substring(setValueMonitor.indexOf("/") + 2)
    );
    result = numberOne / numberTwo;
    getValueMonitor.innerHTML = result;
    console.log(result);
  }
  if (setValueMonitor.includes("+")) {
    let numberOne = parseFloat(
      setValueMonitor.substring(0, setValueMonitor.indexOf("+") - 1)
    );

    let numberTwo = parseFloat(
      setValueMonitor.substring(setValueMonitor.indexOf("+") + 2)
    );
    result = numberOne + numberTwo;
    getValueMonitor.innerHTML = result;
    console.log(result);
  }
  if (setValueMonitor.includes("-")) {
    let numberOne = parseFloat(
      setValueMonitor.substring(0, setValueMonitor.indexOf("-") - 1)
    );

    let numberTwo = parseFloat(
      setValueMonitor.substring(setValueMonitor.indexOf("-") + 2)
    );
    result = numberOne - numberTwo;
    getValueMonitor.innerHTML = result;
  }
  if (setValueMonitor.includes("*")) {
    let numberOne = parseFloat(
      setValueMonitor.substring(0, setValueMonitor.indexOf("*") - 1)
    );

    let numberTwo = parseFloat(
      setValueMonitor.substring(setValueMonitor.indexOf("*") + 2)
    );
    result = numberOne * numberTwo;
    getValueMonitor.innerHTML = result;
  }
});

getCalc.addEventListener("click", () => {
  getValueMonitor.innerHTML = "0";
});
