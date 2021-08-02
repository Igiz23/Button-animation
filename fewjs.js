let button = document.querySelectorAll(".button");

button.forEach(element => {
    element.onmousemove = (e) =>
    {
        let x = e.pageX - e.target.offsetLeft;
        let y = e.pageY - e.target.offsetTop;
       element.style.setProperty("--x", x + "px");
       element.style.setProperty("--y", y + "px");
    };
})