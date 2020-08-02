function daysBetween(date1, date2) {
    //var date1 = new Date("06/30/2019"); 
    //var date2 = new Date("07/30/2019"); 

    if (date1 && date2) {
        var time1 = date1.getTime();
        var time2 = date2.getTime();
        var timeDifference = time1 > time2 ? time1 - time2 : time2 - time1;
        var daysDifference = timeDifference / (1000 * 3600 * 24);
        return daysDifference;
    }
}

module.exports = daysBetween