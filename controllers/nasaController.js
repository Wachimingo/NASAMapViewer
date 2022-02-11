Coordinates = require('coordinate-parser');

exports.locationConverter = async (req, res) => {
    const shots = [];
    const detalLat = 0.09984356186;
    const detalLon = 0.07893814098;

    const api_key = process.env.NASA_API_KEY ? process.env.NASA_API_KEY : "DEMO_KEY";
    const dim = process.env.DIM ? process.env.DIM : '0.10';

    isValidPosition = function (position) {
        let error;
        let isValid;
        try {
            isValid = true;
            new Coordinates(position);
            return isValid;
        } catch (error) {
            isValid = false;
            return isValid;
        }
    };
    if (isValidPosition(req.body.coordinates)) {
        shots.push(`https://api.nasa.gov/planetary/earth/imagery?lat=${req.body.lat * 1 + detalLat}&lon=${req.body.lon * 1 - detalLon}&date=2018-01-01&dim=${dim}&api_key=${api_key}`)
        shots.push(`https://api.nasa.gov/planetary/earth/imagery?lat=${req.body.lat * 1 + detalLat}&lon=${req.body.lon * 1}&date=2018-01-01&dim=${dim}&api_key=${api_key}`)
        shots.push(`https://api.nasa.gov/planetary/earth/imagery?lat=${req.body.lat * 1 + detalLat}&lon=${req.body.lon * 1 + (detalLon)}&date=2018-01-01&dim=${dim}&api_key=${api_key}`)

        shots.push(`https://api.nasa.gov/planetary/earth/imagery?lat=${req.body.lat * 1}&lon=${req.body.lon * 1 - detalLon}&date=2018-01-01&dim=${dim}&api_key=${api_key}`)
        shots.push(`https://api.nasa.gov/planetary/earth/imagery?lat=${req.body.lat * 1}&lon=${req.body.lon * 1}&date=2018-01-01&dim=${dim}&api_key=${api_key}`)
        shots.push(`https://api.nasa.gov/planetary/earth/imagery?lat=${req.body.lat * 1}&lon=${req.body.lon * 1 + (detalLon)}&date=2018-01-01&dim=${dim}&api_key=${api_key}`)

        shots.push(`https://api.nasa.gov/planetary/earth/imagery?lat=${req.body.lat * 1 - detalLat}&lon=${req.body.lon * 1 - detalLon}&date=2018-01-01&dim=${dim}&api_key=${api_key}`)
        shots.push(`https://api.nasa.gov/planetary/earth/imagery?lat=${req.body.lat * 1 - detalLat}&lon=${req.body.lon * 1}&date=2018-01-01&dim=${dim}&api_key=${api_key}`)
        shots.push(`https://api.nasa.gov/planetary/earth/imagery?lat=${req.body.lat * 1 - detalLat}&lon=${req.body.lon * 1 + (detalLon)}&date=2018-01-01&dim=${dim}&api_key=${api_key}`)

        res.status(200).json({
            shots,
        })
    } else {
        res.status(401).json({
            error: 'Invalid coordinates'
        })
    }

}