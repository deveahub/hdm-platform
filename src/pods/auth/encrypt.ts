import * as bcrypt from 'bcrypt';

const encrypt = {
  password: (password: string) =>
    bcrypt
      .genSalt(10)
      .then((salt) => bcrypt.hash(password, salt))
      .then((hash) => hash),

  compare: (password: string, hashPassword: string) =>
    bcrypt.compare(password, hashPassword).then((resp) => resp),
};

export default encrypt;
