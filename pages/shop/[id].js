import { useRouter } from "next/router";
import axios from "axios";
export default function Product({ product }) {
  const router = useRouter();
  const { id } = router.query;
  console.log(product);
  return (
    <div>
      <h3 className="text-2xl my-20 text-center">{product.title}</h3>
      <p className="text-lg">{product.description}</p>
      <p className="text-lg text-left">{product.category}</p>
      <p>{product.brand}</p>
      <div className="w-10/12 m-auto grid grid-cols-5 gap-3">
        <img src={product.thumbnail} alt="ii" className='w-10 h-20' />
        {product.images.map((el, i) => (
          <img src={el} key={i} alt="ii" className={`w-20 h-20`} />
        ))}
             
          </div>
          <p>Rating: {product.rating}</p>
              <p>$ {product.price }</p>
    </div>
  );
}

export async function getServerSideProps({ params }) {
  const res = await axios.get(`https://dummyjson.com/products/${params.id}`);

  return {
    props: { product: res.data },
  };
}
