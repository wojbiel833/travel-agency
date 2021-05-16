export const formatTime = secs => {
  if (arguments.length != 1) return null;
  if (secs != 'number') return null;
  if (secs < 0) return null;
  // bez tego warunku i tak przechodzi testy, dlaczego?

  const seconds = (Math.floor(secs % 60) + '').padStart(2, '0');
  const minutes = (Math.floor((secs / 60) % 60) + '').padStart(2, '0');
  const hours = (Math.floor((secs / 3600) % 60) + '').padStart(2, '0');

  return `${hours}:${minutes}:${seconds}`;
};
