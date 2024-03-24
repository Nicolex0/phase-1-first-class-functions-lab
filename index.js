//Function to returnFirstTwoDrivers
const returnFirstTwoDrivers = function(driversArray) { 
    return driversArray.slice(0, 2); 
};

//Function to returnLastTwoDrivers
const returnLastTwoDrivers =function(driversArray) {
    return driversArray.slice(-2);
};

// Function selectingDrivers
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

// Function to createFareMultiplier
const createFareMultiplier = function(integer) {
    return function(fare) {
        return fare * integer;
    };
};

// Function fareDoubler
const fareDoubler = createFareMultiplier(2);

// Function fareTripler
const fareTripler = createFareMultiplier(3);

//Function to selectDifferentDrivers
const selectDifferentDrivers = function(driversArray, returnDriversFunction) {
    return returnDriversFunction(driversArray);
}