const formatPrice = (price) => {
  if (typeof price === 'number') {
    return Number.isInteger(price) ? price : price.toFixed(2);
  }
  return price;
};

const MenuItem = ({ item }) => {
  return (
    <div className="menu-item">
      <div className="item-header">
        <div className="item-name">{item.name}</div>
        <div className="item-prices">
          {Object.entries(item.prices).map(([label, price], index) => (
            <div className="price-unit" key={index}>
              {label !== 'Price' && <span className="price-label">{label}</span>}
              <span className="price-value">{formatPrice(price)}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="item-desc">{item.description}</div>
    </div>
  );
};

export default MenuItem;
