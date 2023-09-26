let n1 = parseInt(prompt("Enter your First number here:"))
let operator = prompt("Enter your Operator here: ")
let n2 = parseInt(prompt("Enter your Second number here:"))

if(operator == '+'){
  let sum = n1 + n2
  console.log(sum);
} else if(operator == '-'){
  let sub = n1 - n2
  console.log(sub);
} else if(operator == '*'){
  let multiply = n1 * n2
  console.log(multiply);
} else if(operator == '/'){
  let div = n1 / n2
  console.log(div);
} else {
  console.log("Invalid")
}