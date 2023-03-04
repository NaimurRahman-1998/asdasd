function loadData(dataLimit) {
    const url = `https://openapi.programming-hero.com/api/ai/tools`
    fetch(url)
        .then(res => res.json())
        .then(data => displayData(data.data.tools, dataLimit))
}

function displayData(array, dataLimit) {
    // console.log(array)

    loader(true)

    const card_container = document.getElementById('card-container');
    card_container.innerHTML = ``
    const button = document.getElementById('button')
    if (dataLimit && array.length > 6) {
        array = array.slice(0, 6)
        button.classList.remove('hidden')
    } else {
        button.classList.add('hidden')
    }

    array.forEach(obj => {
        // console.log(obj)
        const card_div = document.createElement('div')
        card_div.innerHTML = `
        <div class="card w-[95%] h-[90%] mx-auto bg-base-100 shadow-xl border mt-8">
            <figure class="px-10 py-5">
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
                        <p class="text-sm"><i class="mt-4 mr-1 fa-regular fa-calendar"></i>${obj.published_in}</p>
                    </div>
                    <div>
                        <label onclick="showModal('${obj.id}')" for="my-modal-3" class="btn btn-ghost mt-4"><i class="fa-solid fa-greater-than"></i></label>
                    </div>
                </div>
            </div>
        </div>
        `
        card_container.appendChild(card_div)
    })

    loader(false)

}

function loader(value) {
    const spinner = document.getElementById('spinner')
    if (value == true) {
        spinner.classList.remove('hidden')
    } else {
        spinner.classList.add('hidden')
    }
}

function showAll() {
    loader(true)
    loadData()
}

function showModal(id) {
    const url = `https://openapi.programming-hero.com/api/ai/tool/${id}`
    fetch(url)
        .then(res => res.json())
        .then(data => showModalData(data.data))
}

function showModalData(obj) {
    console.log(obj)

    document.getElementById('title').innerText = obj.description
    console.log(obj['pricing'])
    const pricing_container = document.getElementById('pricing-container')
    pricing_container.innerHTML = `
    <div class=" px-4 bg-slate-100 h-20 w-24 text-sm text-center font-bold text-green-600">
        <span>${obj['pricing'] ? obj.pricing[0].price : 'free of Cost'}</span> <span>${obj.pricing[0].plan}</span>
    </div>
    <div class=" px-4 bg-slate-100 h-20 w-24 text-sm text-center font-bold text-amber-600">
        <span>${obj.pricing[1].price}</span> <span>${obj.pricing[1].plan}</span>
    </div>
    <div class=" px-4 bg-slate-100 h-20 w-24 text-sm text-center font-bold text-rose-600">
    <span >${obj.pricing[2].price}</span> <span>${obj.pricing[2].plan}</span>
    </div>
    `


    const feature = document.getElementById('feature')
    feature.innerHTML = `
    <ul class="list-disc mt-3 text-sm">
        <li class="mt-2">${obj.features[1].feature_name}</li>
        <li class="mt-2">${obj.features[2].feature_name}</li>
        <li class="mt-2">${obj.features[3].feature_name}</li>
    </ul>
    `

    const integ = document.getElementById('integ')
    integ.innerHTML = `
    <li class="mt-2">${obj.integrations[0]}</li>
    <li class="mt-2">${obj.integrations[1]}</li>
    <li class="mt-2">${obj.integrations[2]}</li>
    `

    const right_card = document.getElementById('right-card')
    let accuracy = obj.accuracy.score;
    accuracy = accuracy * 100;
    right_card.innerHTML = `
    <div class="card card-compact w-96 h-full bg-base-100 shadow-xl">
        <figure class=" py-1"><img class="h-[100%] w-full rounded-lg" src="${obj.image_link[0] || obj.image_link[0]}" alt="Shoes" /></figure>
        <button class="btn btn-error text-white absolute right-2 top-3"> ${accuracy}% accuracy</button>
        <div class="card-body">
            <h2 id="right-title" class="text-2xl font-bold text-center">${obj.input_output_examples[0].input}</h2>
            <p id="para" class="text-center">${obj.input_output_examples[0].output}</p>
            <div class="">
                <!-- <button class="btn btn-primary -translate-y-80 translate-x-56">Buy Now</button> -->
            </div>
        </div>
    </div>
    
    `
}
loadData(6)