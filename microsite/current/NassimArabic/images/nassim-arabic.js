var testerFonts = [{
    name: "Nassim Arabic Regular",
    instance: {
        wght: 400
    }
}, {
    name: "Nassim Arabic Medium",
    instance: {
        wght: 500
    }
}, {
    name: "Nassim Arabic Semibold",
    instance: {
        wght: 600
    }
}, {
    name: "Nassim Arabic Bold",
    instance: {
        wght: 700
    }
}, {
    name: "Nassim Arabic Extrabold",
    instance: {
        wght: 800
    }
}];

var testerOptions = {
order: ["tester", ["wght"], "fontfamily"],
config: {
    fontfamily: {
        init: "Nassim Arabic Extrabold"
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