var testerFonts = [{
        name: "Adapter Hebrew Text Extralight",
        instance: {
            wght: 200,
            opsz: 4,
            slnt: 0
        },
    }, {
        name: "Adapter Hebrew Text Light",
        instance: {
            wght: 300,
            opsz: 4,
            slnt: 0
        },
    }, {
        name: "Adapter Hebrew Text Regular",
        instance: {
            wght: 400,
            opsz: 4,
            slnt: 0
        },
    }, {
        name: "Adapter Hebrew Text Medium",
        instance: {
            wght: 500,
            opsz: 4,
            slnt: 0
        },
    }, {
        name: "Adapter Hebrew Text Semibold",
        instance: {
            wght: 600,
            opsz: 4,
            slnt: 0
        },
    }, {
        name: "Adapter Hebrew Text Bold",
        instance: {
            wght: 700,
            opsz: 4,
            slnt: 0
        },
    }, {
        name: "Adapter Hebrew Text Extrabold",
        instance: {
            wght: 800,
            opsz: 4,
            slnt: 0
        },
    },

    {
        name: "Adapter Hebrew Text Extralight Italic",
        instance: {
            wght: 200,
            opsz: 4,
            slnt: -10
        },
    }, {
        name: "Adapter Hebrew Text Light Italic",
        instance: {
            wght: 300,
            opsz: 4,
            slnt: -10
        },
    }, {
        name: "Adapter Hebrew Text Italic",
        instance: {
            wght: 400,
            opsz: 4,
            slnt: -10
        },
    }, {
        name: "Adapter Hebrew Text Medium Italic",
        instance: {
            wght: 500,
            opsz: 4,
            slnt: -10
        },
    }, {
        name: "Adapter Hebrew Text Semibold Italic",
        instance: {
            wght: 600,
            opsz: 4,
            slnt: -10
        },
    }, {
        name: "Adapter Hebrew Text Bold Italic",
        instance: {
            wght: 700,
            opsz: 4,
            slnt: -10
        },
    }, {
        name: "Adapter Hebrew Text Extrabold Italic",
        instance: {
            wght: 800,
            opsz: 4,
            slnt: -10
        },
    },

    {
        name: "Adapter Hebrew Display Thin",
        instance: {
            wght: 100,
            opsz: 18,
            slnt: 0
        },
    }, {
        name: "Adapter Hebrew Display Extralight",
        instance: {
            wght: 200,
            opsz: 18,
            slnt: 0
        },
    }, {
        name: "Adapter Hebrew Display Light",
        instance: {
            wght: 300,
            opsz: 18,
            slnt: 0
        },
    }, {
        name: "Adapter Hebrew Display Regular",
        instance: {
            wght: 400,
            opsz: 18,
            slnt: 0
        },
    }, {
        name: "Adapter Hebrew Display Medium",
        instance: {
            wght: 500,
            opsz: 18,
            slnt: 0
        },
    }, {
        name: "Adapter Hebrew Display Semibold",
        instance: {
            wght: 600,
            opsz: 18,
            slnt: 0
        },
    }, {
        name: "Adapter Hebrew Display Bold",
        instance: {
            wght: 700,
            opsz: 18,
            slnt: 0
        },
    }, {
        name: "Adapter Hebrew Display Extrabold",
        instance: {
            wght: 800,
            opsz: 18,
            slnt: 0
        },
    }, {
        name: "Adapter Hebrew Display Black",
        instance: {
            wght: 900,
            opsz: 18,
            slnt: 0
        },
    },

    {
        name: "Adapter Hebrew Display Thin Italic",
        instance: {
            wght: 100,
            opsz: 18,
            slnt: -10
        },
    }, {
        name: "Adapter Hebrew Display Extralight Italic",
        instance: {
            wght: 200,
            opsz: 18,
            slnt: -10
        },
    }, {
        name: "Adapter Hebrew Display Light Italic",
        instance: {
            wght: 300,
            opsz: 18,
            slnt: -10
        },
    }, {
        name: "Adapter Hebrew Display Italic",
        instance: {
            wght: 400,
            opsz: 18,
            slnt: -10
        },
    }, {
        name: "Adapter Hebrew Display Medium Italic",
        instance: {
            wght: 500,
            opsz: 18,
            slnt: -10
        },
    }, {
        name: "Adapter Hebrew Display Semibold Italic",
        instance: {
            wght: 600,
            opsz: 18,
            slnt: -10
        },
    }, {
        name: "Adapter Hebrew Display Bold Italic",
        instance: {
            wght: 700,
            opsz: 18,
            slnt: -10
        },
    }, {
        name: "Adapter Hebrew Display Extrabold Italic",
        instance: {
            wght: 800,
            opsz: 18,
            slnt: -10
        },
    }, {
        name: "Adapter Hebrew Display Black Italic",
        instance: {
            wght: 900,
            opsz: 18,
            slnt: -10
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
            min: 4.01,
            max: 17.99,
            init: 4,
            step: 0.01,
            label: "Optical size"
        },
        slnt: {
            min: -10,
            max: 0,
            init: 0,
            step: 0.01,
            label: "Slant"
        },
        fontfamily: {
            init: "Adapter Hebrew Display Black"
        }
    }
};