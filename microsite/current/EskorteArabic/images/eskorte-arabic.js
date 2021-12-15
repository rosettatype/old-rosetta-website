var testerFonts = [{
    name: "Eskorte Arabic Regular",
    instance: {
        wght: 400
    }
}, {
    name: "Eskorte Arabic Medium",
    instance: {
        wght: 500
    }
}, {
    name: "Eskorte Arabic Semibold",
    instance: {
        wght: 600
    }
}, {
    name: "Eskorte Arabic Bold",
    instance: {
        wght: 700
    }
}, {
    name: "Eskorte Arabic Extrabold",
    instance: {
        wght: 800
    }
}];

var testerOptions = {
order: ["tester", ["wght"], "fontfamily"],
config: {
    fontfamily: {
        init: "Eskorte Arabic Extrabold"
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