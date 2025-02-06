const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')
const nameInput = document.getElementById('name')


const downloadBtn = document.getElementById('download-btn')

const image = new Image()
image.src = 'images/certificate.png'
image.onload = function () {
 drawImage()
}

function drawImage() {
 ctx.drawImage(image, 0, 0, canvas.clientWidth, canvas.height)
 ctx.font = '150% monotype corsiva'
 ctx.fillstyle = 'aquamarine'
 ctx.fillText(nameInput.ariaValueMax, 40, 184)
}

nameInput.addEventListener('input',function () {
 drawImage()
})

downloadBtn.addEventListener('click',function () {
 downloadBtn.href = canvas.toDataURL('image/jpg')
 downloadBtn.download = 'Certificate -' + nameInput.value
})