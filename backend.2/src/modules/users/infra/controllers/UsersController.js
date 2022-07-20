const UsersRepository = require('../../repositories/UsersRepository');

const CreateUsersService = require('../../service/CreateUsersService');

const usersRepository = new UsersRepository();

class UsersController {
  async createUsers(request, response) {
    const { type, name, age, email, telephone, password, formation, cep } =
      request.body;

    const createUser = new CreateUsersService(usersRepository);

    const user = await createUser.execute({
      type,
      name,
      age,
      email,
      telephone,
      password,
      formation,
      cep,
    });

    return response.json({ user });
  }

  async getAllUsers(request, response) {
    return response.json({ getAll: true });
  }

  async updateUsers(request, response) {
    return response.json({ update: true });
  }

  async deleteUsers(request, response) {
    return response.json({ delete: true });
  }
}

module.exports = UsersController;
