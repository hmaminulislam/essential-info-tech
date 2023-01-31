let imageUrl = null;

const drag = (event) => {
    imageUrl = event.target.src;
}

const drop = (event) => {
    let img = document.createElement("img")
    img.src = imageUrl;
    document.querySelector(".drag-box").innerHTML= "";
    document.querySelector(".drag-box").appendChild(img);
    document.querySelector(".drag-box").classList.add("drag-box-border");
}

const dragOver = (event) => {
    event.preventDefault()
}