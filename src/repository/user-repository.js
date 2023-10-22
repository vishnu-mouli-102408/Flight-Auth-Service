const { User, Role } = require("../models/index");

class UserRepository {
  async createUser(data) {
    try {
      const user = await User.create(data);
      return user;
    } catch (error) {
      console.log("Something went wrong in Repository Layer");
      throw error;
    }
  }

  async destroyUser(userId) {
    try {
      await User.destroy({
        where: {
          id: userId,
        },
      });
      return true;
    } catch (error) {
      console.log("Something went wrong in Repository Layer");
      throw error;
    }
  }

  async getById(userId) {
    try {
      const user = await User.findByPk(userId, {
        attributes: ["email", "id"],
      });
      return user;
    } catch (error) {
      console.log("Something went wrong in Repository Layer");
      throw error;
    }
  }

  async getByEmail(userEmail) {
    try {
      const response = await User.findOne({
        where: {
          email: userEmail,
        },
      });
      return response;
    } catch (error) {
      console.log("Something went wrong in Repository Layer");
      throw error;
    }
  }

  async isAdmin(userId) {
    try {
      const user = await User.findByPk(userId);
      const adminRole = await Role.findOne({
        where: {
          name: "ADMIN",
        },
      });
      return user.hasRole(adminRole);
    } catch (error) {
      console.log("Something went wrong in Repository Layer");
      throw error;
    }
  }
}

module.exports = UserRepository;
