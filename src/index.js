// ITERATION 1

function updateSubtotal(product) {
  console.log("Calculating subtotal, yey!");

  //Paso 1: Crear dos variables:

  const price = product.querySelector(".price span");
  const quantity = product.querySelector(".quantity input");

  // Paso 2: Extraer el precio y la cantidad:
  const priceValue = price.textContent; // price.innerHTML también sería valido
  const quantityValue = quantity.value;

  // Paso 3: Ahora función para calcular el subtotal, es decir multiplicar el precio por la cantidad:
  const subtotalPrice = priceValue * quantityValue;
  // Paso 4: Obtener el elemento donde se mostrará el subtotal, el que contenga la clase "subtotal":
  const subtotalElement = product.querySelector(".subtotal span"); // Había puesto document.querySelector y entonces solo me cambiaba el subtotal del primer producto. Con el product me aseguro de que cada producto tenga un subtotal.
  // Paso 5: Establecer el precio subtotal en el elemento del DOM:
  subtotalElement.textContent = subtotalPrice;
  // Devolver el valor del subtotal:
  return subtotalPrice;
}

/*  Extrayendo el precio del elemento span
const priceValue = parseFloat(price.textContent);

Extrayendo la cantidad del elemento input
const quantityValue = parseInt(quantity.value);
 */

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  /* const singleProduct = document.querySelector(".product");
  updateSubtotal(singleProduct); */
  // end of test

  // ITERATION 2
  // Obtener todos los nodos tr con la clase product
  const productRows = document.getElementsByClassName("product");
  let total = 0;
  // Iterar sobre cada nodo tr.product y llamar a updateSubtotal() para cada uno
  for (let i = 0; i < productRows.length; i++) {
    total += updateSubtotal(productRows[i]);
  }

  /* Si quisiera hacerlo con un forEach:
    Array.from(productRows).forEach(function(productRow) {
    total += updateSubtotal(productRow);
    });
 */

  // ITERATION 3 --> CALCULAR EL TOTAL DE LA COMPRA
  // Obtener el elemento del DOM para el total
  const totalElement = document.querySelector("#total-value");

  // Actualizar el contenido del elemento del DOM para mostrar el total
  totalElement.textContent = total;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log("The target in remove is:", target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener("load", () => {
  const calculatePricesBtn = document.getElementById("calculate");
  calculatePricesBtn.addEventListener("click", calculateAll);

  //... your code goes here
});
