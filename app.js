const inputEl = document.querySelector("#lengthInput");
const infoEl = document.querySelector(".info");
const passContainers = document.querySelectorAll(".pw");
const copiedEl = document.querySelector(".copied");

const getRandomPassword = () => {
    let pass = "";
    let length = inputEl.value ? inputEl.value : 8;
    for (let i = 0; i < length; i++) {
        let randomIndex = Math.floor(Math.random() * (93 - 33 + 1)) + 33;
        pass += String.fromCharCode(randomIndex)
    }
    return pass;
}

document.querySelector(".generate-btn").addEventListener("click", e => {
    e.preventDefault();
    if (inputEl.value > 25) {
        infoEl.textContent = `Please keep the length below 25 characters.`
    } else {
        passContainers.forEach(el => {
            el.textContent = getRandomPassword();
            el.addEventListener("click", e => {
                e.preventDefault();
                navigator.clipboard.writeText(e.currentTarget.textContent)
                copiedEl.classList.add("tog")
                setTimeout(() => {
                    copiedEl.classList.remove("tog")
                }, 2000);
            })
        })
    }
})