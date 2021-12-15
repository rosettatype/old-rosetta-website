var testerFonts = [{
    name: "Marlik Thin",
    instance: {
        wght: 100
    }
}, {
    name: "Marlik Extralight",
    instance: {
        wght: 200
    }
}, {
    name: "Marlik Light",
    instance: {
        wght: 300
    }
}, {
    name: "Marlik Regular",
    instance: {
        wght: 400
    }
}, {
    name: "Marlik Medium",
    instance: {
        wght: 500
    }
}, {
    name: "Marlik Semibold",
    instance: {
        wght: 600
    }
}, {
    name: "Marlik Bold",
    instance: {
        wght: 700
    }
}, {
    name: "Marlik Extrabold",
    instance: {
        wght: 800
    }
}, {
    name: "Marlik Black",
    instance: {
        wght: 900
    }
}];

var testerOptions = {
    order: ["tester", ["wght"], "fontfamily"],
    config: {
        fontfamily: {
            init: "Marlik Extrabold"
        },
        wght: {
            min: 100,
            max: 900,
            init: 600,
            step: 1,
            label: "Weight"
        }
    }
};