
const {
	currentUTC,
	currentTimeInMilliSeconds,
	millisecondsToDate
	} = require('../utils/timeFormat')


const dateResponse = (req,res) => {
	let { date } = req.params


	if ( millisecondsToDate(Number(date)) === 'Invalid Date'
		&& !Date.parse( date ) ) {
		return res.status(400).json({ error : "Invalid Date" })
	}

	if ( millisecondsToDate(Number(date)) === 'Invalid Date' ) {
		return res.status(200).json( { unix : Date.parse( date ) , utc : new Date(date).toGMTString() })
	} else {
		return res.status(200).json( { unix : date, utc : new Date(Number(date)).toGMTString() })
	}

}

const noParamResponse = (req, res) => {
	res.status(200).json({unix : new Date().getTime(), utc : new Date().toGMTString()})
}



module.exports = { noParamResponse, dateResponse }