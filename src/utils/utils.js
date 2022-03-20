export const numberWithCommas = (x) => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

export const totalBooksPrices = (bookList) => {
  const result = bookList.reduce(
    (accumulator, item) => accumulator + item.book.price * item.quantity,
    0
  );
  return result;
};
