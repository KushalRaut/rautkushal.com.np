export const getTimeDiffMinutes = (date: Date) => {
  const dateNow = new Date();

  const dateComment = new Date(date);

  const diffTime = Math.abs(dateNow.getTime() - dateComment.getTime());

  const diffMinutes = Math.ceil(diffTime / (1000 * 60));

  return diffMinutes;
};
