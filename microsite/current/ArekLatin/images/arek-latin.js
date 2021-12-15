var testerFonts = [{
        name: "Arek Latin Regular",
        files: ArekUps,
        instance: {
            wght: 400
        }
    }, {
        name: "Arek Latin Semibold",
        files: ArekUps,
        instance: {
            wght: 600
        }
    }, {
        name: "Arek Latin Bold",
        files: ArekUps,
        instance: {
            wght: 700
        }
    }, {
        name: "Arek Latin Extrabold",
        files: ArekUps,
        instance: {
            wght: 800
        }
    },

    {
        name: "Arek Latin Italic",
        files: ArekIts,
        instance: {
            wght: 400
        }
    }, {
        name: "Arek Latin Semibold Italic",
        files: ArekIts,
        instance: {
            wght: 600
        }
    }, {
        name: "Arek Latin Bold Italic",
        files: ArekIts,
        instance: {
            wght: 700
        }
    }, {
        name: "Arek Latin Extrabold Italic",
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
            init: "Arek Latin Extrabold"
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