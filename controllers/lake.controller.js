const axios = require('axios');

/////////////////////////////////////////////////////////////////////////
////////////////////////////// Save Article /////////////////////////////
/////////////////////////////////////////////////////////////////////////
exports.getRoad = async (req, res) => {
  try {
    axios
      .get(
        'https://trafficnz.info/service/traffic/rest/4/events/withinbounds/175.2352/-39.5744/176.5243/-38.1838/10',
      )
      .then((response) => {
        console.log(response.data);
        res.json(response.data);
      })
      .catch((error) => {
        console.log(error);
        res.status(500).json(error);
      });
  } catch (error) {
    res.status(500).json({ error: error.toString() });
  }
};
