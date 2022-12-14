import Link from "next/link";

const Nav = () => {
  return (
      <div className='w-full text-end 
     bg-green-300'>
      <Link href='/shop'>Shop 🛍️</Link>
      <Link className="m-10" href='/cart'>Cart 🛒</Link>
      
    </div>
  );
};

export default Nav
