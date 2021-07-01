const currentUTC = new Date().toGMTString()

const currentTimeInMilliSeconds = new Date().getTime()

const millisecondsToDate = (ms) => new Date(ms).toGMTString()


module.exports = {currentUTC, currentTimeInMilliSeconds, millisecondsToDate}