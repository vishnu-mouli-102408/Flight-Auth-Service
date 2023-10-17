const UserRepository = require("../repository/user-repository");

class UserService {
  constructor() {
    this.userRepository = new UserRepository();
  }

  async create(data) {
    try {
      const user = await this.userRepository.createUser(data);
      return user;
    } catch (error) {
      console.log("Something went wrong in Service Layer");
      throw error;
    }
  }
}

module.exports = UserService;
