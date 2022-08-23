// function allWhite() {
//   document.querySelectorAll('img').forEach(function (item) {
//     item.src = '_images/white.jpg'
//   })
// }

var imgSources = new Array()
const arrayClone = imageArray.slice()
let arrayLength = imageArray.length

for (var c = 0; c < 8; c++) {
  let arr = arrayClone[Math.floor(Math.random() * arrayLength)]

  arrayLength--

  let index = arrayClone.indexOf(arr)

  arrayClone.splice(index, 1)

  imgSources.push(arr)
  imgSources.push(arr)
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[array[i], array[j]] = [array[j], array[i]]
  }
}
shuffleArray(imgSources)

function changeAllImage() {
  imageBox = document.getElementsByClassName('my-images')
  for (let s = 0; s < imgSources.length; s++) {
    imageBox[s].src = imgSources[s]
  }
}

document.querySelector('#shuffle').onclick = () => {
  shuffleArray(imgSources)
  changeAllImage()
}

changeAllImage()
// allWhite()
