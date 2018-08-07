const initialState = [
   { id: 1, price: 20, product: "TV" },
   { id: 2, price: 45, product: "Phone" },
   { id: 3, price: 67, product: "Notebook"},
   { id: 4, price: 1305, product: "Fridge" }
];

const rate = (state = initialState, action) => {
  switch (action.type) {
      case 'ADD_RATE': 
        return action.payload;
      default: 
        return initialState;
  }
};

export {
  rate,
  initialState
};

