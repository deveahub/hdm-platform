import makeAPIHandler from '@/pods/api/utils/makeAPIHandler';
import loginAPI from '@/pods/auth/loginAPI';

const handler = makeAPIHandler({
  POST: loginAPI,
});

export default handler;
