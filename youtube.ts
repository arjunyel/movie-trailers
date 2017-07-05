const click = (e: Event) => {
    const clicked = e.target as MovieCard;
    if (clicked.youtube) { // If the event target has a youtube property
        const embed = document.getElementById("embed") as HTMLIFrameElement | null;
        if (embed) { // Check if iframe exits
            embed.textContent = ""; // Clear out iframe
            const srcUrl = "http://www.youtube.com/embed/" + clicked.youtube + "?autoplay=1&html5=1";
            embed.frameBorder = "0";
            embed.src = srcUrl; // Add the youtube src to the iframe
        }
        const modal = document.getElementById("modal") as HTMLDialogElement;
        if (modal) {
            modal.showModal(); // Use the modal feature of the <dialog> tag
        }
    }
};

const closeModal = (e: Event) => {
    // When closing the modal, destory the iframe and create a new one
    const target = e.target as HTMLDialogElement;
    target.innerHTML = "";
    const iframe = document.createElement("iframe");
    iframe.id = "embed";
    target.appendChild(iframe);
};

const container = document.querySelector(".container") as HTMLDivElement | null;
if (container) {
    container.addEventListener("click", click, false);
}

const modal = document.getElementById("modal") as HTMLDialogElement | null;
if (modal) {
    modal.addEventListener("cancel", closeModal, false);
}
