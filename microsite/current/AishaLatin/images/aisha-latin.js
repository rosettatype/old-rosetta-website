var testerFonts = [{
    name: "Aisha Latin Regular",
    files: [testerFiles.Rg],
}, {
    name: "Aisha Latin Semibold",
    files: [testerFiles.Sb],
}, {
    name: "Aisha Latin Bold",
    files: [testerFiles.Bd],
}, {
    name: "Aisha Latin Extrabold",
    files: [testerFiles.Eb],
}, ];

var testerOptions = {
    order: ["tester", "fontfamily"],
    config: {
        fontfamily: {
            init: "Aisha Latin Extrabold"
        }
    }
};