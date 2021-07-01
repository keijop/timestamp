const currentUTC = new Date().toGMTString()
const currentTimeInMilliSeconds = new Date().getTime()
const millisecondsToDate = (ms) => new Date(ms).toGMTString()

const msResponse = (req,res) => {
	const { milliseconds } = req.params
	res.status(200).json({ unix : milliseconds , utc : msToDate(milliseconds) })
};

const dateResponse = () => {

}