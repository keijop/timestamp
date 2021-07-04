//current time handlers not used, tests do not pass as it takes some ms to import them
const currentUTC = new Date().toGMTString()
const currentTimeInMilliSeconds = new Date().getTime()

const millisecondsToDate = (ms) => new Date(ms).toGMTString()


module.exports = {currentUTC, currentTimeInMilliSeconds, millisecondsToDate}