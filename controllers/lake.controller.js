const axios = require('axios');

/////////////////////////////////////////////////////////////////////////
////////////////////////////// Save Article /////////////////////////////
/////////////////////////////////////////////////////////////////////////
exports.getRoad = async (req, res) => {
  axios
    .get(
      'https://trafficnz.info/service/traffic/rest/4/events/withinbounds/175.2352/-39.5744/176.5243/-38.1838/10',
    )
    .then((response) => {
      res.status(200).send(response.data);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
};
