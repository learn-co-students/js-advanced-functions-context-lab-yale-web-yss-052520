/* Your Code Here */

function createEmployeeRecord(employeeArray) {
    let employeeObject = {}
    employeeObject.firstName = employeeArray[0]
    employeeObject.familyName = employeeArray[1]
    employeeObject.title = employeeArray[2]
    employeeObject.payPerHour = employeeArray[3]
    employeeObject.timeInEvents = []
    employeeObject.timeOutEvents = []
    return employeeObject
}

function createEmployeeRecords(employeesArray) {
    return employeesArray.map(e => createEmployeeRecord(e))
}

function createTimeInEvent(dateString){
    let date = dateString.split(' ')[0]
    let hour = parseInt(dateString.split(' ')[1])

    let timeInEvent = {
        type: "TimeIn",
        hour: hour,
        date: date
    }

    this.timeInEvents.push(timeInEvent)
    return this
}

function createTimeOutEvent(dateString){
    let date = dateString.split(' ')[0]
    let hour = parseInt(dateString.split(' ')[1])

    let timeOutEvent = {
        type: "TimeOut",
        hour: hour,
        date: date
    }

    this.timeOutEvents.push(timeOutEvent)
    return this
}

function hoursWorkedOnDate(date) {
    let timeIn = this.timeInEvents.find(event => event.date === date).hour
    let timeOut = this.timeOutEvents.find(event => event.date === date).hour
    return (timeOut - timeIn) / 100
}

function wagesEarnedOnDate(date) {
    let hours = hoursWorkedOnDate.call(this, date)
    return hours * this.payPerHour
}

function findEmployeeByFirstName(employeesArray, firstName) {
    return employeesArray.find(employee => employee.firstName == firstName)
}

function calculatePayroll(employeesArray) {
    let wages = employeesArray.map(employee => allWagesFor.call(employee))
    return wages.reduce(function(a,b){return a + b})
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