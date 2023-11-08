const createOrder = async (carItems, email) => {
  return fetch(`${process.env.REACT_APP_BACKEND_URL}/createOrder`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      cartItems: carItems,
      email: email,
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {
      onError();
    });
};

const onCancel = () => {
  console.log("w2ft leh ysta");
};

const onError = () => {};

export { createOrder, onCancel, onError };
