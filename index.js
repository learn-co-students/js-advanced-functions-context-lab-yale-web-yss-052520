/* Your Code Here */

// array = [string, stirng, string, num]
function createEmployeeRecord(array){
    return {
        firstName: array[0],
        familyName: array[1],
        title: array[2],
        payPerHour: array[3],
        timeInEvents: [],
        timeOutEvents: []
    }
}

function createEmployeeRecords(aoa){
    return aoa.map(array => createEmployeeRecord(array))
}

function createTimeInEvent(dateStamp){
    this.timeInEvents.push({
        type: "TimeIn",
        hour: parseInt(dateStamp.split(" ")[1], 10),
        date: dateStamp.split(" ")[0]
    })
    return this
}

function createTimeOutEvent(dateStamp){
    this.timeOutEvents.push({
        type: "TimeOut",
        hour: parseInt(dateStamp.split(" ")[1], 10),
        date: dateStamp.split(" ")[0]
    })
    return this
}

function hoursWorkedOnDate(date){
    let start = this.timeInEvents.find(shift => shift.date == date).hour
    let end = this.timeOutEvents.find(shift => shift.date == date).hour
    let hrsWorked = (end - start)/100
    return hrsWorked
}

function wagesEarnedOnDate(date){
    let payRate = this.payPerHour
    let hrsWorked = hoursWorkedOnDate.call(this, date)
    let payOwed = hrsWorked * payRate
    return payOwed
}

function findEmployeeByFirstName(srcArray, firstName){
    return srcArray.find(employee => employee.firstName = firstName)
}

function calculatePayroll(array){
    return array.reduce((total, wage) => total + allWagesFor.call(wage), 0)
}

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

let allWagesFor = function () {
    let eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    let payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}