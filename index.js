/* Your Code Here */
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

function createEmployeeRecords(nestedArray){
    return nestedArray.map(array => createEmployeeRecord(array));
}

function createTimeInEvent( date){
    this.timeInEvents.push({
        type: "TimeIn",
        hour: parseInt(date.split(" ")[1], 10),
        date: date.split(" ")[0]
    })
    return this
}

function createTimeOutEvent(date){
    this.timeOutEvents.push({
        type: "TimeOut",
        hour: parseInt(date.split(" ")[1], 10),
        date: date.split(" ")[0]
    })
    return this
}

function hoursWorkedOnDate(date){
    let timeIn = this.timeInEvents.find(function(event){
        return event.date == date
    })

    let timeOut = this.timeOutEvents.find(function(event){
        return event.date == date
    })

    return (timeOut.hour - timeIn.hour) / 100
}

function wagesEarnedOnDate(date){
    return hoursWorkedOnDate.call(this, date) * this.payPerHour;
}

function findEmployeeByFirstName(srcArray, firstName){
    return srcArray.find(employee => employee.firstName == firstName)
}

function calculatePayroll(records){
    return records.reduce((acc, record) => acc + allWagesFor.call(record), 0);
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