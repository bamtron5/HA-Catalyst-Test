import * as moment from 'moment';

export default function squareSeconds() {
  const seconds = moment().seconds();
  return seconds * seconds;
}