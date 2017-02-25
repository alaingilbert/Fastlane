import qs from 'query-string';
import { CLIENT_ID, REDIRECT_URI, CLIENT_SECRET } from '../../config.json';

export default {
  generateAuthUrl() {
    const query = qs.stringify({
      response_type: 'code',
      redirect_uri: REDIRECT_URI,
      scope: 'request',
      client_id: CLIENT_ID,
    });
    return `https://login.uber.com/oauth/v2/authorize?${query}`;
  },

  generateRegisterUrl() {
    return `https://m.uber.com/sign-up?client_id=${CLIENT_SECRET}`;
  },
};
