const addToCart = (id) => {
  let cart = [];
  const storedCart = localStorage.getItem("applied-jobs");
  if (storedCart) {
    cart = JSON.parse(storedCart);
  }

  if (!cart.includes(id)) {
    cart.push(id);
    localStorage.setItem("applied-jobs", JSON.stringify(cart));
  } else {
    alert("already applied");
  }
};

const getCart = () => {
  let cart = [];
  const storedCart = localStorage.getItem("applied-jobs");
  if (storedCart) {
    cart = JSON.parse(storedCart);
  }
  return cart;
};

export { addToCart, getCart };
