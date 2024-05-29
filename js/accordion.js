const accordion = () => {
    const btns = document.querySelectorAll(".questions__accordion-head");

    const blocks = document.querySelectorAll(".questions__accordion-info");

    btns.forEach((btn) => {
        btn.addEventListener("click", function () {
            if (!this.classList.contains("active")) {
                btns.forEach((btn) => {
                    btn.classList.remove("active", "active-style");
                });
                this.classList.add("active", "active-style");
            } else
                btns.forEach((btn) => {
                    btn.classList.remove("active", "active-style");
                });
        });
    });
};
accordion();