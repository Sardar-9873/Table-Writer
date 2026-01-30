const whichTable = prompt("Enter Which table do you want?");
const tableCount = prompt("Enter how many table count you want?");
alert("Check in Devtool Console");

for (let i = 1; i <= tableCount; i++) {
    console.log(whichTable + " x " + i + " = " + i * whichTable);
}