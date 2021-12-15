// Tester instances only for "Normal", excluding Text and Display opsz extrema
var testerFonts = [{
        name: "Adelphi PE Thin",
        instance: {
            wght: 100,
            opsz: 12,
            slnt: 0
        },
    }, {
        name: "Adelphi PE Extralight",
        instance: {
            wght: 200,
            opsz: 12,
            slnt: 0
        },
    }, {
        name: "Adelphi PE Light",
        instance: {
            wght: 300,
            opsz: 12,
            slnt: 0
        },
    }, {
        name: "Adelphi PE Regular",
        instance: {
            wght: 400,
            opsz: 12,
            slnt: 0
        },
    }, {
        name: "Adelphi PE Medium",
        instance: {
            wght: 500,
            opsz: 12,
            slnt: 0
        },
    }, {
        name: "Adelphi PE Semibold",
        instance: {
            wght: 600,
            opsz: 12,
            slnt: 0
        },
    }, {
        name: "Adelphi PE Bold",
        instance: {
            wght: 700,
            opsz: 12,
            slnt: 0
        },
    }, {
        name: "Adelphi PE Extrabold",
        instance: {
            wght: 800,
            opsz: 12,
            slnt: 0
        },
    }, {
        name: "Adelphi PE Black",
        instance: {
            wght: 900,
            opsz: 12,
            slnt: 0
        },
    },

    {
        name: "Adelphi PE Thin Italic",
        instance: {
            wght: 100,
            opsz: 12,
            slnt: -9.5
        },
    }, {
        name: "Adelphi PE Extralight Italic",
        instance: {
            wght: 200,
            opsz: 12,
            slnt: -9.5
        },
    }, {
        name: "Adelphi PE Light Italic",
        instance: {
            wght: 300,
            opsz: 12,
            slnt: -9.5
        },
    }, {
        name: "Adelphi PE Italic",
        instance: {
            wght: 400,
            opsz: 12,
            slnt: -9.5
        },
    }, {
        name: "Adelphi PE Medium Italic",
        instance: {
            wght: 500,
            opsz: 12,
            slnt: -9.5
        },
    }, {
        name: "Adelphi PE Semibold Italic",
        instance: {
            wght: 600,
            opsz: 12,
            slnt: -9.5
        },
    }, {
        name: "Adelphi PE Bold Italic",
        instance: {
            wght: 700,
            opsz: 12,
            slnt: -9.5
        },
    }, {
        name: "Adelphi PE Extrabold Italic",
        instance: {
            wght: 800,
            opsz: 12,
            slnt: -9.5
        },
    }, {
        name: "Adelphi PE Black Italic",
        instance: {
            wght: 900,
            opsz: 12,
            slnt: -9.5
        },
    }
];


var testerOptions = {
    order: ["tester", ["wght", "opsz", "slnt"], "fontfamily"],
    config: {
        wght: {
            min: 100,
            max: 900,
            init: 500,
            step: 1,
            label: "Weight"
        },
        opsz: {
            // Avoid Safari rendering bug where the rendered value
            // displays the variation setting of 18 for 6.00
            min: 6.01,
            max: 17.99,
            init: 12,
            step: 0.01,
            label: "Optical size"
        },
        slnt: {
            min: -9.5,
            max: 0,
            init: 0,
            step: 0.01,
            label: "Slant"
        },
        fontfamily: {
            init: "Adelphi PE Black"
        }
    },
};