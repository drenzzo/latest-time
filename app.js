function clearAll() {
    document.querySelector("#timeInput").value = "";
    document.querySelector("#result").innerText = "";
    document.querySelector("#error").innerText = "";
}

function evaluateTime() {
    try {
        const timeInput = document.querySelector("#timeInput").value;
        const result = replaceQuestionMarks(timeInput);
        document.querySelector("#result").innerText = result;
        document.querySelector("#error").innerText = "";
    } catch(error) {
        document.querySelector("#error").innerText = error.message;
    }
}

function replaceQuestionMarks(time) {
    if (time.length !== 5 || time[2] !== ':') {
        throw new Error('Invalid format');
    }

    let [hours, minutes] = time.split(':');

    if (hours[0] === '?') {
        hours = (hours[1] <= '2' ? '1' : '0') + hours[1];
    } else if (hours[0] > '1') {
        throw new Error('Invalid format');
    }

    if (hours[1] === '?') {
        hours = hours[0] + (hours[0] === '1' ? '2' : '9');
    }

    if (hours[0] === '1' && hours[1] > '2') {
        hours = '0' + hours[1];
    }

    if (minutes[0] === '?') {
        minutes = '5' + minutes[1];
    }

    if (minutes[1] === '?') {
        minutes = minutes[0] + '9';
    }

    return hours + ':' + minutes;
}