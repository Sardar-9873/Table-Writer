let whichTable = 0;
let tableCount = 0;
let wantedTable = "";

const tableWrapper = document.getElementById("table-wrapper");
const tableInput = tableWrapper.querySelector("input");
const tableNext = tableWrapper.querySelector("button");

const tableCountWrapper = document.getElementById("table-count-wrapper");
const tableCountInput = tableCountWrapper.querySelector("input");
const tableCountNext = tableCountWrapper.querySelector("button");

const resultWrapper = document.getElementById("result-wrapper");
const resultEl = resultWrapper.querySelector("#result");

const copyButton = document.getElementById("copy-button");

function getUserTable(){
    const value = tableInput.value;
    whichTable = Number(value);
    tableWrapper.remove();
    tableCountWrapper.classList.replace("none" , "flex")
}
tableNext.addEventListener("click" , getUserTable);

function getUserTableCount(){
    const value = tableCountInput.value;
    tableCount = Number(value);
    tableCountWrapper.remove();
    resultWrapper.classList.replace("none" , "block");
    generateTable();
}
tableCountNext.addEventListener("click" , getUserTableCount);

function generateTable(){
    for (let i = 1; i <= tableCount; i++) {
    const table = whichTable + " x " + i + " = " + i * whichTable;
    wantedTable += table + "\n\n";
    }
    resultEl.innerText = wantedTable;   
}

function copyTable(){
    const text = resultEl.innerText;
    navigator.clipboard.writeText(text);
    copyButton.innerText = "Copied ✓";
}
copyButton.addEventListener("click", copyTable);