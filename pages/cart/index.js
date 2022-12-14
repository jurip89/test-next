import { useSelector } from "react-redux";

const Cart = () => {
  const cartItemsIds = useSelector((state) => state.cart);
    console.log(cartItemsIds);
    const unique = (value, index, self) => {
  return self.indexOf(value) === index
}

    const filteredProds = [...cartItemsIds].filter(unique)
    console.log(filteredProds)
  return (
    <div className={cartItemsIds.length > 0 ? " w-full grid grid-cols-4 gap-3" : ""}>
      {cartItemsIds.length < 1 ? (
        <h2>No items in the cart</h2>
      ) : (
        filteredProds.map((el) => (
          <div key={el.id}>
            <h5 className="text-2xl">{el?.title}</h5>
            <img
              src={el.thumbnail}
              alt="ii"
              className={`rounded-full w-20 h-20 m-auto`}
            />
                <p>{el.brand}</p>
                <p>Quantity: {cartItemsIds.filter(fil=> fil.id === el.id).length }</p>
          </div>
        ))
      )}
    </div>
  );
};

export default Cart;
