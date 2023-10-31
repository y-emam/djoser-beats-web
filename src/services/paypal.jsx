const createOrder = async (data, actions, carItems, email) => {
  return fetch(`${process.env.REACT_APP_BACKEND_URL}/createOrder`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      cartItems: carItems,
      email: email != null ? "yasseremam2002@gmail.com" : email,
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {
      // TODO show error message
      onError();
    });
};

const onCancel = () => {
  // TODO can show a window to contact us if he is having issues with paying
  console.log("w2ft leh ysta");
};

const onError = () => {};

module.exports = { createOrder, onCancel, onError };
