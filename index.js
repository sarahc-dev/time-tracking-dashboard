const buttons = document.querySelectorAll(".frequency button");

buttons.forEach((button) => {
    button.addEventListener("click", updateReport);
})

function updateReport(e) {

    document.querySelector(".frequency button[aria-selected='true']").setAttribute("aria-selected", false);
    e.target.setAttribute("aria-selected", true);

    const chosenFrequency = (e.target.innerHTML).toLowerCase();
    
    fetch('data.json')
    .then((res) => res.json())
    .then((json) => {
        json.forEach((item) => {
            let reportElement = item.title.toLowerCase();
            if (reportElement === "self care") {
                reportElement = "self-care";
            }

            const hours = document.querySelector("." + reportElement + " .hours");
            const previous = document.querySelector("." + reportElement + " .previous");

            if (chosenFrequency === "daily") {
                hours.classList.add("animation");
                previous.classList.add("animation");
                setTimeout(function() {
                    hours.innerHTML = item.timeframes.daily.current + "hrs";
                    previous.innerHTML = "Yesterday - " + item.timeframes.daily.previous + "hrs";
                    hours.classList.remove("animation");
                    previous.classList.remove("animation");
                }, 500);
                
            } else if (chosenFrequency === "weekly") {
                hours.classList.add("animation");
                previous.classList.add("animation");
                setTimeout(function() {
                    hours.innerHTML = item.timeframes.weekly.current + "hrs";
                    previous.innerHTML = "Last week - " + item.timeframes.weekly.previous + "hrs";
                    hours.classList.remove("animation");
                    previous.classList.remove("animation");
                }, 500);
                
            } else if (chosenFrequency === "monthly") {
                hours.classList.add("animation");
                previous.classList.add("animation");
                setTimeout(function() {
                    hours.innerHTML = item.timeframes.monthly.current + "hrs";
                    previous.innerHTML = "Last month - " + item.timeframes.monthly.previous + "hrs";
                    hours.classList.remove("animation");
                    previous.classList.remove("animation");
                }, 500);
            }
        })
    })
}

