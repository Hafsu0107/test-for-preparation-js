function check() {
  let inputElement = document.querySelector("input");
  console.log(inputElement);

  let inputValue = inputElement.value;
  console.log(inputValue);

  let headingElement = document.querySelector("h1 > span");
  console.log(headingElement);

  document.querySelector("h1").innerHTML = inputValue;
}
