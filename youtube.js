"use strict";
const click = (e) => {
    if (e.target.youtube) {
        console.log(e.target.youtube);
        const embed = document.getElementById("embed");
        if (embed) {
            embed.textContent = "";
            const srcUrl = "http://www.youtube.com/embed/" + e.target.youtube + "?autoplay=1&html5=1";
            embed.frameBorder = "0";
            embed.src = srcUrl;
        }
        const modal = document.getElementById("modal");
        if (modal) {
            modal.showModal();
        }
    }
};
const closeModal = (e) => {
    e.target.innerHTML = "";
    const iframe = document.createElement("iframe");
    iframe.id = "embed";
    e.target.appendChild(iframe);
};
document.querySelector(".container").addEventListener("click", click, false);
document.getElementById("modal").addEventListener("close", closeModal, false);
