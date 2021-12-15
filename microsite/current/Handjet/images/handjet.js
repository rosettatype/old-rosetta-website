var testerFonts = [{
    name: "Handjet Thin",
    instance: {
        wght: 100
    }
}, {
    name: "Handjet Extralight",
    instance: {
        wght: 200
    }
}, {
    name: "Handjet Light",
    instance: {
        wght: 300
    }
}, {
    name: "Handjet Regular",
    instance: {
        wght: 400
    }
}, {
    name: "Handjet Medium",
    instance: {
        wght: 500
    }
}, {
    name: "Handjet Semibold",
    instance: {
        wght: 600
    }
}, {
    name: "Handjet Bold",
    instance: {
        wght: 700
    }
}, {
    name: "Handjet Extrabold",
    instance: {
        wght: 800
    }
}, {
    name: "Handjet Black",
    instance: {
        wght: 900
    }
}];

var testerOptions = {
    order: ["tester", ["wght", "EGRD", "ESHP"], "fontfamily"],
    config: {
        fontfamily: {
            init: "Handjet Regular"
        },

        wght: {
            min: 100,
            max: 900,
            init: 400,
            step: 1,
            label: "Weight"
        },

        EGRD: {
            min: 1.0,
            max: 2.0,
            init: 1.0,
            step: 0.01,
            label: "Element Grid"
        },

        ESHP: {
            min: 0.00,
            max: 16.00,
            init: 2.00,
            step: 0.10,
            label: "Element Shape"
        },
    }
};