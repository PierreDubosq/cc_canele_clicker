var canele_nbr = 0;
var oven_nbr = 0;

function add_count_canele()
{
    canele_nbr += 1;
    document.getElementById("canele_nbr").innerHTML = canele_nbr;
    if (canele_nbr >= 25) {
        document.getElementById("buy_btn").disabled = false;
    }
}

function add_oven()
{
    canele_nbr -= 25;
    document.getElementById("canele_nbr").innerHTML = canele_nbr;
    if (canele_nbr < 25) {
        document.getElementById("buy_btn").disabled = true;
    }
    oven_nbr += 1;
}

setInterval(() => {
    canele_nbr += oven_nbr * 5;
    document.getElementById("canele_nbr").innerHTML = canele_nbr;
    if (canele_nbr >= 25) {
        document.getElementById("buy_btn").disabled = false;
    }
}, 5000);