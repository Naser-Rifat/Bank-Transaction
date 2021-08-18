function getInput(inputId) {

    //get input
    const getInput = document.getElementById(inputId);
    const getInputValue = getInput.value;
    const convertgetInput = parseFloat(getInputValue);

    //clear value
    getInput.value = '';

    return convertgetInput;


}

function updateBalance(convertGetUpdate, balanceId) {



    // current deposite
    const currentUpdate = document.getElementById(balanceId);
    const currentUpdateInnerText = currentUpdate.innerText;
    const convertcurrentUpdate = parseFloat(currentUpdateInnerText);


    // calculate deposite
    currentUpdate.innerText = convertGetUpdate + convertcurrentUpdate;


}

function totalBalance() {

    const updateTotal = document.getElementById('total-balance');
    const updateTotalinnerText = updateTotal.innerText;
    const convertupdateTotalinnerText = parseFloat(updateTotalinnerText);
    return convertupdateTotalinnerText;
}


function updateTotalBalance(updatedAmount, add) {

    //upadate total blance
    const updateTotal = document.getElementById('total-balance');
    const convertupdateTotalinnerText = totalBalance();
    if (add == true) {
        updateTotal.innerText = convertupdateTotalinnerText + updatedAmount;

    }

    else {
        updateTotal.innerText = convertupdateTotalinnerText - updatedAmount;


    }

}


// ..........deposite...........
document.getElementById('deposite-btn').addEventListener('click', function () {

    const convertGetDeposite = getInput('deposite-input');

    if (convertGetDeposite > 0) {

        updateBalance(convertGetDeposite, 'deposite-balance');
        updateTotalBalance(convertGetDeposite, true);
    }

    else {
        console.log('Sorry')

    }




    // //get deposite
    // const getDeposite = document.getElementById('deposite-input');
    // const getDepositeValue = getDeposite.value;
    // const convertGetDeposite = parseFloat(getDepositeValue);

    // current deposite
    // const currentDeposite = document.getElementById('deposite-balance');
    // const currentDepositeInnerText = currentDeposite.innerText;
    // const convertCurrentDeposite = parseFloat(currentDepositeInnerText);

    // // calculate deposite
    // currentDeposite.innerText = convertGetDeposite + convertCurrentDeposite;

    // //update total-balance
    // const totalBalanceUpdate = document.getElementById('total-balance');

    // totalBalanceUpdate.innerText = parseFloat(totalBalanceUpdate.innerText) + convertGetDeposite;



});



//.......... withdraw..........

document.getElementById('withdraw-btn').addEventListener('click', function () {


    const convertWithdrawValue = getInput('withdraw-input');

    const currentTotalBalance = totalBalance();
    if (convertWithdrawValue > 0 && currentTotalBalance > convertWithdrawValue) {
        updateBalance(convertWithdrawValue, 'withdraw-balance');
        updateTotalBalance(convertWithdrawValue, false);

    }

    if (currentTotalBalance > convertWithdrawValue) {
        console.log('You have to withdraw which is in your account')

    }




    // // withdraw balance 
    // const getWithdraw = document.getElementById('withdraw-input');
    // const getWithdrawValue = getWithdraw.value;
    // const convertWithdrawValue = parseFloat(getWithdrawValue);


    // current withdraw
    // const currentWithdrawValue = document.getElementById('withdraw-balance');
    // const convertcurrentWithdrawValue = parseFloat(currentWithdrawValue.innerText);


    // //update withdraw
    // currentWithdrawValue.innerText = convertWithdrawValue + convertcurrentWithdrawValue;

    // //upadate total blance
    // const updateTotal = document.getElementById('total-balance');
    // const updateTotalinnerText = updateTotal.innerText;
    // updateTotal.innerText = updateTotalinnerText - convertWithdrawValue;

    // //clear value
    // getWithdraw.value = '';





});


