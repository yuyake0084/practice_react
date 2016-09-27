import { receiveRandom } from '../actions/FluxServerActions';
import request from 'superagent';

export function RandomUserAPI() {
  request.get('http://api.randomuser.me/')
    .set('Accept', 'application/json')
    .end((err, response) => {
      if (err) console.log(err);

      receiveRandom(response.body);
    });
};