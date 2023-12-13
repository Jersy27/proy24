import { data } from '../components/data';
export const Sex = ({
	allProducts,
	setAllProducts,
	countProducts,
	setCountProducts,
	total,
	setTotal,
}) => {
  <div>
    <div></div>
    <div></div>
    <div></div>
  </div>
	const onAddProduct = product => {
		if (allProducts.find(item => item.id === product.id)) {
			const products = allProducts.map(item =>
				item.id === product.id
					? { ...item, quantity: item.quantity + 1 }
					: item
			);
			setTotal(total + product.price * product.quantity);
			setCountProducts(countProducts + product.quantity);
			return setAllProducts([...products]);
		}

		setTotal(total + product.price * product.quantity);
		setCountProducts(countProducts + product.quantity);
		setAllProducts([...allProducts, product]);
	};

	return (
    <div>
    <div className='com6'><h1>COMPRAS ONLINE</h1></div>
    <div><div className='container-items'>
			{data.map(product => (
				<div className='item' key={product.id}>
					<figure>
						<img src={product.img} alt={product.nameProduct} />
					</figure>
					<div className='info-product'>
						<h2>{product.nameProduct}</h2>
						<p className='price'>${product.price}</p>
						<button onClick={() => onAddProduct(product)}>
							Comprar
						</button>
					</div>
				</div>))}
        </div>
    <div>Las compras llegaran de acuerdo al lugar de donde pertenece por favor llenar el formulario antes de utilizar o realizar una compra online </div>
  </div>
		
			
		</div>
	);
};