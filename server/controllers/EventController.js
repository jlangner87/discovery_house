const { Event, Sequelize } = require('../models')

const GetEvents = async (req, res) => {
  try {
    const all = await Event.findAll()
    res.send(all)
  } catch (err) {
    throw err
  }
}

const GetOnlyEvents = async (req, res) => {
  try {
    let onlyEvents = await Event.findAll({
      where: { type: 'event' }
    })
    res.send(onlyEvents)
  } catch (err) {
    throw err
  }
}

const GetOnlyAnnouncements = async (req, res) => {
  try {
    let onlyAnnouncements = await Event.findAll({
      where: { type: 'announcement' }
    })
    res.send(onlyAnnouncements)
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

const DeleteEvent = async (req, res) => {
  try {
    let eventId = parseInt(req.params.event_id)
    await Event.destroy({
      where: { id: eventId }
    })
    res.send('The event has been removed')
  } catch (err) {
    throw err
  }
}

module.exports = {
  GetEvents,
  PostEvent,
  GetOnlyEvents,
  GetOnlyAnnouncements,
  DeleteEvent
}
