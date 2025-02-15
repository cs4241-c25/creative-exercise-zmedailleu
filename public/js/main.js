function changePolygonSize() {
    var polygon = document.getElementById("sizePolygon");
    var currentRadius = polygon.getAttribute("r");
    var newRadius = parseInt(currentRadius) + 3;
    polygon.setAttribute("r", newRadius.toString());
}