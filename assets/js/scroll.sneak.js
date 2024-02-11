{
    //let sidebar = document.querySelector(".sidebar");

    let top = sessionStorage.getItem("dongho-sidebar-scroll");
    if (top !== null) {
        document.documentElement.scrollTop = parseInt(top, 10);
    }

    window.addEventListener("beforeunload", () => {
        sessionStorage.setItem("dongho-sidebar-scroll", document.documentElement.scrollTop);
    });

    console.log("Hello");
}