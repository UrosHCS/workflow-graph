const data = {
    steps: [
        {
            name: "done",
            isBackward: false,
            position: "LAST"
        },
        {
            name: "finished",
            isBackward: false,
            position: "MIDDLE"
        },
        {
            name: "ready to proofread",
            isBackward: false,
            position: "MIDDLE"
        },
        {
            name: "ready to validate",
            isBackward: false,
            position: "MIDDLE"
        },
        {
            name: "ready to write",
            isBackward: false,
            position: "FIRST"
        },
        // {
        //     name: "rework asked",
        //     isBackward: true,
        //     position: "MIDDLE"
        // }
    ],
    moves: [
        {
            name: "approve",
            isBackward: false,
            from: {name: "ready to proofread"},
            to: {name: "ready to validate"}
        },
        // {
        //     name: "disapprove",
        //     isBackward: true,
        //     from: {name: "ready to proofread"},
        //     to: {name: "rework asked"}
        // },
        // {
        //     name: "invalidate",
        //     isBackward: true,
        //     from: {name: "ready to validate"},
        //     to: {name: "rework asked"}
        // },
        {
            name: "Mark as finished",
            isBackward: false,
            from: {name: "ready to write"},
            to: {name: "finished"}
        },
        {
            name: "Mark as reworked",
            isBackward: false,
            from: {name: "rework asked"},
            to: {name: "finished"}
        },
        {
            name: "Mark for proofread",
            isBackward: false,
            from: {name: "finished"},
            to: {name: "ready to proofread"}
        },
        {
            name: "validate",
            isBackward: false,
            from: {name: "ready to validate"},
            to: {name: "done"}
        }
    ]
}