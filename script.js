/* =====================================
   VETRA AI - SISTEMA INTELIGENTE
===================================== */

/* DARK MODE */

const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    const icon = themeBtn.querySelector("i");

    if (document.body.classList.contains("dark")) {
        icon.classList.replace("fa-moon", "fa-sun");
    } else {
        icon.classList.replace("fa-sun", "fa-moon");
    }

});

/* =====================================
   MAPA OPERACIONAL
===================================== */

const map = L.map("map").setView([-22.9, -47.06], 7);

L.tileLayer(
    "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
    {
        attribution: "© OpenStreetMap"
    }
).addTo(map);

const truckData = [

    {
        id: "TRK-001",
        city: "Campinas",
        risk: 12,
        lat: -22.90,
        lng: -47.06
    },

    {
        id: "TRK-002",
        city: "Jundiaí",
        risk: 44,
        lat: -23.18,
        lng: -46.89
    },

    {
        id: "TRK-003",
        city: "Ribeirão Preto",
        risk: 17,
        lat: -21.17,
        lng: -47.81
    },

    {
        id: "TRK-004",
        city: "Sorocaba",
        risk: 71,
        lat: -23.50,
        lng: -47.45
    }

];

truckData.forEach(truck => {

    const marker = L.marker([truck.lat, truck.lng])
        .addTo(map);

    marker.bindPopup(`
        <strong>${truck.id}</strong><br>
        Cidade: ${truck.city}<br>
        Risco IA: ${truck.risk}%
    `);

});

/* =====================================
   KPI ANIMADO
===================================== */

function animateCounter(id, end) {

    const el = document.getElementById(id);

    let start = 0;

    const timer = setInterval(() => {

        start++;

        el.innerText = start;

        if (start >= end) {
            clearInterval(timer);
        }

    }, 15);

}

animateCounter("activeTrucks", 128);
animateCounter("activeRoutes", 94);
animateCounter("alerts", 16);
animateCounter("prevented", 37);

/* =====================================
   IA PREVENTIVA
===================================== */

const aiResponses = [

    "✅ Rota validada pela IA. Nenhum bloqueio necessário.",

    "⚠ Divergência detectada entre GPS e rota planejada.",

    "🚛 Sensores IoT confirmaram deslocamento autorizado.",

    "🔍 Possível bloqueio indevido identificado.",

    "📡 Comunicação do veículo normalizada.",

    "⚠ Caminhão entrou em área de atenção logística.",

    "✅ Bloqueio evitado automaticamente.",

    "🧠 IA analisou comportamento e liberou a carga."

];

const analyzeBtn =
document.getElementById("analyzeBtn");

const aiMessage =
document.getElementById("aiMessage");

const historyList =
document.getElementById("historyList");

analyzeBtn.addEventListener("click", () => {

    const randomMessage =

        aiResponses[
        Math.floor(
            Math.random() *
            aiResponses.length
        )
    ];

    aiMessage.innerHTML =
    randomMessage;

    const li =
    document.createElement("li");

    li.innerHTML =
    `${new Date().toLocaleTimeString()}
    - ${randomMessage}`;

    historyList.prepend(li);

});

/* =====================================
   SIMULAÇÃO DE TELEMETRIA
===================================== */

const truckTable =
document.getElementById("truckTable");

function randomRisk() {

    return Math.floor(
        Math.random() * 100
    );

}

setInterval(() => {

    const rows =
    truckTable.querySelectorAll("tr");

    const randomRow =
    rows[
        Math.floor(
            Math.random() *
            rows.length
        )
    ];

    const risk =
    randomRisk();

    let status = "Normal";
    let color = "green";

    if (risk > 60) {

        status = "Análise";
        color = "orange";

    }

    if (risk > 85) {

        status = "Crítico";
        color = "red";

    }

    randomRow.children[2].innerHTML =
    `<span class="status ${color}">
        ${status}
    </span>`;

    randomRow.children[3].innerHTML =
    risk + "%";

}, 5000);

/* =====================================
   ALERTAS AUTOMÁTICOS
===================================== */

setInterval(() => {

    const alertCounter =
    document.getElementById("alerts");

    const current =
    parseInt(alertCounter.innerText);

    alertCounter.innerText =
    current +
    Math.floor(Math.random() * 2);

}, 10000);

/* =====================================
   GRÁFICO 1
===================================== */

const monthlyChart =
document.getElementById("monthlyChart");

new Chart(monthlyChart, {

    type: "bar",

    data: {

        labels: [
            "Jan",
            "Fev",
            "Mar",
            "Abr",
            "Mai",
            "Jun"
        ],

        datasets: [

            {
                label:
                "Bloqueios Evitados",

                data: [
                    5,
                    9,
                    13,
                    18,
                    24,
                    31
                ],

                backgroundColor:
                "#ff6b00"

            }

        ]

    },

    options: {

        responsive: true

    }

});

/* =====================================
   GRÁFICO 2
===================================== */

const efficiencyChart =
document.getElementById("efficiencyChart");

new Chart(efficiencyChart, {

    type: "doughnut",

    data: {

        labels: [

            "Precisão IA",

            "Margem"

        ],

        datasets: [

            {

                data: [

                    96,
                    4

                ],

                backgroundColor: [

                    "#ff6b00",

                    "#eeeeee"

                ]

            }

        ]

    }

});

/* =====================================
   EXPORTAR RELATÓRIO
===================================== */

const pdfBtn =
document.getElementById("pdfBtn");

pdfBtn.addEventListener("click", () => {

    window.print();

});

/* =====================================
   RELÓGIO OPERACIONAL
===================================== */

const footer =
document.querySelector("footer");

const clock =
document.createElement("div");

clock.classList.add("clock");

footer.appendChild(clock);

setInterval(() => {

    const now =
    new Date();

    clock.innerHTML =
    `Sistema Online • ${now.toLocaleTimeString()}`;

}, 1000);

/* =====================================
   INDICADOR IoT
===================================== */

const navbar =
document.querySelector(".navbar");

const iotStatus =
document.createElement("div");

iotStatus.classList.add("iot-indicator");

iotStatus.innerHTML =
"🟢 IoT Online";

navbar.appendChild(iotStatus);

/* =====================================
   NOTIFICAÇÕES AUTOMÁTICAS
===================================== */

setInterval(() => {

    const random =
    aiResponses[
        Math.floor(
            Math.random() *
            aiResponses.length
        )
    ];

    console.log(
        "VETRA AI:",
        random
    );

}, 15000);

/* =====================================
   EFEITO SCROLL
===================================== */

const revealElements =
document.querySelectorAll(
    ".card, .tech-card, .chart-card, .ai-card"
);

window.addEventListener("scroll", () => {

    revealElements.forEach(el => {

        const position =
        el.getBoundingClientRect().top;

        if (position < window.innerHeight - 100) {

            el.classList.add("show");

        }

    });

});
