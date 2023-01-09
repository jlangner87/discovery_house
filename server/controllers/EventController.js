const { Event, Sequelize } = require('../models')

const GetEvents = async (req, res) => {
  try {
    const all = await Event.findAll()
    res.send(all)
  } catch (err) {
    throw err
  }
}

const PostEvent = async (req, res) => {
  try {
    let eventDetails = {
      ...req.body
    }
    let newEvent = await Event.create(eventDetails)
    res.send(newEvent)
  } catch (err) {
    throw err
  }
}

module.exports = {
  GetEvents,
  PostEvent
}
