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

    Issues may also occur if 
*/

const MONTHS_FULL = [
    "January",
    "Febrary",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
]

const MONTHS_SHORT = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
]

function getDateAsNumbers(date) {
    spacePosition = date.search(" ")

    day = date.substring(0, spacePosition)
    dayNumber = day.replace(/[a-z]+/, "")
    dayNumber = parseInt(dayNumber)

    // Add 1 to not include the space in the substring
    monthWord = date.substring(spacePosition + 1)
    // Add 1 to remove array index offset
    monthNumber = MONTHS_FULL.indexOf(monthWord) + 1

    if (monthNumber == 0) {
        monthNumber = MONTHS_SHORT.indexOf(monthWord) + 1

        // Month could be formatted as short form.
        if (monthNumber == 0) {
            return -1, -1
        }
    }

    console.log(dayNumber, monthNumber)

    return dayNumber, monthNumber
}

function catchExpection(value) {
    console.log("Unable to sort ingredient due to incorrect formatting:")
    console.log(value)
    return
}

function sortByDate(input) {
    const expiryDates = []
    const output = []

    // Nested function in order to work with the forEach
    // iterator
    function extractInfo(value) {
        expiryWordPosition = value.search("expires ")
        
        if (expiryWordPosition == -1) {
            catchExpection(value)
            return
        }

        datePosition = expiryWordPosition + "expires ".length
        date = value.substring(datePosition)
        
        if (date == "n/a") {
            return
        }

        let day, month = getDateAsNumbers(date)
        if (day == -1) {
            catchExpection()
            return
        }
    }

    input.forEach(extractInfo)

    return output
}

module.exports = sortByDate