// 


// Kilometer To Meter

function kilometerToMeter(kilo) {

    var meter = kilo * 1000;
    return meter;
}


//Budget Calculator

function budgetCalculator(watch, phone, laptop) {

    var total = (watch * 50) + (phone * 100) + (laptop * 500);

    return total;
}


//Hotel cost

function hotelCost(day) {
    var cost = "";

    if (day <= 10) {

        cost = day * 100;

    } 
    else if (day <= 20) {

        var firstPart = 10 * 100;
        var remain = day - 10;
        var secondPart = remain * 80;
        cost = firstPart + secondPart;
    } 
    else {

        var firstPart = 10 * 100;
        var secondPart = 20 * 80;
        var remain = day - 20;
        var thirdPart = remain * 50;
        cost = firstPart + secondPart + thirdPart;
    }

    return cost;
}

// Mega Friend

function megaFriend(friends) {

    var maxFnd = friends[0];

    for (var i = 0; i < friends.length; i++){

        var char = friends[i];

        if (friends[i].length > maxFnd.length){

            maxFnd = char;
        }
    }
    return maxFnd;
}