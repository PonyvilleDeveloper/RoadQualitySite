function closeDialog() {
    document.getElementById("product-photos").close()
    document.getElementById("product-photos").style.display = "none"
    document.body.style.overflowY = "scroll"
}

function openDialog() {
    document.getElementById("product-photos").showModal();
    document.getElementById("product-photos").style.display = "flex"
    document.body.style.overflowY = "hidden"
}