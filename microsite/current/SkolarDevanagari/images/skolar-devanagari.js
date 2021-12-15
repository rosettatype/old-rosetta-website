var testerFonts = [{
    name: "Skolar Devanagari Light",
    files: [testerFiles.Lt],
}, {
    name: "Skolar Devanagari Regular",
    files: [testerFiles.Rg],
}, {
    name: "Skolar Devanagari Medium",
    files: [testerFiles.Me],
}, {
    name: "Skolar Devanagari Semibold",
    files: [testerFiles.Sb],
}, {
    name: "Skolar Devanagari Bold",
    files: [testerFiles.Bd],
}];

var testerOptions = {
    order: ["tester", "fontfamily"],
    config: {
        fontfamily: {
            init: "Skolar Devanagari Regular"
        }
    }
};