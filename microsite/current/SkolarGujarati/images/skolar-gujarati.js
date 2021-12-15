var testerFonts = [{
    name: "Skolar Gujarati Light",
    files: [testerFiles.Lt],
}, {
    name: "Skolar Gujarati Regular",
    files: [testerFiles.Rg],
}, {
    name: "Skolar Gujarati Medium",
    files: [testerFiles.Me],
}, {
    name: "Skolar Gujarati Semibold",
    files: [testerFiles.Sb],
}, {
    name: "Skolar Gujarati Bold",
    files: [testerFiles.Bd],
}];

var testerOptions = {
    order: ["tester", "fontfamily"],
    config: {
        fontfamily: {
            init: "Skolar Gujarati Regular"
        }
    }
};