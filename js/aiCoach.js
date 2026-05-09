const aiCoach = {

analyze(dati){

    const sonno =
        parseFloat(dati.sonno);

    const stress =
        dati.stress;

    const livello =
        dati.livello;

    let score = 100;

    let messaggi = [];

    /* =====================
       SONNO
    ===================== */

    if(sonno < 6){

        score -= 25;

        messaggi.push(
            "Recupero insufficiente"
        );

    }

    else{

        messaggi.push(
            "Recupero buono"
        );

    }

    /* =====================
       STRESS
    ===================== */

    if(stress === "Alto"){

        score -= 30;

        messaggi.push(
            "Stress elevato"
        );

    }

    if(stress === "Medio"){

        score -= 10;

    }

    /* =====================
       LIVELLO
    ===================== */

    if(livello === "Avanzato"){

        score -= 5;

    }

    /* =====================
       VALUTAZIONE
    ===================== */

    let stato =
        "PRONTO";

    if(score < 70)
        stato = "RECUPERO";

    if(score < 50)
        stato = "DELOAD";

    return {

        score,
        stato,
        messaggi

    };

}

};