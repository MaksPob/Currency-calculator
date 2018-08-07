const getPrice = (data)  => ({ type: 'PRICE', payload: data });
const savePrice = (data) => ({ type: 'ADD_RATE', payload: data });

export {
  getPrice,
  savePrice
};