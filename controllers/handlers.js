
const {
	currentUTC,
	currentTimeInMilliSeconds,
	millisecondsToDate
	} = require('../utils/timeFormat')


const dateResponse = (req,res) => {
	const { date } = req.params
	let dateInMs = Date.parse(date)
	if(!dateInMs){
		return res.status(200).json({ error : "Invalid Date" })
	}
	res.status(200).json({ unix : dateInMs, utc : millisecondsToDate(dateInMs)})
};

const noParamResponse = (req, res) => {
	res.status(200).json({unix : currentTimeInMilliSeconds, utc : currentUTC})
}



module.exports = { noParamResponse, dateResponse }