/**
 * Declare a function named `calculatorModule`
 * this function will have two private variables declared inside of it.
 * @variable PRIVATE { Number } `memory`
 * @variable PRIVATE { Number } `total`
 * @return {object} `calculator` object that can be used
 */
function calculatorModule() {
    var memory = 0;
    var total;

    var calculator = {
      load: validate(load),
      getTotal: getTotal,
      add: validate(add),
      subtract: validate(subtract),
      multiply: validate(multiply),
      divide: validate(divide),
      recall: recall,
      save: save,
      clear: clear
    };

    return calculator;

  /**
   * sets the `total` to the number passed in
   * @param  { Number } x
   * @return { Number }    current total
   */
  function load(x) {
    total = x;

    return total;
  }

  function validate(calcMethod) {
    return function(value) {
      if (typeof value != typeof 0) {
        return "error";
      } else {
        return calcMethod(value);
      }
    };
  }

  /**
   * Return the value of `total`
   * @return { Number }
   */
  function getTotal() {
    return total;
  }

  /**
   * Sums the value passed in with `total`
   * @param { Number } x
   */
  function add(sum) {

    return total += sum;
  }

  /**
   * Subtracts the value passed in from `total`
   * @param  { Number } x
   */
  function subtract(minus) {

    return total -= minus;
  }

  /**
   * Multiplies the value by `total`
   * @param  { Number } x
   */
  function multiply(product) {

    return total *= product;
  }

  /**
   * Divides the value passing in by `total`
   * @param  { Number } x
   */
  function divide(quotient) {

    return total /= quotient;
  }

  /**
   * Stores the value of `total` to `memory`
   */
  function save() {
    memory = total;
    return memory;
  }

  /**
   * Return the value stored at `memory`
   * @return { Number }
   */
  function recall() {
    return memory;
  }

  /**
   * Clear the value stored at `memory`
   */
  function clear() {
    memory = 0;
  }

}