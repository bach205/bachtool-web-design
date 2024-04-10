//
const navigationOn = (n) => {                                         //khai báo sticky ở bên ngoài hàm để giá trị của nó là kh đổi
    const navigation = document.getElementById(n);
    window.scrollY >= 310 ? navigation.classList.add("sticky") : navigation.classList.remove("sticky");
}
//
const backToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })

}
const changetheme = () => {
    const backToTop = document.getElementById('backToTop');
    const style = window.getComputedStyle(backToTop);
    let color = style.getPropertyValue('--modetext');
    const root = document.documentElement;
    if (color == 'black') {
        root.style.setProperty('--modetext', 'white');
        root.style.setProperty('--modescreen', 'black');
    }
    else if (color == 'white') {
        root.style.setProperty('--modetext', 'black');
        root.style.setProperty('--modescreen', 'white');
    }
}

const displayBackToTop = () => {
    const backToTop = document.getElementById("backToTop");
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) { backToTop.style.display = "inline"; }
    else { backToTop.style.display = "none"; }
}
const notice = () => {
    alert('This function is in beta');
}



