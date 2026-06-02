/* =========================
   DARK MODE
========================= */

const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    const icon = themeBtn.querySelector("i");

    if(document.body.classList.contains("dark")){
        icon.classList.remove("fa-moon");
        icon.classList.add("fa-sun");
    }else{
        icon.classList.remove("fa-sun");
        icon.classList.add("fa-moon");
    }

});

/* =========================
   MAPA LEAFLET
========================= */

const map = L.map('map').setView([-22.90, -47.06], 8);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{
    attribution:'© OpenStreetMap'
}).addTo(map);

const trucks = [

    {
        name:"TRK-001",
        lat:-22.90,
        lng:-47.06,
        risk:"12%"
    },

    {
        name:"TRK-002",
        lat:-23.18,
        lng:-46.89,
        risk:"67%"
    },

    {
        name:"TRK-003",
        lat:-21.17,
        lng:-47.81,
        risk:"8%"
    },

    {
        name:"TRK-004",
        lat:-23.50,
        lng:-47.45,
        risk:"89%"
    }

];

trucks.forEach(truck => {

    L.marker([truck.lat, truck.lng])
    .addTo(map)
    .bindPopup(`
        <b>${truck.name}</b><br>
        Risco IA: ${truck.risk}
    `);

});

/* =========================
   IA PREVENTIVA
========================= */

const aiMessages = [

"✅ IA validou a rota. Nenhum bloqueio necessário.",

"⚠ Possível divergência de rota detectada. Solicitar confirmação.",

"🚛 Sensor IoT confirma deslocamento autorizado.",

"🔎 Análise preventiva concluída. Sem risco operacional.",

"⚠ Desvio de rota identificado. Recomendado monitoramento.",

"✅ Bloqueio indevido evitado pela IA.",

"📡 GPS e telemetria sincronizados com sucesso.",

"⚠ Caminhão entrou em área de atenção logística."

];

const analyzeBtn =
document.getElementById("analyzeBtn");

const aiMessage =
document.getElementById("aiMessage");

const historyList =
document.getElementById("historyList");

analyzeBtn.addEventListener("click", () => {

    const random =
    aiMessages[Math.floor(Math.random() * aiMessages.length)];

    aiMessage.innerHTML = random;

    const item =
    document.createElement("li");

    item.innerHTML =
    new Date().toLocaleTimeString() +
    " - " +
    random;

    historyList.prepend(item);

});

/* =========================
   KPI COUNTER
========================= */

function animateValue(id,start,end,duration){

    let current = start;

    const range = end - start;

    const increment = range / 100;

    const stepTime = duration / 100;

    const obj =
    document.getElementById(id);

    const timer =
    setInterval(() => {

        current += increment;

        obj.innerText =
        Math.floor(current);

        if(current >= end){

            obj.innerText = end;

            clearInterval(timer);

        }

    },stepTime);

}

animateValue("activeTrucks",0,128,1500);
animateValue("activeRoutes",0,94,1500);
animateValue("alerts",0,16,1500);
animateValue("prevented",0,37,1500);

/* =========================
   CHART 1
========================= */

const monthlyCtx =
document.getElementById("monthlyChart");

new Chart(monthlyCtx,{

    type:"bar",

    data:{

        labels:[
            "Jan",
            "Fev",
            "Mar",
            "Abr",
            "Mai",
            "Jun"
        ],

        datasets:[{

            label:"Bloqueios Evitados",

            data:[
                5,
                8,
                11,
                14,
                17,
                22
            ],

            backgroundColor:[
                "#E53935",
                "#E53935",
                "#E53935",
                "#E53935",
                "#E53935",
                "#FF6B00"
            ]

        }]

    }

});

/* =========================
   CHART 2
========================= */

const efficiencyCtx =
document.getElementById("efficiencyChart");

new Chart(efficiencyCtx,{

    type:"doughnut",

    data:{

        labels:[
            "Precisão IA",
            "Margem"
        ],

        datasets:[{

            data:[
                96,
                4
            ],

            backgroundColor:[
                "#E53935",
                "#EEEEEE"
            ]

        }]

    }

});

/* =========================
   SIMULAÇÃO IOT
========================= */

const truckTable =
document.getElementById("truckTable");

const statuses = [

    "Normal",
    "Análise",
    "Crítico"

];

setInterval(() => {

    const rows =
    truckTable.querySelectorAll("tr");

    const row =
    rows[Math.floor(Math.random()*rows.length)];

    const risk =
    Math.floor(Math.random()*100);

    const statusCell =
    row.children[2];

    const riskCell =
    row.children[3];

    let status = "Normal";
    let color = "green";

    if(risk > 60){

        status = "Análise";
        color = "orange";

    }

    if(risk > 85){

        status = "Crítico";
        color = "red";

    }

    statusCell.innerHTML =
    `<span class="status ${color}">
        ${status}
    </span>`;

    riskCell.innerText =
    risk + "%";

},5000);

/* =========================
   ALERTAS AUTOMÁTICOS
========================= */

setInterval(() => {

    const alerts =
    document.getElementById("alerts");

    alerts.innerText =
    parseInt(alerts.innerText) +
    Math.floor(Math.random()*2);

},10000);

/* =========================
   EXPORTAR PDF
========================= */

const pdfBtn =
document.getElementById("pdfBtn");

pdfBtn.addEventListener("click", () => {

    window.print();

});

/* =========================
   RELÓGIO OPERACIONAL
========================= */

const footer =
document.querySelector("footer");

const clock =
document.createElement("p");

clock.style.marginTop = "15px";

footer.appendChild(clock);

setInterval(() => {

    const now =
    new Date();

    clock.innerHTML =
    "Sistema Online • " +
    now.toLocaleTimeString();

},1000);

/* =========================
   INDICADOR IOT
========================= */

const navbar =
document.querySelector(".navbar");

const indicator =
document.createElement("div");

indicator.innerHTML =
"🟢 IoT Online";

indicator.style.fontWeight = "bold";
indicator.style.color = "#2ecc71";

navbar.appendChild(indicator);

/* =========================
   NOTIFICAÇÕES
========================= */

setInterval(() => {

    const random =
    aiMessages[
        Math.floor(
            Math.random() *
            aiMessages.length
        )
    ];

    console.log(
        "Vetra AI:",
        random
    );

},15000);
