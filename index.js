let imageUrl = null;

const drag = (event) => {
    imageUrl = event.target.src;
    document.querySelector(".drag-box").classList.add("drag-box-over");
}

const drop = (event) => {
    document.querySelector(".drag-box").classList.remove("drag-box-over");
    let img = document.createElement("img")
    img.src = imageUrl;
    document.querySelector(".drag-box").innerHTML= "";
    document.querySelector(".drag-box").appendChild(img);
    document.querySelector(".drag-box").classList.add("drag-box-border");
}

const dragOver = (event) => {
    event.preventDefault()
}

const dragEnd = () => {
    document.querySelector(".drag-box").classList.remove("drag-box-over");
}