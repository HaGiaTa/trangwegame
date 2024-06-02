let htmlProducts = '';

fetch('https://api.myjson.online/v1/records/b3652b36-4e2b-4a0a-b5b5-b7ceb35dafd7')
    .then((res) => res.json())
    .then((response) => {
        console.log("🚀 ~ .then ~ response:", response.data)
        for (let i = 0; i < response.data.length; i++) {
            htmlProducts += `
        <div class="card">
        <img src="${response.data[i].img}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${response.data[i].nameProd}</h5>
            <p class="card-text">${response.data[i].desc}</p>
            <p class="card-text">Price: ${response.data[i].price}</p>
            <a href="#" class="btn btn-primary">Detail</a>
        </div>
    </div>
        `
        }
        document.getElementById('container-card').innerHTML = htmlProducts
    })