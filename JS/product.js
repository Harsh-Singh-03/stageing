let Bevrage = [
    {
        video: "./Files/Beverages/1.mp4",
        title: "Lemonta",
        desc: "A refreshing burst of zesty citrus delight in a guilt-free, smooth-textured drink."
    },
    {
        video: "./Files/Beverages/2.mp4",
        title: "Jaljeera",
        desc: "A tangy and refreshing Indian beverage bursting with spices, offering a delightful taste and aiding digestion."
    },
    {
        video: "./Files/Beverages/3.mp4",
        title: "Lemonta",
        desc: "A refreshing burst of zesty citrus delight in a guilt-free, smooth-textured drink."
    },
    {
        video: "./Files/Beverages/4.mp4",
        title: "Lemonta",
        desc: "A refreshing burst of zesty citrus delight in a guilt-free, smooth-textured drink."
    },
    {
        video: "./Files/Beverages/5.mp4",
        title: "Lemonta",
        desc: "A refreshing burst of zesty citrus delight in a guilt-free, smooth-textured drink."
    },
    {
        video: "./Files/Beverages/6.mp4",
        title: "Lemonta",
        desc: "A refreshing burst of zesty citrus delight in a guilt-free, smooth-textured drink."
    },
    {
        video: "./Files/Beverages/7.mp4",
        title: "Lemonta",
        desc: "A refreshing burst of zesty citrus delight in a guilt-free, smooth-textured drink."
    },
    {
        video: "./Files/Beverages/8.mp4",
        title: "Lemonta",
        desc: "A refreshing burst of zesty citrus delight in a guilt-free, smooth-textured drink."
    },
    {
        video: "./Files/Beverages/9.mp4",
        title: "Lemonta",
        desc: "A refreshing burst of zesty citrus delight in a guilt-free, smooth-textured drink."
    },
    {
        video: "./Files/Beverages/10.mp4",
        title: "Lemonta",
        desc: "A refreshing burst of zesty citrus delight in a guilt-free, smooth-textured drink."
    },
    {
        video: "./Files/Beverages/11.mp4",
        title: "Lemonta",
        desc: "A refreshing burst of zesty citrus delight in a guilt-free, smooth-textured drink."
    },
    {
        video: "./Files/Beverages/12.mp4",
        title: "Lemonta",
        desc: "A refreshing burst of zesty citrus delight in a guilt-free, smooth-textured drink."
    },
]
let Chips = [
    {
        video: "./Files/Chips/1.mp4",
        title: "Lemonta",
        desc: "A refreshing burst of zesty citrus delight in a guilt-free, smooth-textured drink."
    },
    {
        video: "./Files/Chips/2.mp4",
        title: "Lemonta",
        desc: "A refreshing burst of zesty citrus delight in a guilt-free, smooth-textured drink."
    },
    {
        video: "./Files/Chips/3.mp4",
        title: "Lemonta",
        desc: "A refreshing burst of zesty citrus delight in a guilt-free, smooth-textured drink."
    },
    {
        video: "./Files/Chips/4.mp4",
        title: "Lemonta",
        desc: "A refreshing burst of zesty citrus delight in a guilt-free, smooth-textured drink."
    }
]
let Snacks = [
    {
        video: "./Files/Snacks/1.mp4",
        title: "Lemonta",
        desc: "A refreshing burst of zesty citrus delight in a guilt-free, smooth-textured drink."
    }
]
let Namkeen = [
    {
        video: "./Files/Namkeens/1.mp4",
        title: "Lemonta",
        desc: "A refreshing burst of zesty citrus delight in a guilt-free, smooth-textured drink."
    },
    {
        video: "./Files/Namkeens/2.mp4",
        title: "Lemonta",
        desc: "A refreshing burst of zesty citrus delight in a guilt-free, smooth-textured drink."
    },
    {
        video: "./Files/Namkeens/3.mp4",
        title: "Lemonta",
        desc: "A refreshing burst of zesty citrus delight in a guilt-free, smooth-textured drink."
    },
    {
        video: "./Files/Namkeens/4.mp4",
        title: "Lemonta",
        desc: "A refreshing burst of zesty citrus delight in a guilt-free, smooth-textured drink."
    },
]
let products = document.getElementById("products");
let tab = document.querySelectorAll(".tab")
Bevrage.forEach(data =>{
    products.innerHTML += `
    <div class="product-card">
        <video src="${data.video}" autoplay muted loop playsinline></video>
        <h4>${data.title}</h4>
        <p>${data.desc}</p>
    </div>
    `
})

const updateProduct = (id) =>{
    if(id === "Snacks"){
        products.innerHTML = ""
        Snacks.forEach(data =>{
            products.innerHTML += `
            <div class="product-card">
                <video src="${data.video}" autoplay muted loop playsinline></video>
                <h4>${data.title}</h4>
                <p>${data.desc}</p>
            </div>
            `
        })
    }
    if(id === "Beverages"){
        products.innerHTML = ""
        Bevrage.forEach(data =>{
            products.innerHTML += `
            <div class="product-card">
                <video src="${data.video}" autoplay muted loop playsinline></video>
                <h4>${data.title}</h4>
                <p>${data.desc}</p>
            </div>
            `
        })
    }
    if(id === "Namkeens"){
        products.innerHTML = ""
        Namkeen.forEach(data =>{
            products.innerHTML += `
            <div class="product-card">
                <video src="${data.video}" autoplay muted loop playsinline></video>
                <h4>${data.title}</h4>
                <p>${data.desc}</p>
            </div>
            `
        })
    }
    if(id === "Chips"){
        products.innerHTML = ""
        Chips.forEach(data =>{
            products.innerHTML += `
            <div class="product-card">
                <video src="${data.video}" autoplay muted loop playsinline></video>
                <h4>${data.title}</h4>
                <p>${data.desc}</p>
            </div>
            `
        })
    }
}
const toggleTab = (e) =>{
    tab.forEach(el =>{
        el.classList.remove("tab-active")
    })
    e.target.classList.add("tab-active")
    console.log(e.target.dataset.id)
    updateProduct(e.target.dataset.id)
}

