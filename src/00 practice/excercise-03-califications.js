// calfications

const eso2o = {
  David: 5,
  Maria: 5,
  Jose:5,
  Juan: 5,
  Blanca: 0,
  Carmen: 0,
};

function printAverage(classResults) {
    const arrayGrades = Object.values(classResults);
    const classGradeAverage = calculateAverage(arrayGrades);
    const translatedGrade = translateNumericToSpanish(classGradeAverage);
    return translatedGrade;
}

console.log(printAverage(eso2o));

function calculateAverage(array){
    let total = 0;
    const average;
    for(let num of array){
        total += num;
    }
    average = total / (array.length)

    return average;
}

function translateNumericToSpanish(grade){
    const translations = {
        0: "Muy Deficiente",
        1: "Muy Deficiente",
        2: "Muy Deficiente",
        3: "Muy Deficiente",
        4: "Insuficiente",
        5: "Suficiente",
        6: "Bien",
        7: "Notable",     
        8: "Notable",     
        9: "Sobresaliente",     
        10: "Matrícula de Honor",     
    }
    
    const floorGrade = Math.floor(grade);

    return translations[floorGrade];
}

