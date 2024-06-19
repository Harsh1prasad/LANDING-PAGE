const img = document.querySelectorAll(".image")
// console.log(img)
var counter = 0;

img.forEach((slide,index)=>{
    slide.style.left = `${index*100}%`
})

const gonext=()=>{
    counter++;
    slideimg();
}

const goprev=()=>{
    counter--;
    slideimg();
}
const slideimg = ()=>{
    img.forEach((slide)=>{
        slide.style.transform = `translateX(-${counter*100}%)`
    })
}