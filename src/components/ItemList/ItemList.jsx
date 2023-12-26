import { Link } from 'react-router-dom';
import Item from '../Item/Item';
import './ItemList.css';

const ItemList = ({ lista }) => {
  console.log(lista);
  return (
    <div className="item-list">
      {lista.map((item) => (
        <Link
          key={item.id}
          to={`/details/${item.id}`}
          style={{ textDecoration: 'none' }}
        >
          <Item
            title={item.title}
            price={item.price}
            category={item.category}
            descrption={item.category}
            image={item.image}
          />
        </Link>
      ))}
    </div>

    // <>
    //   {lista.map((product) => (
    //     <Item
    //       key={product.id}
    //       title={product.title}
    //       price={product.price}
    //       image={product.image}
    //     />
    //   ))}
    //   ;
    // </>
  );
};

export default ItemList;
