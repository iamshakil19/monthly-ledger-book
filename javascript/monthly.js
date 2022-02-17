
document.getElementById('calculate').addEventListener('click', function(){
    const incomeAmmount = getInputValue('income-ammount');
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
    const balance = income - update()
    const saveParcentage = getInputValue('save-parcentage');
    const saveMoney = income*saveParcentage/100;
    if(saveMoney > balance){
        return alert("You can't save more than balance")
    }
    else{
    const lastMoney = balance - saveMoney
    document.getElementById('save-ammount').innerText = saveMoney;
    document.getElementById('remaining-balance').innerText = lastMoney;
    }
})

document.getElementById('save-parcentage').addEventListener('keyup', function(event){
    const button = document.getElementById('save_button');
    if(event.target.value > 0){
        button.removeAttribute('disabled');
    }
    else{
        button.setAttribute('disabled', true)
    }
})

// function start

function getInputValue(inputId){
    const input = document.getElementById(inputId);
    const inputValue = parseInt(input.value);
    if(inputValue <= 0){
      return alert("Please enter a valid number");
    }
    else{
        return inputValue;
    }
}

function update(){
    const foodCost = getInputValue('food-cost');
    const houseCost = getInputValue('house-cost');
    const dressCost = getInputValue('dress-cost');
    const total = foodCost + houseCost + dressCost;
    return total;
}