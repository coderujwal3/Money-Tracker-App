let DebitsAmount = [];
let totalAmount = 0;
const categorySelect = document.getElementById("category_select");
const amountInput = document.getElementById("amount_input");
const infoInput = document.getElementById("info");
const dateInput = document.getElementById("date_input");
const addBtn = document.getElementById("add_button");
const totalAmountBox = document.getElementById("total-amount");
const tableBody = document.getElementById("table-body");

addBtn.addEventListener('click', function () {
    const category = categorySelect.value;
    const info = infoInput.value;
    const amount = parseInt(amountInput.value);
    const date = dateInput.value;

    if (category === "" || info === "" || date === "") {
        alert("Please fill details");
        return;
    }
    if (isNaN(amount) || amount < 0) {
        alert("amount is invalid!");
        return;
    }

    DebitsAmount.push({ category, amount, info, date });
    if (category === 'Credit') {
        totalAmount += amount;
    }
    if (category === 'Debit') {
        totalAmount -= amount;
    }

    totalAmountBox.textContent = totalAmount;

    const newRow = tableBody.insertRow();

    const categoryCell = newRow.insertCell();
    const amountCell = newRow.insertCell();
    const infoCell = newRow.insertCell();
    const dateCell = newRow.insertCell();
    const deleteCell = newRow.insertCell();

    const deleteButton = document.createElement('button');
    deleteButton.textContent = "Delete";
    deleteButton.classList.add("delete-btn");

    deleteButton.addEventListener('click', () => {
        DebitsAmount.splice(DebitsAmount.indexOf(expense), 1);
        if (category === 'Credit') {
            totalAmount -= amount;
        }
        if (category === 'Debit') {
            totalAmount += amount;
        }

        totalAmountBox.textContent = totalAmount;
        tableBody.removeChild(newRow);
    });
    const expense = DebitsAmount[DebitsAmount.length - 1];
    categoryCell.textContent = expense.category;
    amountCell.textContent = expense.amount;
    infoCell.textContent = expense.info;
    dateCell.textContent = expense.date;
    deleteCell.appendChild(deleteButton);
});

for (const expense of DebitsAmount) {
    if (category === 'Credit') {
        totalAmount += amount;
    }
    if (category === 'Debit') {
        totalAmount -= amount;
    }

    totalAmountBox.textContent = totalAmount;
    const newRow = tableBody.insertRow();
    const categoryCell = newRow.insertCell();
    const amountCell = newRow.insertCell();
    const infoCell = newRow.insertCell();
    const dateCell = newRow.insertCell();
    const deleteCell = newRow.insertCell();

    const deleteButton = document.createElement('button');
    deleteButton.textContent = "Delete";
    deleteButton.classList.add("delete-btn");

    deleteButton.addEventListener('click', () => {
        DebitsAmount.splice(DebitsAmount.indexOf(expense), 1)
        if (category === 'Credit') {
            totalAmount -= amount;
        }
        if (category === 'Debit') {
            totalAmount += amount;
        }

        totalAmountBox.textContent = totalAmount;
        tableBody.removeChild(newRow);
    });
    const expense = DebitsAmount[DebitsAmount.length - 1];
    amountCell.textContent = expense.amount;
    categoryCell.textContent = expense.category;
    infoCell.textContent = expense.info;
    dateCell.textContent = expense.date;
    deleteCell.appendChild(deleteButton);
};