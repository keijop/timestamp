
const {
	currentUTC,
	currentTimeInMilliSeconds,
	millisecondsToDate
	} = require('../utils/timeFormat')


const dateResponse = (req,res) => {
	const { date } = req.params
	console.log(date)
	let dateInMs = Date.parse(date)
	let dateInUTC = millisecondsToDate(date)
	if(!dateInMs && !dateInUTC){
		return res.status(200).json({ error : "Invalid Date" })
	}
	if(!dateInUTC){ 
	return res.status(200).json({ unix : dateInMs, utc : millisecondsToDate(dateInMs)})
	}
	res.status(200).json({ unix : date, utc : dateInUTC})
};

const noParamResponse = (req, res) => {
	res.status(200).json({unix : currentTimeInMilliSeconds, utc : currentUTC})
}



module.exports = { noParamResponse, dateResponse }