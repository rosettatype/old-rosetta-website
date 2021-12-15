var testerFonts = [{
    name: "Eskorte Latin Regular",
    files: EskorteUps,
    instance: {
        wght: 400
    }
}, {
    name: "Eskorte Latin Medium",
    files: EskorteUps,
    instance: {
        wght: 500
    }
}, {
    name: "Eskorte Latin Semibold",
    files: EskorteUps,
    instance: {
        wght: 600
    }
}, {
    name: "Eskorte Latin Bold",
    files: EskorteUps,
    instance: {
        wght: 700
    }
}, {
    name: "Eskorte Latin Extrabold",
    files: EskorteUps,
    instance: {
        wght: 800
    }
},

{
    name: "Eskorte Latin Italic",
    files: EskorteIts,
    instance: {
        wght: 400
    }
}, {
    name: "Eskorte Latin Medium Italic",
    files: EskorteIts,
    instance: {
        wght: 500
    }
}, {
    name: "Eskorte Latin Semibold Italic",
    files: EskorteIts,
    instance: {
        wght: 600
    }
}, {
    name: "Eskorte Latin Bold Italic",
    files: EskorteIts,
    instance: {
        wght: 700
    }
}, {
    name: "Eskorte Latin Extrabold Italic",
    files: EskorteIts,
    instance: {
        wght: 800
    }
}];

var testerOptions = {
order: ["tester", ["wght"], "fontfamily"],
config: {
    fontfamily: {
        init: "Eskorte Latin Extrabold"
    },
    wght: {
        min: 400,
        max: 800,
        init: 800,
        step: 1,
        label: "Weight"
    }
}
};