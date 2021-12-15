var testerFonts = [{
        name: "Skolar PE Light",
        files: SkolarPEUps,
        instance: {
            wght: 300
        }
    }, {
        name: "Skolar PE Regular",
        files: SkolarPEUps,
        instance: {
            wght: 400
        }
    }, {
        name: "Skolar PE Medium",
        files: SkolarPEUps,
        instance: {
            wght: 500
        }
    }, {
        name: "Skolar PE Semibold",
        files: SkolarPEUps,
        instance: {
            wght: 600
        }
    }, {
        name: "Skolar PE Bold",
        files: SkolarPEUps,
        instance: {
            wght: 700
        }
    },
    
    {
        name: "Skolar PE Light Italic",
        files: SkolarPEIts,
        instance: {
            wght: 300
        }
    }, {
        name: "Skolar PE Italic",
        files: SkolarPEIts,
        instance: {
            wght: 400
        }
    }, {
        name: "Skolar PE Medium Italic",
        files: SkolarPEIts,
        instance: {
            wght: 500
        }
    }, {
        name: "Skolar PE Semibold Italic",
        files: SkolarPEIts,
        instance: {
            wght: 600
        }
    }, {
        name: "Skolar PE Bold Italic",
        files: SkolarPEIts,
        instance: {
            wght: 700
        }
    }
];

var testerOptions = {
    order: ["tester", ["wght"], "fontfamily"],
    config: {
        fontfamily: {
            init: "Skolar PE Bold"
        },
        wght: {
            min: 300,
            max: 700,
            init: 900,
            step: 1,
            label: "Weight"
        }
    }
};