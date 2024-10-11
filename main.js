// Thay đổi nội dung búc thư ở đây
var letterContent =" Chúc mừng sinh nhật bae💗🎂 Chúc cậu ngày hôm nay sẽ ngập tràn niềm vui và có những điều tuyệt vời nhất🥳. Chúc cậu luôn xinh đẹp, hạnh phúc và thành công trong mọi điều. Mình thật may mắn vì gặp được cậu, hy vọng rằng chúng ta sẽ có nhiều kỷ niệm đáng nhớ bên nhau. Sinh nhật vui vẻ nha 🥰 _Tuấn Hưng_"

// Tốc độ viết chữ. Số càng nhỏ tốc độ càng nhanh. 50 là tốc độ khá phù hợp
durationWrite = 50 

// Hiệu ứng gõ chữ

function effectWrite () {
    var boxLetter = document.querySelector(".letterContent")
    letterContentSplited = letterContent.split("")
    
    letterContentSplited.forEach((val, index) => {
        setTimeout(() => {
            boxLetter.innerHTML += val    
        }, durationWrite* index)
    })
}

window.addEventListener("load", () => {
    setTimeout(() => {
        document.querySelector(".container").classList.add("active")
    }, 500)
})

var openBtn = document.querySelector(".openBtn")
openBtn.addEventListener("click", () => {
    document.querySelector(".cardValentine").classList.add("active")
    document.querySelector(".container").classList.add("close")
})

var cardValentine = document.querySelector(".cardValentine")

cardValentine.addEventListener("click", () => {
    cardValentine.classList.toggle("open")

    if(cardValentine.className.indexOf("open") != -1) {
        setTimeout(effectWrite, 500)
    } else {
        setTimeout(() => {
            document.querySelector(".letterContent").innerHTML = ""
        }, 1000)
    }
})