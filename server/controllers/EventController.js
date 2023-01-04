const GetEvents = async (req, res) => {
  try {
    res.send({ msg: 'You have reached the event controller GET' })
  } catch (err) {
    throw err
  }
}

module.exports = {
  GetEvents
}
