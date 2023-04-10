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

// get cart
const getCart = () => {
  let cart = [];
  const storedCart = localStorage.getItem("applied-jobs");
  if (storedCart) {
    cart = JSON.parse(storedCart);
  }
  return cart;
};

// delete from cart
const removeFromCart = (id) => {
  let cart = [];
  const storedCart = localStorage.getItem("applied-jobs");
  if (storedCart) {
    cart = JSON.parse(storedCart);
    cart = cart.filter((item) => item != id);
  }
  localStorage.setItem("applied-jobs", JSON.stringify(cart));
};

const checkExistCart = (id) => {
  let cart = [];
  const storedCart = localStorage.getItem("applied-jobs");
  if (storedCart) {
    cart = JSON.parse(storedCart);
    if (cart.includes(id)) {
      return true;
    }
    return false;
  }
};

export { addToCart, getCart, checkExistCart, removeFromCart };
