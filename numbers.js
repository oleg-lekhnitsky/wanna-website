const numbers = document.querySelectorAll('.number');

const options = {
threshold: 0.5 // trigger when the element is 50% in view
};

const observer = new IntersectionObserver((entries, observer) => {
entries.forEach(entry => {
    if (entry.isIntersecting) {
    startCounting(entry.target);
    observer.unobserve(entry.target); // stop observing once counted
    }
});
}, options);

numbers.forEach(number => {
observer.observe(number);
});

function startCounting(number) {
    const finalValue = parseInt(number.dataset.number);
    const duration = 2000; // duration of counting animation in milliseconds
    const step = Math.abs(finalValue - 0) / duration * 10; // calculate step based on duration
    
    let startValue = 0;
    let currentValue = startValue;
    let interval = setInterval(updateValue, 10); // update value every 10 milliseconds

    function updateValue() {
        if (currentValue < finalValue) {
        currentValue += step;
        number.innerText = Math.floor(currentValue);
        } else {
        number.innerText = finalValue;
        clearInterval(interval); // stop the counting animation
        }
    }
    }