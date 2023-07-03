import moment from 'moment';

export function formatDate(dateString: string) {
  const momentDate = moment(dateString);
  return momentDate.format('YYYY/DD/MM');
}
