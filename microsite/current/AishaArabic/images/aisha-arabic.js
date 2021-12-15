var testerFonts = [{
    name: "Aisha Arabic Regular",
    files: [testerFiles.Rg],
}, {
    name: "Aisha Arabic Semibold",
    files: [testerFiles.Sb],
}, {
    name: "Aisha Arabic Bold",
    files: [testerFiles.Bd],
}, {
    name: "Aisha Arabic Extrabold",
    files: [testerFiles.Eb],
}, ];

var testerOptions = {
    order: ["tester", "fontfamily"],
    config: {
        fontfamily: {
            init: "Aisha Arabic Extrabold"
        }
    }
};