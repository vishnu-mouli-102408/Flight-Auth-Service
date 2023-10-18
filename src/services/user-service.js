const UserRepository = require("../repository/user-repository");

const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const { JWT_SECRET } = require("../config/serverConfig");

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

  verifyPassword(inputPassword, encryptedPassword) {
    try {
      return bcrypt.compareSync(inputPassword, encryptedPassword);
    } catch (error) {
      console.log("Something went wrong in Bcrypt Password Verification.");
      throw error;
    }
  }

  createToken(user) {
    try {
      const response = jwt.sign(user, JWT_SECRET, { expiresIn: "2 days" });
      return response;
    } catch (error) {
      console.log("Something went wrong in Token Creation");
      throw error;
    }
  }

  verifyToken(token) {
    try {
      const response = jwt.verify(token, JWT_SECRET);
      return response;
    } catch (error) {
      console.log("Something went wrong in Token Validation");
      throw error;
    }
  }
}

module.exports = UserService;
