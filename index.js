#! usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
const myBalance = 500000;
const myPincode = 7654;
let isContinue = true;
const pinCode = await inquirer.prompt({
    message: "Enter your pin code",
    type: "number",
    name: "Pin_code",
});
if (pinCode.Pin_code === 7654) {
    do {
        const myLanguage = await inquirer.prompt({
            message: "Enter your language: ",
            type: "list",
            name: "Language",
            choices: ["urdu", "English"],
        });
        if (myLanguage.Language === "urdu") {
            console.log("currently not available");
        }
        else {
            console.log(chalk.green.bold("\t\nWELCOME TO ATM\n\t"));
        }
        const myOptions = await inquirer.prompt({
            message: " Select any option:",
            type: "list",
            name: "Options",
            choices: [
                "Withdraw amount",
                "Balance check",
                "Deposite amount",
                "mini statment",
                "Fast cash",
            ],
        });
        if (myOptions.Options === "Withdraw amount") {
            let Withdraw = await inquirer.prompt({
                message: "Enter Your Amount",
                type: "number",
                name: "Amount",
            });
            if (Withdraw.Amount < myBalance) {
                console.log(`Your remaining Balance is: ${myBalance - Withdraw.Amount}`);
            }
            else {
                console.log("Isufficient balance");
            }
        }
        else if (myOptions.Options === "Balance check") {
            console.log("Your balance is" + " " + myBalance);
        }
        else if (myOptions.Options === "Deposite amount") {
            const depositAmount = await inquirer.prompt({
                type: "number",
                name: "Deposite_Amount",
                message: "Enter your amount",
            });
            if (depositAmount.Deposite_Amount <= myBalance) {
                console.log(`Your remaining balance is:${myBalance - depositAmount.Deposite_Amount}`);
            }
            else {
                console.log("Not enough money!");
            }
        }
        else if (myOptions.Options === "mini statment") {
            console.log("Crrently not available");
        }
        else if (myOptions.Options === "Fast cash") {
            const Fast_Cash = await inquirer.prompt({
                type: "list",
                name: "Fast_cash_amount",
                message: "Enter your amount",
                choices: ["20000", "10000", "5000", "3000", "2000", "1000"],
            });
            if (Fast_Cash.Fast_cash_amount < myBalance) {
                console.log(`Your remaining balance is: ${myBalance - Fast_Cash.Fast_cash_amount}`);
            }
        }
        let while_ans = await inquirer.prompt({
            type: "confirm",
            name: "condition",
            message: "Do you want to continue",
        });
        if (while_ans.condition === false) {
            isContinue = true;
        }
    } while (isContinue);
}
else {
    console.log("Invalid pin code!");
}
