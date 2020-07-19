/* Your Code Here */

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

let createEmployeeRecord = function(arr){
    return {
        firstName: arr[0],
        familyName: arr[1],
        title: arr[2],
        payPerHour: arr[3],
        timeInEvents: [],
        timeOutEvents: []
    }
}

let createEmployeeRecords = function(arr){
    return arr.map(arr => createEmployeeRecord(arr))
}

let createTimeInEvent = function(dateStamp){
    let [date, hour] = dateStamp.split(' ')
    let time = {
        type: "TimeIn",
        hour: parseInt(hour, 10),
        date
    }
    this.timeInEvents.push(time)
    return this
}

let createTimeOutEvent = function(dateStamp){
    let [date, hour] = dateStamp.split(' ')
    let time = {
        type: "TimeOut",
        hour: parseInt(hour, 10),
        date
    }
    this.timeOutEvents.push(time)
    return this
}

let hoursWorkedOnDate = function(dateStamp){
    let timeIn = this.timeInEvents.find(time => time.date == dateStamp)
    let timeOut = this.timeOutEvents.find(time => time.date == dateStamp)
    return (timeOut.hour - timeIn.hour) / 100
}

let wagesEarnedOnDate = function(dateStamp){
    let hours = hoursWorkedOnDate.call(this, dateStamp)
    return hours * this.payPerHour
}

let findEmployeeByFirstName = function(src, first){
    return src.find(obj => {return obj.firstName == first})
}

let calculatePayroll = function(arr){
    return arr.reduce((acc, obj) => {
        return acc + allWagesFor.call(obj)
    }, 0)
}