const nutritionEngine = {

calculate(dati){

    const peso =
        parseFloat(dati.peso);

    const altezza =
        parseFloat(dati.altezza);

    const eta =
        parseFloat(dati.eta);

    const sesso =
        dati.sesso;

    const obiettivo =
        dati.obiettivo;

    const livello =
        dati.livello;

    /* =====================
       BMR
    ===================== */

    let bmr;

    if(sesso === "Maschio"){

        bmr =
            10 * peso +
            6.25 * altezza -
            5 * eta +
            5;

    }

    else{

        bmr =
            10 * peso +
            6.25 * altezza -
            5 * eta -
            161;

    }

    /* =====================
       ATTIVITÀ
    ===================== */

    let fattore = 1.5;

    if(livello === "Intermedio")
        fattore = 1.7;

    if(livello === "Avanzato")
        fattore = 1.9;

    let calorie =
        Math.round(
            bmr * fattore
        );

    /* =====================
       OBIETTIVO
    ===================== */

    if(obiettivo === "Aumento massa")
        calorie += 300;

    if(obiettivo === "Dimagrimento")
        calorie -= 400;

    /* =====================
       MACRO
    ===================== */

    let proteine =
        Math.round(
            peso * 2.2
        );

    let grassi =
        Math.round(
            peso * 0.8
        );

    let carboidrati =
        Math.round(
            (
                calorie -
                (proteine * 4) -
                (grassi * 9)
            ) / 4
        );

    return {

        calorie,
        proteine,
        carboidrati,
        grassi

    };

},

generateMeals(dati){

    const obiettivo =
        dati.obiettivo;

    if(obiettivo === "Aumento massa"){

        return [

            "Colazione: Avena + Burro arachidi + Banana",

            "Pranzo: Riso + Pollo + Olio EVO",

            "Pre Workout: Gallette + Miele",

            "Post Workout: Whey + Banana",

            "Cena: Salmone + Patate"

        ];

    }

    if(obiettivo === "Dimagrimento"){

        return [

            "Colazione: Yogurt greco + Frutti rossi",

            "Pranzo: Riso basmati + Tacchino",

            "Pre Workout: Caffè + Banana",

            "Cena: Verdure + Pesce magro"

        ];

    }

    return [

        "Colazione equilibrata",

        "Pranzo bilanciato",

        "Cena proteica"

    ];

}

};