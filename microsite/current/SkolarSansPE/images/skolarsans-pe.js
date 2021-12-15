var testerFonts = [{
        name: "Skolar Sans PE Thin",
        files: SkolarSansPEUps,
        instance: {
            wght: 100
        }
    }, {
        name: "Skolar Sans PE Extralight",
        files: SkolarSansPEUps,
        instance: {
            wght: 200
        }
    }, {
        name: "Skolar Sans PE Light",
        files: SkolarSansPEUps,
        instance: {
            wght: 300
        }
    }, {
        name: "Skolar Sans PE Regular",
        files: SkolarSansPEUps,
        instance: {
            wght: 400
        }
    }, {
        name: "Skolar Sans PE Medium",
        files: SkolarSansPEUps,
        instance: {
            wght: 500
        }
    }, {
        name: "Skolar Sans PE Semibold",
        files: SkolarSansPEUps,
        instance: {
            wght: 600
        }
    }, {
        name: "Skolar Sans PE Bold",
        files: SkolarSansPEUps,
        instance: {
            wght: 700
        }
    }, {
        name: "Skolar Sans PE Extrabold",
        files: SkolarSansPEUps,
        instance: {
            wght: 800
        }
    }, {
        name: "Skolar Sans PE Black",
        files: SkolarSansPEUps,
        instance: {
            wght: 900
        }
    },

    {
        name: "Skolar Sans PE Thin Italic",
        files: SkolarSansPEIts,
        instance: {
            wght: 100
        }
    }, {
        name: "Skolar Sans PE Extralight Italic",
        files: SkolarSansPEIts,
        instance: {
            wght: 200
        }
    }, {
        name: "Skolar Sans PE Light Italic",
        files: SkolarSansPEIts,
        instance: {
            wght: 300
        }
    }, {
        name: "Skolar Sans PE Italic",
        files: SkolarSansPEIts,
        instance: {
            wght: 400
        }
    }, {
        name: "Skolar Sans PE Medium Italic",
        files: SkolarSansPEIts,
        instance: {
            wght: 500
        }
    }, {
        name: "Skolar Sans PE Semibold Italic",
        files: SkolarSansPEIts,
        instance: {
            wght: 600
        }
    }, {
        name: "Skolar Sans PE Bold Italic",
        files: SkolarSansPEIts,
        instance: {
            wght: 700
        }
    }, {
        name: "Skolar Sans PE Extrabold Italic",
        files: SkolarSansPEIts,
        instance: {
            wght: 800
        }
    }, {
        name: "Skolar Sans PE Black Italic",
        files: SkolarSansPEIts,
        instance: {
            wght: 900
        }
    }
];

var testerOptions = {
    order: ["tester", ["wght", "wdth"], "fontfamily"],
    config: {
        fontfamily: {
            init: "Skolar Sans PE Black"
        },
        wght: {
            min: 100,
            max: 900,
            init: 900,
            step: 1,
            label: "Weight"
        },
        wdth: {
            min: 80,
            max: 120,
            init: 100,
            step: 1,
            label: "Width"
        }
    }
};