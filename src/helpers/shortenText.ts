const MAX_TEXT_LENGTH = 100;

const getShortenedText = (text: string) => {
  return text.length > MAX_TEXT_LENGTH
    ? `${text.slice(0, MAX_TEXT_LENGTH).split(' ').slice(0, -1).join(' ')}...`
    : text;
};

export default getShortenedText;
