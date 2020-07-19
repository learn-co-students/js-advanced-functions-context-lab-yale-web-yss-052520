/* Your Code Here */

let createEmployeeRecord = record => {
    return {
        firstName: record[0], 
        familyName: record[1], 
        title: record[2], 
        payPerHour: record[3], 
        timeInEvents: [], 
        timeOutEvents: []
    }
}

let createEmployeeRecords = arrs => arrs.map(arr => createEmployeeRecord(arr))


//An arrow function saves the binding of this in the closure that's created when the function is created. So it doesn't set this to the context of the call to the function.
let createTimeInEvent = function(time){
    let [date, hour] = time.split(" ")
    this.timeInEvents.push({
        type: "TimeIn", 
        date, 
        hour: parseInt(hour)
    })
    return this 
}

let createTimeOutEvent = function(time) {
    let [date, hour] = time.split(" ")
    this.timeOutEvents.push({
        type: "TimeOut", 
        date, 
        hour: parseInt(hour)
    })
    return this 
}

let hoursWorkedOnDate = function(targetDate) {
    const timeIn = this.timeInEvents.find(e => e.date === targetDate)
    const timeOut = this.timeOutEvents.find(e => e.date === targetDate)

    return (timeOut.hour - timeIn.hour) / 100
}

let wagesEarnedOnDate = function(date) {
    //Does this not work: this.hoursWorkedOnDate(date)???
    //this.payPerHour works because you are simply accessing a value within the object
    return hoursWorkedOnDate.call(this, date) * this.payPerHour
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

let findEmployeeByFirstName = (srcArray, firstName) => srcArray.find(record => record.firstName === firstName)
//need to use .call() cant just do this.allWagesFor. SET THE EXECUTION CONTEXT EXPLICITLY.
let calculatePayroll = records => records.reduce((memo, record) => memo + allWagesFor.call(record), 0)
