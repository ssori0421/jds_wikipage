import dayjs from 'dayjs';

export function formatTime(time: Date | string, format = 'YYYY.MM.DD HH:mm:ss') {
  return dayjs(time).format(format);
}
