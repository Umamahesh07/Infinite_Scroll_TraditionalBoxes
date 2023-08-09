document.addEventListener("DOMContentLoaded", function() {
    addBoxes(18);
});

function addBoxes(amount) {
    const content = document.getElementById("content");
    for (let i = 0; i < amount; i++) {
        const randomColor = '#' + ('00000' + (Math.random() * 0xFFFFFF << 0).toString(16)).slice(-6);
        const box = document.createElement("div");
        box.classList.add("box1");
        box.style.backgroundColor = randomColor;
        box.innerHTML = 'Box ' + (content.children.length + 1);
        content.appendChild(box);
    }
}
window.addEventListener("scroll", function() {
    if ((window.innerHeight + window.pageYOffset) >= (document.body.offsetHeight - 50) && !document.getElementById("loader").classList.contains("active")) {
        document.getElementById("loader").classList.add("active");
        setTimeout(() => {
            addBoxes(9);
            document.getElementById("loader").classList.remove("active");
        }, 1000);
    }
});
