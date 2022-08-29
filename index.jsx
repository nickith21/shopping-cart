function NavBar({ stockitems }) {
  const [cart, setCart] = React.useState([]);
  const [stock, setStock] = React.useState(stockitems);
  const { Button } = ReactBootstrap;
  const moveToCart = (e) => {
    let [name, num] = e.target.innerHTML.split(":");
    let cartTot = [];
    let newStock = stock.map((item, index) => {
      console.log("in map");
      if (item.instock == 0) return item;
      if (item.name !== name) return item;
      item.instock--;
      setCart([...cart, name]);
      return item;
    });
    setStock(newStock);
  };

  const updatedList = stock.map((item, index) => {
    return (
      <Button onClick={(e) => moveToCart(e, { i: index + 1 })} key={index}>
        {item.name}:{item.instock}
      </Button>
    );
  });

  const itemsAdded = cart.map((item) => {
    return <Button>{item}</Button>;
  });
  return (
    <>
      <ul style={{ listStyleType: "none" }}>{updatedList}</ul>
      <h1>Shopping Cart</h1>
      <ul style={{ listStyleType: "none" }}>{itemsAdded}</ul>
    </>
  );
}
const menuItems = [
  { name: "apple", instock: 2 },
  { name: "pineapple", instock: 3 },
  { name: "pear", instock: 0 },
  { name: "peach", instock: 3 },
  { name: "orange", instock: 1 },
];
ReactDOM.render(
  <NavBar stockitems={menuItems} />,
  document.getElementById("root")
);
