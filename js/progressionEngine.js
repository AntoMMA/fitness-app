const progressionEngine = {

analyze(exercise){

    const peso =
        parseFloat(exercise.peso);

    const reps =
        parseInt(exercise.reps);

    let consiglio =
        "Mantieni il carico";

    let nuovoPeso =
        peso;

    /* =====================
       PROGRESSIONE
    ===================== */

    if(reps >= 12){

        nuovoPeso =
            peso + 2.5;

        consiglio =
            "Aumenta il carico";

    }

    else if(reps <= 5){

        nuovoPeso =
            peso - 2.5;

        consiglio =
            "Riduci il carico";

    }

    return {

        consiglio,
        nuovoPeso

    };

}

};