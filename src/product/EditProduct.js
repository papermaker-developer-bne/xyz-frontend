import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";


export const EditProduct = ({ match: { params: { productId } }, history }) => {
  // save the single product data in localstorage
  const [products, setProducts] = useState(JSON.parse(localStorage.getItem('products')) || []);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [relatedProId, setRelatedProId] = useState([]);
  const [base, setBase] = useState('');
  const [id, setId] = useState('');

  const currentProduct = products?.find(item => parseInt(item.id) === parseInt(productId));

  const saveProduct = () => {
    const newProducts = products?.map(product => {
      return product.id === currentProduct.id ? {
        id,
        name,
        description,
        price: {
          amount,
          base,
        },
        relatedProducts: relatedProId,
      }
        :
        product;
    });
    setProducts(newProducts);
    alert("Saved!");
  };

  const toggleRelatedProId = (e) => {
    const id = parseInt(e.target.value);
    relatedProId.includes(id) ? relatedProId.splice(relatedProId.indexOf(id), 1) : relatedProId.push(id);
    console.log(relatedProId);
    setRelatedProId([...relatedProId]);
  };

  const checkedIdIsUnique = (e) => {
    const id = parseInt(e.target.value || 0);
    setId(id);
    if (products?.find(pro => id === pro.id)) {
      alert("This ID already exists, please change to another one.");
    }
  };

  useEffect(() => {
    setName(currentProduct?.name)
    setDescription(currentProduct?.description)
    setAmount(currentProduct?.price.amount)
    setRelatedProId(currentProduct?.relatedProducts)
    setBase(currentProduct?.price.base)
    setId(currentProduct?.id)
  }, []);

  useEffect(() => {
    localStorage.setItem('products', JSON.stringify(products))
  }, [products]);

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="/">
          XYZ
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
      </nav>

      <div style={{ margin: '50px auto', width: '500px' }}>
        <form>
          <div className="form-group">
            <label htmlFor="exampleFormControlInput1">Product ID</label>
            <input type="text" className="form-control" id="exampleFormControlInput1" value={id} onChange={checkedIdIsUnique} />
          </div>
          <div className="form-group">
            <label htmlFor="exampleFormControlInput1">Product name</label>
            <input type="text" className="form-control" id="exampleFormControlInput1" value={name} onChange={(e) => setName(e.target.value)} required minLength="3" />
          </div>
          < div className="form-group" >
            <label htmlFor="exampleFormControlInput1">Currency base</label>
            <select className="form-control" onChange={(e) => setBase(e.target.value)}>
              <option selected={base === 'AUD'}>AUD</option>
              <option selected={base === 'USD'}>USD</option>
              <option selected={base === 'CNY'}>CNY</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="exampleFormControlInput1">Price</label>
            <input type="text" className="form-control" id="exampleFormControlInput1" value={amount} onChange={(e) => setAmount(e.target.value)} required />
          </div>
          <div className="form-group">
            <label htmlFor="exampleFormControlInput1">Description</label>
            <input type="text" className="form-control" id="exampleFormControlInput1" value={description} onChange={(e) => setDescription(e.target.value)} required />
          </div>
          <div className="form-group">
            <label htmlFor="exampleFormControlInput1">Related products</label>
            <div className="form-group">
              {
                products?.map(product => (
                  product?.id !== currentProduct?.id &&
                  <div className="form-check form-check-inline" key={product.id}>
                    <input className="form-check-input" type="checkbox" id={product.id} value={product.id} onChange={toggleRelatedProId} checked={relatedProId?.find(id => id === product.id)} />
                    <label className="form-check-label" htmlFor={product.id}>{product.id}-{product.name}</label>
                  </div>
                ))
              }

            </div>
          </div>
          <button type="submit" className="btn btn-primary" onClick={saveProduct}>SAVE</button>
          <Link to={`/`}>
            <button type="btn" className="btn btn-secondary ml-4">BACK TO HOMEPAGE</button>
          </Link>
        </form>
      </div>
    </div>
  )
}
