const click = (e: Event) => {
    if (e.target.youtube) { // If the event target has a youtube property
        const embed = document.getElementById("embed") as HTMLIFrameElement | null;
        if (embed) { // Check if iframe exits
            embed.textContent = ""; // Clear out iframe
            const srcUrl = "http://www.youtube.com/embed/" + e.target.youtube + "?autoplay=1&html5=1";
            embed.frameBorder = "0";
            embed.src = srcUrl; // Add the youtube src to the iframe
        }
        const modal = document.getElementById("modal");
        if (modal) {
            modal.showModal(); // Use the modal feature of the <dialog> tag
        }
    }
};

const closeModal = (e: Event) => {
    // When closing the modal, destory the iframe and create a new one
    e.target.innerHTML = "";
    const iframe = document.createElement("iframe");
    iframe.id = "embed";
    e.target.appendChild(iframe);
};

document.querySelector(".container").addEventListener("click", click, false);
document.getElementById("modal").addEventListener("close", closeModal, false);
