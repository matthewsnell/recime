/*
    Expiry Sorting algorithm
    
    Single function export.

    Given input strings in the input format:

    {
        "200g - Red pepper - expires 19th March",
        "300g - Tomatoes - expires 17th March",
        "500g Chicken Breast - expires 15th March",
        "4 Eggs - expires 23rd Feb",
        "Dry White Rice - expires n/a",
        "Dry Spaghetti 500g - expires n/a"
    }
    
    returns an output array of the same strings, sorted
    by order of their expiry date.

    Due to the lack of year indicator, issues may arise
    when handling inputs that wrap around, such as
    December and January of different years.


*/

function sortByDate(input) {
    const expiryDates = []
    const output = []

    // Nested function in order to work with the forEach
    // iterator
    function extractInfo(value) {
        return
    }

    input.forEach(extractInfo)

    return output
}

module.exports = sortByDate