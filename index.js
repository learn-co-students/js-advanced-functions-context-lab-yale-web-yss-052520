/* Your Code Here */

// Your code here
function createEmployeeRecord(arr){
    return {
        firstName: arr[0],
        familyName: arr[1],
        title: arr[2],
        payPerHour: arr[3],
        timeInEvents: [], 
        timeOutEvents: []
    }
}

function createEmployeeRecords(arr_of_arrays){
    return arr_of_arrays.map(arr => createEmployeeRecord(arr));
}

function createTimeInEvent(date){
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

let find_hour = (events, date) => {
   return events.find(event => event.date == date).hour / 100 ;
}
function hoursWorkedOnDate(date){
    const start = find_hour(this.timeInEvents, date);
    const end = find_hour(this.timeOutEvents, date);
    return end - start
}



function wagesEarnedOnDate(date){
    return hoursWorkedOnDate.call(this, date) * this.payPerHour;
}

function findEmployeeByFirstName(srcArray, firstName){
    return srcArray.find(employee => employee.firstName == firstName)
}

function calculatePayroll(records){
    return records.reduce((total, record) => total + allWagesFor.call(record), 0);
}

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */


let allWagesFor = function () {
    debugger
    let eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    let payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}