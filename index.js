let ctx;
let mockup;

const W = 341;
const H = 250;

const drawMockup = () => {
    ctx.drawImage(
        mockup,
        0, 0, W, H);
};

const handleFileChange = e => {
    e.stopPropagation();
    e.preventDefault();

    const files = e.target.files;
    if (!files.length) return;

    ctx.clearRect(0, 0, W, H);
    const img = new Image();
    img.addEventListener("load", () => {
        ctx.drawImage(img, 5, 5, 240, 135);
        drawMockup();
    });
    img.src = URL.createObjectURL(files[0]);
};

document.addEventListener("DOMContentLoaded", () => {
    const canvas = document.getElementById("c");
    ctx = canvas.getContext("2d");
    mockup = document.getElementById("img-mockup");

    mockup.addEventListener("load", drawMockup);

    const inputBanner = document.getElementById("input-banner");

    canvas.addEventListener("click", () => inputBanner.click());

    inputBanner.addEventListener("change", handleFileChange, false);
});
