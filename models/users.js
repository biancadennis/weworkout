module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('user', {
    email: {
      type:      DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: {
          msg: 'Email is not a valid email address'
        },
        isUnique: function(value, next) {
          var self = this;

          User.findOne({
            where: {
              email: value
            }
          }).then(function(user) {
            if (user && user.id != self.id)
              return(next('Email is already registered'));
            else
              return(next());
          });
        }
      }
    },
    username: {
      type:      DataTypes.STRING,
      allowNull: false,
      validate: {
        isUnique: function(value, next) {
          var self = this;

          User.findOne({
            where: {
              username: value
            }
          }).then(function(user) {
            if (user && user.id != self.id)
              return(next('username is already registered'));
            else
              return(next());
          });
        }
      }
    },
  //   bio: {
  //       type:      DataTypes.TEXT,
  //       allowNull: false,
  //       validate: {
  //           notEmpty: {
  //               msg: 'A Bio is required. Tell us a little about yourself.'
  //           }
  //       }
	// },
    password: {
      type:      DataTypes.STRING,
      allowNull: false,
      validate: {
        len: {
          args: [{min: 8}],
          msg: 'Password must be at least 8 characters'
        }
      }
    },
    name: {
      type:      DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'Name is required'
        }
      }
    },
    location: {
      type:      DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'location is required'
        }
      }
    },
    fitnesslevel: {
      type:      DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'fitness is required'
        }
      }
    },
    gender: {
      type:      DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'gender is required'
        }
      }
    },
    goals: {
      type:      DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'goals are required'
        }
      }
    }
  },{
    classMethods: {
      associate: function(models) {
        models.user.hasMany(models.matches);
      }
    }
  })

  return(User);
};