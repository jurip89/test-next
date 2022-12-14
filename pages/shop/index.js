import axios from "axios";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { addItem } from "../../store/slice";
export default function PorductsList({ products }) {
  const dispatch =useDispatch()
  return (
    <div>
      <h2>Product List</h2>
      <div className="m-auto w-10/12 grid grid-cols-4 gap-3">
        {products.map((el) => (
          <div className="w-10/12 m-auto text-center" key={el?.id}>
            <Link href={`shop/${el.id}`}>
              <h5 className="text-2xl">{el?.title}</h5>
              <img
                src={el.thumbnail}
                alt='ii'
                className={`rounded-full w-20 h-20 m-auto`}
              />
              <p>{el.brand}</p>
            </Link>
            <button onClick={()=>dispatch(addItem(el))} className="bg-green-500 hover:bg-green-200">Add to cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}
export async function getStaticProps() {
  const res = await axios.get(`https://dummyjson.com/products`);
  return {
    props: res.data,
  };
}


