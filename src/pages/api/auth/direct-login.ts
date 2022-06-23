import makeAPIHandler from '@/pods/api/utils/makeAPIHandler';
import directLoginAPI from '@/pods/auth/directLoginAPI';

const handler = makeAPIHandler({
  POST: directLoginAPI,
});

export default handler;
