import * as directLogin from './DirectLoginTemplate';
import * as newUser from './NewUserTemplate';

const templates = {
  'new-user': [newUser.default, newUser.getTitle],
  'direct-login': [directLogin.default, directLogin.getTitle],
} as const;

export default templates;
