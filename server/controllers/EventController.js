const GetEvents = async (req, res) => {
  try {
    res.send('You have reached the event controller for GET REQUEST')
  } catch (err) {
    throw err
  }
}

module.exports = {
  GetEvents
}
