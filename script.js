const headerHolder = document.querySelector('.header_holder')
let offset = 0

setInterval(() => {
    offset = offset + 100

    if (offset > 200) {
        offset = 0
    }

    headerHolder.style.left = -offset + "vw"
}, 5000)