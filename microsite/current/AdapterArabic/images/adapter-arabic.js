var testerFonts = [{
    name: "Adapter Arabic Text Extralight",
    instance: {
        wght: 200,
        opsz: 4
    },
}, {
    name: "Adapter Arabic Text Light",
    instance: {
        wght: 300,
        opsz: 4
    },
}, {
    name: "Adapter Arabic Text Regular",
    instance: {
        wght: 400,
        opsz: 4
    },
}, {
    name: "Adapter Arabic Text Medium",
    instance: {
        wght: 500,
        opsz: 4
    },
}, {
    name: "Adapter Arabic Text Semibold",
    instance: {
        wght: 600,
        opsz: 4
    },
}, {
    name: "Adapter Arabic Text Bold",
    instance: {
        wght: 700,
        opsz: 4
    },
}, {
    name: "Adapter Arabic Text Extrabold",
    instance: {
        wght: 800,
        opsz: 4
    },
}, {
    name: "Adapter Arabic Display Thin",
    instance: {
        wght: 100,
        opsz: 18
    },
}, {
    name: "Adapter Arabic Display Extralight",
    instance: {
        wght: 200,
        opsz: 18
    },
}, {
    name: "Adapter Arabic Display Light",
    instance: {
        wght: 300,
        opsz: 18
    },
}, {
    name: "Adapter Arabic Display Regular",
    instance: {
        wght: 400,
        opsz: 18
    },
}, {
    name: "Adapter Arabic Display Medium",
    instance: {
        wght: 500,
        opsz: 18
    },
}, {
    name: "Adapter Arabic Display Semibold",
    instance: {
        wght: 600,
        opsz: 18
    },
}, {
    name: "Adapter Arabic Display Bold",
    instance: {
        wght: 700,
        opsz: 18
    },
}, {
    name: "Adapter Arabic Display Extrabold",
    instance: {
        wght: 800,
        opsz: 18
    },
}, {
    name: "Adapter Arabic Display Black",
    instance: {
        wght: 900,
        opsz: 18
    },
}];

var testerOptions = {
    order: ["tester", ["wght", "opsz"], "fontfamily"],
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
        fontfamily: {
            init: "Adapter Arabic Display Black"
        }
    }
};