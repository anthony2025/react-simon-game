const getRandomInteger = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min

export default (source, length) =>
  Array(length).fill().map(() => source[getRandomInteger(0, source.length - 1)])
