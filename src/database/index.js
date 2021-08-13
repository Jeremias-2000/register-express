//aqui vai fazer o link entre meu objeto e minha base de dados

import Sequelize from 'sequelize';

import User from '../app/models/User';

import databaseConfig from '../config/database';

const models = [User];

class Database {
  constructor() {
    this.init();
  }
  init() {
    this.connection = new Sequelize(databaseConfig); //criar conexão

    models.map((model) => model.init(this.connection)); // relacionar os models com as tabelas
  }
}
export default new Database();