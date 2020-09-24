/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

function createEmployeeRecord(array) {
    return {
        firstName: array[0],
        familyName: array[1],
        title: array[2],
        payPerHour: array[3],
        timeInEvents: [],
        timeOutEvents: []
    }
    
}

function createEmployeeRecords(array) {
    return array.map(thisArg => createEmployeeRecord(thisArg))
}

function createTimeInEvent(dateStamp) {
    let [date, hour] = dateStamp.split(' ')
    this.timeInEvents.push({"type": "TimeIn", "hour": hour, "date": date })
    return this
}

function createTimeOutEvent(dateStamp) {
    let [date, hour] = dateStamp.split(' ')
    this.timeOutEvents.push({"type": "TimeOut", "hour": hour, "date": date })
    return this 
}

function hoursWorkedOnDate(date) {
    let timeIn = this.timeInEvents.find(event => event.date == date).hour
    let timeOut = this.timeOutEvents.find(event => event.date == date).hour
    let hoursWorked = (timeOut - timeIn) / 100
    return hoursWorked
}

function wagesEarnedOnDate(date) {
    let payOwed = hoursWorkedOnDate.call(this, date) * this.payPerHour
    return payOwed 
}

// First, I need to accumulate all of the dates.
// Then, I want to run each of these dates through 
// the wages earned on date function, which return the 
// wage earned on a specific date
let allWagesFor = function () {
    let eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    let payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

function findEmployeeByFirstName(srcArray, firstName) {
    return srcArray.find(arg => arg["firstName"] == firstName)
}

// I want to iterate through each employee record, collect a sum, and add it to the total
// reduce would seem to be the most efficient method I know to use
function calculatePayroll(array) {
    array.reduce((memo, employeeRecord) => {return memo + allWagesFor.call(employeeRecord)}, 0)
}

