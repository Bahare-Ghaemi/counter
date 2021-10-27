const buttons = document.querySelectorAll(".button_");
let counterValue = document.querySelector("#countNum");
let count = 0;

buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
        const classList = btn.classList;
        if (classList.contains("increament")) {
            count +=1;
        }
        else if(classList.contains("decreament"))
        {
            count -=1;
        }
        else{
            count = 0;
        }
        counterValue.textContent = count;
    });
});