function loadData(dataLimit) {
    const url = `https://openapi.programming-hero.com/api/ai/tools`
    fetch(url)
        .then(res => res.json())
        .then(data => displayData(data.data.tools , dataLimit))
}

function displayData(array,dataLimit) {
    // console.log(array)

    const card_container = document.getElementById('card-container');
    card_container.innerHTML = ``
    const button = document.getElementById('button')
    if(dataLimit && array.length > 3){
        array = array.slice(0,3)
        button.classList.remove('hidden')
    }else{
        button.classList.add('hidden')
    }

    array.forEach(obj => {
        // console.log(obj)
        const card_div = document.createElement('div')
        card_div.innerHTML = `
        <div class="card w-[75%] bg-base-100 shadow-xl border mt-8">
            <figure class="px-10 pt-10">
                <img src="${obj.image}" alt="Shoes" class="rounded-xl" />
            </figure>
            <div class="card-body items-start ">
                <h2 class="card-title font-bold">Features</h2>
                <ol class="list-decimal pl-6 text-sm">
                    <li>${obj.features[0]}</li>
                    <li>${obj.features[1]}</li>
                    <li>${obj.features[2]}</li>
                </ol>
                <hr>
                <div class="border-t-2 border-slate-300 w-full flex justify-between">
                    <div class="mt-4">
                        <h2 class="card-title font-bold text-2xl">${obj.name}</h2>
                        <p class="text-sm"><i class="mr-1 fa-regular fa-calendar"></i>${obj.published_in}</p>
                    </div>
                    <div>
                        <label onclick="showModal('${obj.id}')" for="my-modal-3" class="btn mt-4">></label>
                    </div>
                </div>
            </div>
        </div>
        `
        card_container.appendChild(card_div)
    })
    
}

function showAll(){
    loadData()
}

function showModal(id){
    const url = `https://openapi.programming-hero.com/api/ai/tool/${id}`
    fetch(url)
        .then(res => res.json())
        .then(data => showModalData(data.data))
}

function showModalData(obj){
    console.log(obj)

    document.getElementById('title').innerText = obj.description
    document.getElementById('price-1').innerText = obj.pricing[0].price
    document.getElementById('price-2').innerText = obj.pricing[1].price
    document.getElementById('price-3').innerText = obj.pricing[2].price 
    document.getElementById('plan1').innerText = obj.pricing[0].plan
    document.getElementById('plan2').innerText = obj.pricing[1].plan
    document.getElementById('plan3').innerText = obj.pricing[2].plan

    document.getElementById('f-1').innerText = obj.features[1].feature_name
    document.getElementById('f-2').innerText = obj.features[2].feature_name
    document.getElementById('f-3').innerText = obj.features[3].feature_name

    document.getElementById('i-1').innerText = obj.integrations[0]
    document.getElementById('i-2').innerText = obj.integrations[1] 
    document.getElementById('i-3').innerText = obj.integrations[2]

    document.getElementById('modalpic').src = obj.image_link[0]
    document.getElementById('right-title').innerText = obj.input_output_examples[0].input
    document.getElementById('para').innerText = obj.input_output_examples[0].output
}
loadData(3)