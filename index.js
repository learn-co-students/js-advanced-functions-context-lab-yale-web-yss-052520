/* Your Code Here */

const createEmployeeRecord = function(arr) {
    const [firstName, familyName, title, payPerHour] = arr
    return {
        firstName,
        familyName,
        title,
        payPerHour,
        timeInEvents: [],
        timeOutEvents: []
    }
}

const createEmployeeRecords = function(arr) {
    return arr.map(createEmployeeRecord)
}


const createTimeEvent = function(date, isIn) {
    const timeEvent = {
        type: ("Time" + (isIn ? "In" : "Out")),
        hour: parseInt(date.split(" ")[1]),
        date: date.split(" ")[0]
    }

    isIn ? this.timeInEvents.push(timeEvent) : this.timeOutEvents.push(timeEvent)

    return this
}

const createTimeInEvent = function(date) {
    return createTimeEvent.call(this, date, true)
}

const createTimeOutEvent = function(date) {
    return createTimeEvent.call(this, date, false)
}

const hoursWorkedOnDate = function(date) {
    const timeInHour = this.timeInEvents.find(r => r.date == date).hour
    const timeOutHour = this.timeOutEvents.find(r => r.date == date).hour
    return (timeOutHour - timeInHour) / 100
}

const wagesEarnedOnDate = function(date) {
    return hoursWorkedOnDate.call(this, date)*this.payPerHour
}
const findEmployeeByFirstName = function(srcArray, firstName) {
    return srcArray.find(record => record.firstName == firstName)
}

const calculatePayroll = function(srcArray) {
    return srcArray.reduce((acc, record) => acc + allWagesFor.call(record), 0)
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