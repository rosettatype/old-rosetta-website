var testerFonts = [{
        name: "Arek Armenian Regular",
        files: ArekUps,
        instance: {
            wght: 400
        }
    }, {
        name: "Arek Armenian Semibold",
        files: ArekUps,
        instance: {
            wght: 600
        }
    }, {
        name: "Arek Armenian Bold",
        files: ArekUps,
        instance: {
            wght: 700
        }
    }, {
        name: "Arek Armenian Extrabold",
        files: ArekUps,
        instance: {
            wght: 800
        }
    },

    {
        name: "Arek Armenian Italic",
        files: ArekIts,
        instance: {
            wght: 400
        }
    }, {
        name: "Arek Armenian Semibold Italic",
        files: ArekIts,
        instance: {
            wght: 600
        }
    }, {
        name: "Arek Armenian Bold Italic",
        files: ArekIts,
        instance: {
            wght: 700
        }
    }, {
        name: "Arek Armenian Extrabold Italic",
        files: ArekIts,
        instance: {
            wght: 800
        }
    }
];

var testerOptions = {
    order: ["tester", ["wght"], "fontfamily"],
    config: {
        fontfamily: {
            init: "Arek Armenian Extrabold"
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