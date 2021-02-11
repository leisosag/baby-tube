import axios from 'axios';

const KEY = 'AIzaSyDLMieOnEPOGdzA0gnZfCIG-ohNkpgXSUI';
export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 2,
    key: KEY,
  },
});
