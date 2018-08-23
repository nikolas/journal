var savedValue = 25;

function handleRangeInput() {
    var input = this.event.target;
    var step = new Number(input.step);
    var newVal = new Number(input.value);
    var oldVal = savedValue;
    if (oldVal) {
        input.value = (newVal > oldVal) ?
            oldVal + step : oldVal - step;
    }

    savedValue = new Number(input.value);
}