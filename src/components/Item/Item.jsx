import './Item.css';

const Item = ({ title, price, image, category }) => {
  return (
    <>
      <img width={'auto'} hight={'400px'} src={image} alt={title} />
      <h2>{title}</h2>
      <h3>{category}</h3>
      <h3>{price}</h3>
    </>
  );
};

export default Item;
