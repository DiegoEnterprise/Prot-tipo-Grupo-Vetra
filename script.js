function analisarRisco() {

    const mensagens = [

        "⚠️ IA detectou inconsistência na rota. Solicitar validação antes do bloqueio.",

        "✅ Dados IoT confirmam rota autorizada. Nenhum bloqueio necessário.",

        "⚠️ Divergência entre GPS e planejamento logístico detectada.",

        "✅ Caminhão identificado em corredor logístico permitido.",

        "⚠️ Risco moderado detectado. Encaminhar para análise humana."
    ];

    const sorteio =
        mensagens[Math.floor(Math.random() * mensagens.length)];

    document.getElementById("mensagemIA").innerHTML = sorteio;

    const historico =
        document.getElementById("historico");

    const item = document.createElement("li");

    item.innerHTML =
        new Date().toLocaleTimeString() +
        " - " +
        sorteio;

    historico.prepend(item);
}
