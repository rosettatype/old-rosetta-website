var testerFonts = [{
    name: "Gitan Latin Regular",
    files: GitanUps,
    instance: {
        wght: 400
    }
}, {
    name: "Gitan Latin Medium",
    files: GitanUps,
    instance: {
        wght: 500
    }
}, {
    name: "Gitan Latin Semibold",
    files: GitanUps,
    instance: {
        wght: 600
    }
}, {
    name: "Gitan Latin Bold",
    files: GitanUps,
    instance: {
        wght: 700
    }
}, {
    name: "Gitan Latin Extrabold",
    files: GitanUps,
    instance: {
        wght: 800
    }
},

{
    name: "Gitan Latin Italic",
    files: GitanIts,
    instance: {
        wght: 400
    }
}, {
    name: "Gitan Latin Medium Italic",
    files: GitanIts,
    instance: {
        wght: 500
    }
}, {
    name: "Gitan Latin Semibold Italic",
    files: GitanIts,
    instance: {
        wght: 600
    }
}, {
    name: "Gitan Latin Bold Italic",
    files: GitanIts,
    instance: {
        wght: 700
    }
}, {
    name: "Gitan Latin Extrabold Italic",
    files: GitanIts,
    instance: {
        wght: 800
    }
}];

var testerOptions = {
order: ["tester", ["wght"], "fontfamily"],
config: {
    fontfamily: {
        init: "Gitan Latin Extrabold"
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