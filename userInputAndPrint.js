const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Starting Number: ", (start) => {
    rl.question("Ending Number: ", (end) => {
        let f = parseInt(start);
        let l = parseInt(end);

        if (isNaN(f) || isNaN(l)) {
            console.log("Please enter valid numbers.");
        } else if (f > l) {
            console.log("Starting number should be less than or equal to the ending number.");
        } else {
            for (let i = f; i <= l; i++) {
                console.log(i);
            }
        }

        rl.close();
    });
});
