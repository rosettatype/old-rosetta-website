var testerFonts = [{
        name: "Avory PE Thin",
        files: AvoryUps,
        instance: {
            wght: 100
        }
    }, {
        name: "Avory PE Extralight",
        files: AvoryUps,
        instance: {
            wght: 200
        }
    }, {
        name: "Avory PE Light",
        files: AvoryUps,
        instance: {
            wght: 300
        }
    }, {
        name: "Avory PE Regular",
        files: AvoryUps,
        instance: {
            wght: 400
        }
    }, {
        name: "Avory PE Medium",
        files: AvoryUps,
        instance: {
            wght: 500
        }
    }, {
        name: "Avory PE Semibold",
        files: AvoryUps,
        instance: {
            wght: 600
        }
    }, {
        name: "Avory PE Bold",
        files: AvoryUps,
        instance: {
            wght: 700
        }
    }, {
        name: "Avory PE Extrabold",
        files: AvoryUps,
        instance: {
            wght: 800
        }
    }, {
        name: "Avory PE Black",
        files: AvoryUps,
        instance: {
            wght: 900
        }
    },

    {
        name: "Avory PE Thin Italic",
        files: AvoryIts,
        instance: {
            wght: 100
        }
    }, {
        name: "Avory PE Extralight Italic",
        files: AvoryIts,
        instance: {
            wght: 200
        }
    }, {
        name: "Avory PE Light Italic",
        files: AvoryIts,
        instance: {
            wght: 300
        }
    }, {
        name: "Avory PE Italic",
        files: AvoryIts,
        instance: {
            wght: 400
        }
    }, {
        name: "Avory PE Medium Italic",
        files: AvoryIts,
        instance: {
            wght: 500
        }
    }, {
        name: "Avory PE Semibold Italic",
        files: AvoryIts,
        instance: {
            wght: 600
        }
    }, {
        name: "Avory PE Bold Italic",
        files: AvoryIts,
        instance: {
            wght: 700
        }
    }, {
        name: "Avory PE Extrabold Italic",
        files: AvoryIts,
        instance: {
            wght: 800
        }
    }, {
        name: "Avory PE Black Italic",
        files: AvoryIts,
        instance: {
            wght: 900
        }
    }, 
];

var testerOptions = {
    order: ["tester", ["wght"], "fontfamily"],
    config: {
        fontfamily: {
            init: "Avory PE Medium"
        },
        wght: {
            min: 100,
            max: 900,
            init: 500,
            step: 1,
            label: "Weight"
        }
    }
};