var el = document.querySelectorAll(".trolling2");
 
for (var i = 0; i < el.length; i++) {
    if (el[i].getAttribute("href").indexOf("built-in_heat_pump") > -1) {
        el[i].classList.add("other--class");
        break;
    }
}