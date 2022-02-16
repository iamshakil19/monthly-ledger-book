
document.getElementById('calculate').addEventListener('click', function(){
    const incomeAmmount = getInputValue('income-ammount');
    const foodCost = getInputValue('food-cost');
    const houseCost = getInputValue('house-cost');
    const dressCost = getInputValue('dress-cost');
    const totalCost = foodCost + houseCost + dressCost;
    if(totalCost > incomeAmmount){
        alert("You can't spend more than you earn.");
    } else{
        document.getElementById('total-expenses').innerText = totalCost;
        document.getElementById('balance').innerText = incomeAmmount - totalCost;
    }
})

document.getElementById('save_button').addEventListener('click', function(){
    const income = getInputValue('income-ammount');
    const saveParcentage = getInputValue('save-parcentage');
    const saveMoney = income/saveParcentage;
    document.getElementById('save-ammount').innerText = saveMoney;
})



// function 
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