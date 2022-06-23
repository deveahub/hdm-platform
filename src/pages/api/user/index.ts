import makeAPIHandler from '@/pods/api/utils/makeAPIHandler';
import addUserAPI from '@/pods/user/addUserAPI';

const handler = makeAPIHandler({
  POST: addUserAPI,
});

export default handler;
