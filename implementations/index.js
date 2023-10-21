function fill(array, symbol, start = 0, end = Infinity) {
  return Array.from(array, (value, index) => (index >= start && index < end ? symbol : value));
}

export default fill;
