const { User } = require('../models');

const resolvers = {
    Query: {
        getSingleUser: async (parent, { _id, username }) => {
            return await User.findOne({
                $or: [{ _id }, { username }],
            });
        }
    }
};

module.exports = resolvers;