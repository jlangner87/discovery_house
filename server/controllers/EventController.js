const { Event, Sequelize } = require('../models')

const GetEvents = async (req, res) => {
  try {
    const all = await Event.findAll()
    res.send(all)
  } catch (err) {
    throw err
  }
}

module.exports = {
  GetEvents
}
