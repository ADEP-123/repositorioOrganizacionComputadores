const openCloseSidebar = (sidebar,info) => {    
    if (sidebar.style.width === "0%" || !sidebar.style.width) {
        // Abre el sidebar
        sidebar.style.width = "20%";
        sidebar.style.margin = "2%";
        info.style.width = "72%";
        sidebar.style.border = "1px solid white";
        sidebar.style.padding = "1%"
    } else {
        // Cierra el sidebar
        sidebar.style.margin = "0%";
        sidebar.style.width = "0%";
        info.style.width = "96%";
        sidebar.style.border = "0px solid white";
        sidebar.style.padding = "0%"

    }
}
export default openCloseSidebar