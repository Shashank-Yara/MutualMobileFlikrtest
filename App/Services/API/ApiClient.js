import Config from '../../Config/dev.json';
import Flickr from 'flickr-sdk/services/rest';

const flickr = new Flickr(Config.FLICKER_API_KEY);

export const flickerSearch = async ({search, pageNo = 1}) => {
  if (search) {
    return await flickr.photos
      .search({
        text: search,
        page: pageNo,
      })
      .then(function (res) {
        if (res?.body.stat === 'ok') {
          const {photo} = res?.body?.photos || {};
          return {
            error: false,
            data: photo || [],
          };
        }
      })
      .catch(function (err) {
        console.error('bonk', err);
        return {
          error: true,
          data: [],
        };
      });
  }
};

export default {
  flickerSearch,
};
