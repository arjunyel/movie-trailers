"use strict";
const click = (e) => {
    const youtube = e.target;
    if (youtube.youtube) {
        const embed = document.getElementById("embed");
        if (embed) {
            embed.textContent = ""; // Clear out iframe
            const srcUrl = "http://www.youtube.com/embed/" + youtube + "?autoplay=1&html5=1";
            embed.frameBorder = "0";
            embed.src = srcUrl; // Add the youtube src to the iframe
        }
        const modal = document.getElementById("modal");
        if (modal) {
            modal.showModal(); // Use the modal feature of the <dialog> tag
        }
    }
};
const closeModal = (e) => {
    // When closing the modal, destory the iframe and create a new one
    const target = e.target;
    target.innerHTML = "";
    const iframe = document.createElement("iframe");
    iframe.id = "embed";
    target.appendChild(iframe);
};
const container = document.querySelector(".container");
if (container) {
    container.addEventListener("click", click, false);
}
const modal = document.getElementById("modal");
if (modal) {
    modal.addEventListener("cancel", closeModal, false);
}
