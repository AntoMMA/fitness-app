const trainingEngine = {

/* =========================
   ANALISI FISICO
========================= */

getBodyType(dati){

    const peso =
        parseFloat(dati.peso);

    const altezza =
        parseFloat(dati.altezza);

    const bmi =
        peso / (
            (altezza / 100) ** 2
        );

    /* =====================
       FISICO ATLETICO
    ===================== */

    if(bmi < 22){

        return "ATHLETIC_FAST";

    }

    /* =====================
       FISICO FORZA
    ===================== */

    if(bmi < 27){

        return "POWER_ATHLETE";

    }

    return "MASSIVE";

},

/* =========================
   SPLIT
========================= */

generateSplit(dati){

    const tipo =
        this.getBodyType(dati);

    /* =====================
       SPLIT MASSA/FORZA
    ===================== */

    if(
        tipo === "ATHLETIC_FAST"
    ){

        return [

            "PETTO/TRICIPITI",
            "SCHIENA/BICIPITI",
            "GAMBE/CORE",
            "SPALLE/UPPER"

        ];

    }

    return [

        "PUSH",
        "PULL",
        "LEGS",
        "UPPER"

    ];

},

/* =========================
   VOLUME
========================= */

getVolume(dati){

    const livello =
        dati.livello;

    const stress =
        dati.stress;

    let volume = 4;

    /* =====================
       LIVELLO AVANZATO
    ===================== */

    if(
        livello === "Avanzato"
    ){

        volume = 4;

    }

    /* =====================
       STRESS ALTO
    ===================== */

    if(stress === "Alto"){

        volume -= 1;

        /* PROTEZIONE SNC */

        if(volume > 3)
            volume = 3;

    }

    /* =====================
       LIMITE MINIMO
    ===================== */

    if(volume < 3)
        volume = 3;

    return volume;

},

/* =========================
   INTENSITÀ
========================= */

getIntensity(dati){

    const obiettivo =
        dati.obiettivo;

    /* =====================
       MASSA + FORZA
    ===================== */

    if(
        obiettivo === "massa e forza"
        ||
        obiettivo === "Massa e forza"
    ){

        return "POWER_HYPERTROPHY";

    }

    if(
        obiettivo === "Performance"
    ){

        return "FORZA";

    }

    return "IPERTROFIA";

},

/* =========================
   REPS E RECUPERO
========================= */

getRepsAndRest(
    intensity
){

    /* =====================
       MASSA + FORZA
    ===================== */

    if(
        intensity ===
        "POWER_HYPERTROPHY"
    ){

        return {

            multiarticolari: {

                reps: "4-6",
                recupero: "120 sec"

            },

            complementari: {

                reps: "8-10",
                recupero: "75 sec"

            },

            note:
                "Focus forza + densità muscolare"

        };

    }

    /* =====================
       FORZA
    ===================== */

    if(
        intensity === "FORZA"
    ){

        return {

            multiarticolari: {

                reps: "3-5",
                recupero: "150 sec"

            },

            complementari: {

                reps: "6-8",
                recupero: "90 sec"

            },

            note:
                "Focus forza massimale"

        };

    }

    /* =====================
       STANDARD
    ===================== */

    return {

        multiarticolari: {

            reps: "8-10",
            recupero: "90 sec"

        },

        complementari: {

            reps: "10-12",
            recupero: "60 sec"

        },

        note:
            "Ipertrofia classica"

    };

},

/* =========================
   CLASSIFICAZIONE
========================= */

isCompound(exercise){

    const multiarticolari = [

        "Panca Piana",
        "Squat",
        "Lat Machine",
        "Military Press"

    ];

    return multiarticolari.includes(
        exercise.nome
    );

},

/* =========================
   GENERAZIONE
========================= */

generateWorkout(dati){

    const split =
        this.generateSplit(
            dati
        );

    const volume =
        this.getVolume(
            dati
        );

    const intensity =
        this.getIntensity(
            dati
        );

    const trainingData =
        this.getRepsAndRest(
            intensity
        );

    return {

        split,
        volume,
        intensity,
        trainingData,

        bodyType:
            this.getBodyType(
                dati
            ),

        note:
            trainingData.note

    };

}

};