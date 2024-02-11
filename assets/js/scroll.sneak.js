{
    //let sidebar = document.querySelector(".sidebar");

    let top = localStorage.getItem("sidebar-scroll");
    if (top !== null) {
        document.documentElement.scrollTop = parseInt(top, 10);
    }

    window.addEventListener("beforeunload", () => {
        localStorage.setItem("sidebar-scroll", document.documentElement.scrollTop);
    });

    console.log("Hello");
}