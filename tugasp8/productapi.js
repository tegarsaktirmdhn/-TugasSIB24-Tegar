let data = [
    {
        foto: "img/hp1.jpeg",
        namaProduk: "HP1",
        desc: "HP bagus",
        harga: "Rp. 1.000.000",

    },
    {
        foto: "img/hp2.jpeg",
        namaProduk: "HP2",
        desc: "HP bagus",
        harga: "Rp. 1.000.000",

    },
    {
        foto: "img/hp3.jpeg",
        namaProduk: "HP3",
        desc: "HP bagus",
        harga: "Rp. 1.000.000",

    },
    {
        foto: "img/hp4.jpeg",
        namaProduk: "HP4",
        desc: "HP bagus",
        harga: "Rp. 1.000.000",

    },
    {
        foto: "img/hp5.jpeg",
        namaProduk: "HP5",
        desc: "HP bagus",
        harga: "Rp. 1.000.000",

    },
    {
        foto: "img/hp6.jpeg",
        namaProduk: "HP6",
        desc: "HP bagus",
        harga: "Rp. 1.000.000",

    },
    {
        foto: "img/hp7.jpeg",
        namaProduk: "HP7",
        desc: "HP bagus",
        harga: "Rp. 1.000.000",

    },
    {
        foto: "img/hp8.jpeg",
        namaProduk: "HP8",
        desc: "HP bagus",
        harga: "Rp. 1.000.000",

    },
    
];

let fetchOptions = {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
    }
};

async function postData() {
    try {
        const userCard = document.getElementById('user-card');

        data.forEach(async (produk) => {
            const response = await fetch(`https://reqres.in/api/produkhp/${produk.id}`, {
                ...fetchOptions,
                body: JSON.stringify(produk)
            });
            const responseData = await response.json();
            console.log(responseData);

            const productHTML = `
            <div class="card">
            <img src="${responseData.foto}" alt="Profile Picture">
            <div class="info">
                <div class="mana">${responseData.namaProduk}</div>
                <div class="deskripsi">${responseData.desc}</div>
                <div class="harga">${responseData.harga}</div>
            </div>
            </div>`
            userCard.innerHTML += productHTML;
        });
    } catch (error) {
        console.error('Permintaan Gagal:', error);
    }
}

postData();
