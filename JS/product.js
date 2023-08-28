// Have To Do with direct html only --
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
        title: "App liz",
        desc: "A zesty and effervescent Indian lemonade infused with spicy flavors, offering a refreshing and unique taste experience."
    },
    {
        video: "./Files/Beverages/4.mp4",
        title: "Banta jeera",
        desc: "A zesty and effervescent Indian lemonade infused with spicy flavors, offering a refreshing and unique taste experience."
    },
    {
        video: "./Files/Beverages/5.mp4",
        title: "Fruit Masti",
        desc: "A vibrant and flavorful medley of fruits, creating a joyful and refreshing beverage."
    },
    {
        video: "./Files/Beverages/6.mp4",
        title: "Totka",
        desc: "A vibrant and flavorful medley of fruits, creating a joyful and refreshing beverage."
    },
    {
        video: "./Files/Beverages/7.mp4",
        title: "Orange",
        desc: "A refreshing and citrusy beverage that quenches your thirst with a burst of vibrant orange flavor."
    },
    {
        video: "./Files/Beverages/8.mp4",
        title: "Lemon",
        desc: "A zesty and invigorating beverage that refreshes with the tangy essence of lemons."
    },
    {
        video: "./Files/Beverages/9.mp4",
        title: "Crystal Lime",
        desc: "A sparkling and invigorating beverage that delights with the crisp and tangy essence of lime."
    },
    {
        video: "./Files/Beverages/10.mp4",
        title: "Cola",
        desc: "An iconic and effervescent beverage that combines a distinct blend of flavors for a fizzy and refreshing experience."
    },
    {
        video: "./Files/Beverages/11.mp4",
        title: "Jayanti Soda",
        desc: "A bubbly and thirst-quenching carbonated drink that adds a delightful fizz to your refreshment."
    },
    {
        video: "./Files/Beverages/12.mp4",
        title: "Mineral Water",
        desc: "Pure and refreshing hydration sourced from natural minerals, invigorating your senses with pristine clarity."
    },
]
let Chips = [
    {
        video: "./Files/Chips/1.mp4",
        title: "Classic Salted Flavor",
        desc: " "
    },
    {
        video: "./Files/Chips/2.mp4",
        title: "Magic Masala Flavor",
        desc: " "
    },
    {
        video: "./Files/Chips/3.mp4",
        title: "Cream Onion Flavor",
        desc: " "
    },
    {
        video: "./Files/Chips/4.mp4",
        title: "Spanish Tomato Flavor",
        desc: " "
    }
]
let Snacks = [
    {
        video: "./Files/Snacks/1.mp4",
        title: "Popcorn (Salted)",
        desc: "Packed fresh and ready to eat. Tossed in salt and baked to perfection."
    }
]
let Namkeen = [
    {
        video: "./Files/Namkeens/1.mp4",
        title: "Aalu Bhujia",
        desc: "These tiny spicy potato noodle shaped savory is crispy, tangy and lightly spiced. Have it anytime or enjoy them most with a cup of tea."
    },
    {
        video: "./Files/Namkeens/2.mp4",
        title: "Bhujia Sev",
        desc: "The secrets of Bikaneri Sev Bhujia finds its true revelation. These lightly spiced gram flour Sev makes you ask for more."
    },
    {
        video: "./Files/Namkeens/3.mp4",
        title: "Bhujia",
        desc: "The world renowned, straight from the heart of Rajasthan. Crispy Bikaneri Bhujia’"
    },
    {
        video: "./Files/Namkeens/4.mp4",
        title: "Chana Dal",
        desc: "Prepared with authentic Indian recipe, these crispy and spicy chana beads simply delight your taste buds."
    },
]
let products = document.getElementById("products");
let tab = document.querySelectorAll(".tab")

document.addEventListener("DOMContentLoaded", (event) => {
    Bevrage.forEach(data =>{
        setTimeout(() => {
            products.innerHTML += `
            <div class="product-card">
                <video src="${data.video}" autoplay muted loop playsinline></video>
                <h4>${data.title}</h4>
                <p>${data.desc}</p>
            </div>
            `       
        }, 200);
    })
});

const updateProduct = (id) =>{
    if(id === "Snacks"){
        products.innerHTML = ""
        Snacks.forEach(data =>{
            setTimeout(() => {
                products.innerHTML += `
                <div class="product-card">
                    <video src="${data.video}" autoplay muted loop playsinline></video>
                    <h4>${data.title}</h4>
                    <p>${data.desc}</p>
                </div>
                `
            }, 200);
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

