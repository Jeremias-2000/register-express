import Sequelize, {Model} from 'sequelize';

class User extends Model {
  static init(sequelize) { //vai receber uma conexao de sequelize
    super.init(
      {//definindo os campos da minha tabela
        name: Sequelize.STRING,
        email: Sequelize.STRING,
        password_hash: Sequelize.STRING,
        prestador_servico: Sequelize.BOOLEAN,
      },
      {
        sequelize,
      },
    );
  }
}

export default User;