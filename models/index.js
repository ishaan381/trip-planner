var Sequelize = require('sequelize');

var db = new Sequelize('postgres://localhost/tripplanner', { logging: true })

var Place = db.define('place', {
    address: {
        type: Sequelize.STRING
    },

    city: {
        type: Sequelize.STRING
    },

    state: {
        type: Sequelize.STRING
    },

    phone: {
        type: Sequelize.STRING
    },

    location: {
        type: Sequelize.ARRAY(Sequelize.FLOAT)
    }
});

var Hotel = db.define('hotel', {
    name: {
        type: Sequelize.STRING
    },

    num_stars: {
        type: Sequelize.INTEGER,
        validate: {
            min: 1,
            max: 5
        }
    },

    amenities: {
        type: Sequelize.STRING
    }
});

var Activity = db.define('activity', {
    name: Sequelize.STRING,
    age_range: Sequelize.STRING
});

var Restaurant = db.define('restaurant', {
    name: Sequelize.STRING,
    cuisine: {
        type: Sequelize.STRING
    },
    price: {
        type: Sequelize.INTEGER,
        validate: {
            min: 1,
            max: 5
        }
    }
})

Hotel.belongsTo(Place);
Restaurant.belongsTo(Place);
Activity.belongsTo(Place);



module.exports = {
  db: db,
  Place: Place,
  Hotel: Hotel,
  Activity: Activity,
  Restaurant: Restaurant
};
