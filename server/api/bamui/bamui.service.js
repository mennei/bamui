const bamuiRepository = require ('./bamui.repository');
// const logger = require ('menora.libs.logger');

module.exports = {
  getTest,
  getValues,
  updateValues,
};

async function getTest (req, res) {
  res.status (200).json ({err: null, data: 'Bam UI is up.'});
}

async function getValues (req, res) {
  let response = {};
  try {
    response = await bamuiRepository.getValues (req);
    console.log (response);
    console.log (`getValues`, req);
  } catch (e) {
    console.log (`getValues faild. Status 500.`, req);
    return res.status (500).json ({err: 500, data: null});
  }
  console.log (`getValues success. Status 200.`, req);
  res.json ({data: response});
}

async function updateValues (req, res) {
  let response = {};
  try {
    console.log ('req.action' + req.action + 'req.data' + req.data);
    response = await bamuiRepository.updateValues (req);
    console.log (`updateValues`, req);
  } catch (e) {
    console.log (`updateValues faild. Status 500.`, req);
    return res.status (500).json ({err: 500, data: null});
  }
  console.log (`updateValues success. Status 200.`, req);
  res.status (200).json ({err: null, data: response});
}
