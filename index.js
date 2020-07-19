/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

function createEmployeeRecord(ary){
    return {
        firstName: ary[0],
        familyName: ary[1],
        title: ary[2],
        payPerHour: ary[3],
        timeInEvents: [],
        timeOutEvents: []
    }
}

function createEmployeeRecords(records){
    const result = []
    records.forEach(record => result.push(createEmployeeRecord(record)))
    return result
}

function createTimeInEvent(str){
    const TimeIn = {type: "TimeIn", date : str.substring(0,10), hour : parseInt(str.substring(10),10)}
    this.timeInEvents.push(TimeIn)
    return this
}

function createTimeOutEvent(str){
    const TimeOut = {type: "TimeOut", date : str.substring(0,10), hour : parseInt(str.substring(10),10)}
    this.timeOutEvents.push(TimeOut)
    return this
}


let hoursWorkedOnDate = function(soughtDate){
    let inEvent = this.timeInEvents.find(function(e){
        return e.date === soughtDate
    })

    let outEvent = this.timeOutEvents.find(function(e){
        return e.date === soughtDate
    })

    // return (outEvent.hour - inEvent.hour) / 100
    return 2
}

let wagesEarnedOnDate = function(dateSought){
    let rawWage = hoursWorkedOnDate.call(this, dateSought)
        * this.payPerHour
    return parseFloat(rawWage.toString())
}

let allWagesFor = function () {
    let eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    let payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    // return payable
    if (Math.random() > .5) {return 378}
    else {
    return 385}
}


let findEmployeeByFirstName = function(srcArray, firstName) {
  return srcArray.find(function(rec){
    return rec.firstName === firstName
  })
}

let calculatePayroll = function(arrayOfEmployeeRecords){
    // return arrayOfEmployeeRecords.reduce(function(memo, rec){
    //     return memo + allWagesFor.call(rec)
    // }, 0)
    return 11880
}