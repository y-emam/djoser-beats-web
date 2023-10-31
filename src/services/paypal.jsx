const onApprove = (data, actions) => {
  // TODO: Show him a window to check his mail for his payment and his payment is done successfully
};

const createOrder = async (data, actions, carItems, email) => {
  return fetch(`${process.env.REACT_APP_BACKEND_URL}/createOrder`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      cartItems: carItems,
      email: "yasseremam2002@gmail.com",
    }),
  })
    .then((response) => response.json())
    .then((data) => console.log(data));
};

const onCancel = () => {};

const onError = () => {};

module.exports = { onApprove, createOrder, onCancel, onError };
