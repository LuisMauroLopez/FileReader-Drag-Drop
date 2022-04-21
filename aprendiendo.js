"use strict"
const zona = document.querySelector('.zona-arrastre');

zona.addEventListener("dragover", (e)=>{
    e.preventDefault();
    changeStyle(e.srcElement,"#444");
})
zona.addEventListener("dragleave", (e)=>{
    e.preventDefault();
    changeStyle(e.srcElement,"#999");
})
zona.addEventListener("drop", (e)=>{
    e.preventDefault();
    changeStyle(e.srcElement,"#999");
    // cargarArchivo(e.dataTransfer.files[0])
    cargarImg(e.dataTransfer.files[0])
})

const changeStyle = (obj,color)=>{
    obj.style.color = color;
    obj.style.border = `4px dashed ${color}`; 
}

const cargarArchivo = ar=>{
    const reader = new FileReader();
    reader.readAsText(ar);
    reader.addEventListener("load", e=>{
        document.querySelector(".resultado").textContent = e.currentTarget.result
    })
}
const cargarImg = ar=>{
    const reader = new FileReader();
    reader.readAsDataURL(ar);
    reader.addEventListener("load", e=>{
        let url = URL.createObjectURL(ar);
        let img = document.createElement("IMG");
        img.setAttribute("src",url);
        document.querySelector(".resultado").appendChild(img)
    })
}
