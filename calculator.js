const result = document.querySelector("#result");
result.textContent = "Result: " + 0;
let x = 0;
let y = 0;
let op = "";
const buttons = document.querySelectorAll("button");

function Add(num1, num2)
{
    return num1 + num2;
}

function Subtract(num1, num2)
{
    return num1 - num2;
}

function Multiply(num1, num2)
{
    return num1 * num2;
}

function Divide(num1, num2)
{
    return num1 / num2;
}

function Operate(num1, num2, operator)
{
    switch (operator)
    {
        case "+":
            return Add(num1, num2);
            break;
        case "-":
            return Subtract(num1, num2);
            break;
        case "x":
            return Multiply(num1, num2);
            break;
        case "/":
            return Divide(num1, num2);
            break;
    }
}


buttons.forEach((button) => {
    button.addEventListener("click", () => { 
        if (button.className == "DEL")
        {
            x = 0;
            op = "";
            y = 0;
        }
        else if (x == 0 && button.className == "NUM")
        {
            x = Number(button.id);
        }
        else if (x != 0 && op == "" && button.className == "NUM")
        {
            x = x * 10 + Number(button.id);
        }
        else if(x != 0 && op == "" && button.className == "OP" && button.id != "equal")
        {
            op = button.textContent;
        }
        else if (op != "" && button.className == "NUM" && y == 0)
        {
            y = Number(button.id);
        }
        else if (button.className == "NUM" && y != 0)
        {
            y = y * 10 + Number(button.id);
        }
        
        result.textContent = "Result: " + x + op;
        if (y)
        {
            result.textContent += y;
        }
        if(y != 0 && button.id == "equal")
        {
            x = Operate(x, y, op);
            op = "";
            y = 0;
            result.textContent ="Result: " + x;

        }
    })
});