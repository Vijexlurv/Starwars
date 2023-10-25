


const luke = document.getElementById("luke");

const darin = document.getElementById("darin");

const c3 = document.getElementById("c3");

const leia = document.getElementById("leia");

const owen = document.getElementById("owen");

const beru = document.getElementById("beru");

const r1 = document.getElementById("r1");

const r5 = document.getElementById("r5");

const biggs = document.getElementById("biggs");

const obi = document.getElementById("obi");


luke.addEventListener("click", details);

 

function details(){

    fetch("https://swapi.dev/api/people")

    .then((res) => res.json())

    .then((data) => {

        const results = data.results;

        luke.innerHTML = `

        <h3>Name :${results[0].name}</h3>

        <h3>Gender: ${results[0].gender}</h3>

        <h3>Height: ${results[0].height}</h3>

         `

        console.log(results[0].name);

    })

    .catch((error) => console.error("An error occurred:", error));

  

}

 

darin.addEventListener("click", details1);

 

function details1(){

    fetch("https://swapi.dev/api/people")

    .then((res) => res.json())

    .then((data) => {

        const results = data.results;

        darin.innerHTML = `

        <h3>Name :${results[3].name}</h3>

        <h3>Gender: ${results[3].gender}</h3>

        <h3>Height: ${results[3].height}</h3>

         `

    })

    .catch((error) => console.error("An error occurred:", error));

  

}

 

c3.addEventListener("click", details2);

 

function details2(){

    fetch("https://swapi.dev/api/people")

    .then((res) => res.json())

    .then((data) => {

        const results = data.results;

        c3.innerHTML = `

        <h3>Name :${results[1].name}</h3>

        <h3>Gender: ${results[1].gender}</h3>

        <h3>Height: ${results[1].height}</h3>

         `

    })

    .catch((error) => console.error("An error occurred:", error));

  

}

 

r1.addEventListener("click", details3);

 

function details3(){

    fetch("https://swapi.dev/api/people")

    .then((res) => res.json())

    .then((data) => {

        const results = data.results;

        r1.innerHTML = `

        <h3>Name :${results[2].name}</h3>

        <h3>Gender: ${results[2].gender}</h3>

        <h3>Height: ${results[2].height}</h3>

         `

    })

    .catch((error) => console.error("An error occurred:", error));

  

}

 

leia.addEventListener("click", details4);

 

function details4(){

    fetch("https://swapi.dev/api/people")

    .then((res) => res.json())

    .then((data) => {

        const results = data.results;

        leia.innerHTML = `

        <h3>Name :${results[4].name}</h3>

        <h3>Gender: ${results[4].gender}</h3>

        <h3>Height: ${results[4].height}</h3>

         `

    })

    .catch((error) => console.error("An error occurred:", error));

  

}

 

 

owen.addEventListener("click", details5);

 

function details5(){

    fetch("https://swapi.dev/api/people")

    .then((res) => res.json())

    .then((data) => {

        const results = data.results;

        owen.innerHTML = `

        <h3>Name :${results[5].name}</h3>

        <h3>Gender: ${results[5].gender}</h3>

        <h3>Height: ${results[5].height}</h3>

         `

    })

    .catch((error) => console.error("An error occurred:", error));

  

}

 

 

beru.addEventListener("click", details6);

 

function details6(){

    fetch("https://swapi.dev/api/people")

    .then((res) => res.json())

    .then((data) => {

        const results = data.results;

        beru.innerHTML = `

        <h3>Name :${results[6].name}</h3>

        <h3>Gender: ${results[6].gender}</h3>

        <h3>Height: ${results[6].height}</h3>

         `

    })

    .catch((error) => console.error("An error occurred:", error));

  

}

 

 

r5.addEventListener("click", details7);

 

function details7(){

    fetch("https://swapi.dev/api/people")

    .then((res) => res.json())

    .then((data) => {

        const results = data.results;

        r5.innerHTML = `

        <h3>Name :${results[7].name}</h3>

        <h3>Gender: ${results[7].gender}</h3>

        <h3>Height: ${results[7].height}</h3>

         `

    })

    .catch((error) => console.error("An error occurred:", error));

  

}

 

biggs.addEventListener("click", details8);

 

function details8(){

    fetch("https://swapi.dev/api/people")

    .then((res) => res.json())

    .then((data) => {

        const results = data.results;

        biggs.innerHTML = `

        <h3>Name :${results[8].name}</h3>

        <h3>Gender: ${results[8].gender}</h3>

        <h3>Height: ${results[8].height}</h3>

         `

    })

    .catch((error) => console.error("An error occurred:", error));

  

}

 

 

obi.addEventListener("click", details9);

 

function details9(){

    fetch("https://swapi.dev/api/people")

    .then((res) => res.json())

    .then((data) => {

        const results = data.results;

        obi.innerHTML = `

        <h3>Name :${results[9].name}</h3>

        <h3>Gender: ${results[9].gender}</h3>

        <h3>Height: ${results[9].height}</h3>

         `

    })

    .catch((error) => console.error("An error occurred:", error));

  

}