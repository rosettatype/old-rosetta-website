var testerFonts = [{
    name: "Nassim Latin Regular",
    files: NassimUps,
    instance: {
        wght: 400
    }
}, {
    name: "Nassim Latin Medium",
    files: NassimUps,
    instance: {
        wght: 500
    }
}, {
    name: "Nassim Latin Semibold",
    files: NassimUps,
    instance: {
        wght: 600
    }
}, {
    name: "Nassim Latin Bold",
    files: NassimUps,
    instance: {
        wght: 700
    }
}, {
    name: "Nassim Latin Extrabold",
    files: NassimUps,
    instance: {
        wght: 800
    }
},

{
    name: "Nassim Latin Italic",
    files: NassimIts,
    instance: {
        wght: 400
    }
}, {
    name: "Nassim Latin Medium Italic",
    files: NassimIts,
    instance: {
        wght: 500
    }
}, {
    name: "Nassim Latin Semibold Italic",
    files: NassimIts,
    instance: {
        wght: 600
    }
}, {
    name: "Nassim Latin Bold Italic",
    files: NassimIts,
    instance: {
        wght: 700
    }
}, {
    name: "Nassim Latin Extrabold Italic",
    files: NassimIts,
    instance: {
        wght: 800
    }
}];

var testerOptions = {
order: ["tester", ["wght"], "fontfamily"],
config: {
    fontfamily: {
        init: "Nassim Latin Extrabold"
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