import moment from 'moment';

const formatDateFromUnix = (date) => moment.unix(date).format('l');

export default formatDateFromUnix;
