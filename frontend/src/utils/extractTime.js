export function extractTime(dateString) {
    const data = new Date(dateString);
    const hours = padZero(data.getHours());
    const minutes = padZero(data.getMinutes());
    return `${hours}:${minutes}`;
}

// padding single-digit numbers with a leading zero
function padZero(number) {
    return number.toString().padStart(2, "0");
}