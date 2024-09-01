/**
 * Throttle Function
 * 
 * Throttling is a technique used to limit the rate at which a function is called. Throttling transforms a function such that it can only be called once in a specific interval of time.
 * 
 * Usage: Let's say you have to send request to the backend but the user has clicked so many times on the button that there are now too many requests. So to handle this scenario we use throttling to overcome the excess API calls.
 * Only the last clicked API call will be sent to the backend.
 */

function throttleFunc(callbackFunc, interval) {
    // Implementation of throttle function
    let timer;
    let isThrottle = true;
    return function () {
        const context = this;
        const args = arguments;
        if (isThrottle) {
            isThrottle = false;
            callbackFunc.apply(context, args);
            timer = setTimeout(() => {
                isThrottle = true;
            }, interval);
        }
    }
}

// Example usage

const handleClick = () => {
    console.log('Clicked!');
};

const throttle = throttleFunc(handleClick(), 2000);

throttle();
throttle();
setTimeout(() => {
    console.log('clickyclicky :>> ');
}, 3000);

// Clicking the button will log 'Clicked!' only once every 2 seconds