
document.getElementById('calculate').addEventListener('click', function(){
    const incomeAmmount = getInputValue('income-ammount');
    // const foodCost = getInputValue('food-cost');
    // const houseCost = getInputValue('house-cost');
    // const dressCost = getInputValue('dress-cost');
    // const totalCost = foodCost + houseCost + dressCost;
    const totalCost = update();
    if(totalCost > incomeAmmount){
        alert("You can't spend more than you earn.");
    } else{
        document.getElementById('total-expenses').innerText = totalCost;
        document.getElementById('balance').innerText = incomeAmmount - totalCost;
    }
})

document.getElementById('save_button').addEventListener('click', function(){
    const income = getInputValue('income-ammount');
    const totalCost = income - update()
    const saveParcentage = getInputValue('save-parcentage');
    const saveMoney = income*saveParcentage/100;
    const lastMoney = totalCost - saveMoney
    document.getElementById('save-ammount').innerText = saveMoney;
    document.getElementById('remaining-balance').innerText = lastMoney;
})

// function
function update(){
    const foodCost = getInputValue('food-cost');
    const houseCost = getInputValue('house-cost');
    const dressCost = getInputValue('dress-cost');
    const total = foodCost + houseCost + dressCost;
    return total;
}

function getInputValue(inputId){
    const input = document.getElementById(inputId);
    const inputValue = parseInt(input.value);
    if(inputValue <= 0){
       alert("Please enter a valid number");
    }
    else{
        return inputValue;
    }
}