var testerFonts = [{
        name: "Gridlite Positive Extralight Square",
        instance: {
            wght: 200,
            BACK: 0,
            ESHP: 3
        }
    },
    {
        name: "Gridlite Positive Light Square",
        instance: {
            wght: 300,
            BACK: 0,
            ESHP: 3
        }
    },
    {
        name: "Gridlite Positive Regular Square",
        instance: {
            wght: 400,
            BACK: 0,
            ESHP: 3
        }
    },
    {
        name: "Gridlite Positive Semibold Square",
        instance: {
            wght: 600,
            BACK: 0,
            ESHP: 3
        }
    },
    {
        name: "Gridlite Positive Bold Square",
        instance: {
            wght: 700,
            BACK: 0,
            ESHP: 3
        }
    },
    {
        name: "Gridlite Positive Black Square",
        instance: {
            wght: 900,
            BACK: 0,
            ESHP: 3
        }
    },
    {
        name: "Gridlite Positive Semibold Cricle",
        instance: {
            wght: 600,
            BACK: 0,
            ESHP: 4
        }
    },
    {
        name: "Gridlite Negative Semibold Cricle",
        instance: {
            wght: 0,
            BACK: 600,
            ESHP: 4
        }
    },
    {
        name: "Gridlite Halfway Semibold Cricle",
        instance: {
            wght: 600,
            BACK: 300,
            ESHP: 4
        }
    }
];

var testerOptions = {
    order: ["tester", ["wght", "BACK", "ESHP"], "fontfamily"],
    config: {
        wght: {
            min: 1,
            max: 900,
            init: 500,
            step: 1,
            label: "Weight"
        },
        BACK: {
            min: 1,
            max: 900,
            init: 1,
            step: 1,
            label: "Background"
        },
        ESHP: {
            min: 1,
            max: 4,
            init: 3,
            step: 0.1,
            label: "Element Shape"
        }
    }
};