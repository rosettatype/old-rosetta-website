var testerFonts = [{
    name: "Skolar Sans Arabic Thin",
    instance: {
        wght: 100
    }
}, {
    name: "Skolar Sans Arabic Extralight",
    instance: {
        wght: 200
    }
}, {
    name: "Skolar Sans Arabic Light",
    instance: {
        wght: 300
    }
}, {
    name: "Skolar Sans Arabic Regular",
    instance: {
        wght: 400
    }
}, {
    name: "Skolar Sans Arabic Medium",
    instance: {
        wght: 500
    }
}, {
    name: "Skolar Sans Arabic Semibold",
    instance: {
        wght: 600
    }
}, {
    name: "Skolar Sans Arabic Bold",
    instance: {
        wght: 700
    }
}, {
    name: "Skolar Sans Arabic Extrabold",
    instance: {
        wght: 800
    }
}, {
    name: "Skolar Sans Arabic Black",
    instance: {
        wght: 900
    }
}];

var testerOptions = {
order: ["tester", ["wght"], "fontfamily"],
config: {
    fontfamily: {
        init: "Skolar Sans Arabic Black"
    },
    wght: {
        min: 100,
        max: 900,
        init: 900,
        step: 1,
        label: "Weight"
    }
}
};