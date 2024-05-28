import { useEffect, useState } from "react";

const ProductList = ({ category }: { category: string }) => {
  const [products, setProducts] = useState<string[]>([]);

  // without a dependency array, the effect runs after every render
  // so it is called after the first render and after every update
  // which caused an infinite loop
  useEffect(() => {
    // we see this message twice in the console
    // because the component is rendered twice which is cause by the strict mode.
    console.log("fetching product,", category);
    setProducts([`${category} product 1`]);
  }, [category]); // we need to use category as a dependency to run the effect when the category changes

  // [] means the effect runs only once after the first render
  // [category] means the effect runs after the first render and after every update

  return <div>ProductList</div>;
};

export default ProductList;
