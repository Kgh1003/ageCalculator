const { DateTime } = luxon
const picker = datepicker(document.querySelector(".age-calculate"));

const button = document.getElementById("calculateBtn");
button.addEventListener("click", function (e) {
    e.preventDefault();
    const result = document.getElementById("result");
    const selected = picker.dateSelected;

    if (!selected) {
    result.innerText = "Please select a date";
    return;
    }

    const birthDate = DateTime.fromJSDate(selected);
    const now = DateTime.now();

    if (birthDate > now) {
    result.innerText = "Please enter a valid date";
    return;
    }

    const { years, months } = now.diff(birthDate, ["years", "months"]).toObject();
    result.innerText = `You are ${Math.floor(years)} years and ${Math.floor(months)} months old.`;
});