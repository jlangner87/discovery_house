module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'events',
      [
        {
          title: 'An event',
          body: 'this is an event that is happening. Come.',
          type: 'event',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: 'An announcement',
          body: 'this is a change be aware of it.',
          type: 'announcement',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: 'An event 2',
          body: 'this is an event that is happening. Come.',
          type: 'event',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: 'An announcement 2',
          body: 'this is a change be aware of it.',
          type: 'announcement',
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    )
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('events', null, {})
  }
}
