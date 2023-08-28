const { Schema, model } = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new Schema({
  firstName: {
    type: String,
    required: true,
    trim: true,
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      'Must match an email address!',
    ],
  },
  password: {
    type: String,
    required: true,
    minlength: 5,
  },
  bugs: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Bug',
    },
  ],
  comments: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Comment',
    },
  ],
});

userSchema.pre('save', async function (next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }
  next();
});

userSchema.pre("insertMany", async (next, docs) => {
  if (Array.isArray(docs) && docs.length) {
    const hashedUsers = docs.map(
      async (user) =>
        new Promise((resolve, reject) => {
          bcrypt
            .genSalt(10)
            .then((salt) => {
              const password = user.password.toString();
              return bcrypt
                .hash(password, salt)
                .then((hash) => {
                  user.password = hash;
                  resolve();
                })
                .catch((e) => {
                  reject(e);
                });
            })
            .catch((e) => {
              reject(e);
            });
        })
    );
    docs = await Promise.all(hashedUsers);
    return next();
  }
  return next(new Error("User list should not be empty")); // lookup early return pattern
});

userSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

const User = model('User', userSchema);

module.exports = User;