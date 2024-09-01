/**
 * Debounce Function
 -> Concept: 
 */

function debounce(fn, delay) {
  let debounceTimer;
  return function () {
    const context = this;
    const args = arguments;

    clearTimeout(debounceTimer);

    debounceTimer = setTimeout(() => {
      fn.apply(context, args);
    }, delay);

    // Return the debounced function
    // and the clear function to remove the timer
    return () => clearTimeout(debounceTimer);
  };
  // Clear debounce timer when the component is unmounted
  // This prevents the timer from remaining in memory
  // even after the component is removed from the DOM
}

function debounceTime(fn, delay){
    let timer;
    return function(...args){
        clearTimeout(timer);
        timer = setTimeout(() => {
            fn.apply(this, args);
        }, delay);
    }
}

const exampleFunc = () => {
    console.log('Debounced function called');
}

debounce(exampleFunc(), 5000);

// Example usage:
// const handleSearch = debounce(search, 500);
// input.addEventListener('input', handleSearch);
// // Clear the debounce timer when the component is unmounted
// return () => input.removeEventListener('input', handleSearch);
