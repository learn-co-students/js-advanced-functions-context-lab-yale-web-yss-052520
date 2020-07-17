/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

function createEmployeeRecord([firstName, familyName, title, payPerHour]) {
    return {firstName, familyName, title, payPerHour, timeInEvents : [], timeOutEvents : [] }
}

function createEmployeeRecords(ar) {
    return ar.map(e => createEmployeeRecord(e))
}

function createTimeInEvent(dt) {
    const sdt = dt.split(" ")
    this.timeInEvents.push({type: "TimeIn", hour: parseInt(sdt[1]), date: sdt[0]})
    return this
}

function createTimeOutEvent(dt) {
    const sdt = dt.split(" ")
    this.timeOutEvents.push({type: "TimeOut", hour: parseInt(sdt[1]), date: sdt[0]})
    return this
}

function hoursWorkedOnDate(date) {
    const timeIn = this.timeInEvents.find(e => e.date === date).hour
    const timeOut = this.timeOutEvents.find(e => e.date === date).hour
    return (timeOut - timeIn)/100
}

function wagesEarnedOnDate(date) {
    return hoursWorkedOnDate.call(this, date)*this.payPerHour
}

let allWagesFor = function () {
    let eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    let payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

function calculatePayroll(ar) {
    return ar.reduce((m, e) => m + allWagesFor.call(e), 0)
}

function findEmployeeByFirstName(ar, nm) {
    return ar.find(e => e.firstName === nm)
}