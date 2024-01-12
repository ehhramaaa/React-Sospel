/* eslint-disable react/prop-types */
import { useState } from "react";

const ProductList = ({ Modal, productModal, setProductModal, closeIconModal, Swiper }) => {
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [imageProduct, setImageProduct] = useState("/vite.svg");
    const [quantity, setQuantity] = useState(1);

    const handleDisable = selectedProduct === null;

    const products = [
        { id: '1', name: 'Manis', price: '10000', img: '/src/assets/img/product2.png' },
        { id: '2', name: 'Pedas', price: '15000', img: '/src/assets/img/product3.png' },
        { id: '3', name: 'Pedas Gila', price: '20000', img: '/src/assets/img/product4.png' },
    ];

    const handleImageSelect = (productId) => {
        setImageProduct(productId);
    };

    const handleProductChange = (productId) => {
        setSelectedProduct(productId);
    };

    const handleQuantityChange = (event) => {
        const newQuantity = parseInt(event.target.value, 10);
        setQuantity(isNaN(newQuantity) ? 0 : newQuantity);
    };

    const gotoSlide = (index) => {
        swiper.slideTo(index);
    };

    const calculateTotal = () => {
        const selectedProductData = products.find(product => product.id === selectedProduct);
        if (selectedProductData) {
            return selectedProductData.price * quantity;
        }
    };

    const swiper = new Swiper(".swiper", {
        speed: 500,
        allowTouchMove: false,
    });

    const restart = () => {
        gotoSlide(0);
    };

    const handleConfirm = () => {
        alert("Pesan berhasil dikonfirmasi!");
        window.location.reload(); // Merefresh halaman setelah konfirmasi
    };

    return (
        <>
            <Modal
                open={productModal}
                onClose={() => [setProductModal(false)]}
                center
                closeIcon={closeIconModal}
                classNames={{
                    overlay: 'customOverlay',
                    modal: 'customModal',
                }}
            >
                <div className="authCard">
                    <div className="swiper">
                        <div className="swiper-wrapper">
                            {/* Product */}
                            <div className="swiper-slide">
                                <h2>Select Product</h2>
                                <div className="row">
                                    <div className="col-sm-6">
                                        <img src={imageProduct} alt="Slide 1" style={{ width: '100%' }} />
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="select">
                                            {products.map((product) => (
                                                <div key={product.id} className="product">
                                                    <input
                                                        type="radio"
                                                        id={`product-${product.id}`}
                                                        name="selectedProduct"
                                                        value={product.id}
                                                        checked={selectedProduct === product.id && imageProduct === product.img}
                                                        onChange={() => {
                                                            handleProductChange(product.id);
                                                            handleImageSelect(product.img);
                                                        }}
                                                        required
                                                    />

                                                    <label htmlFor={`product-${product.id}`}>
                                                        {product.name} - Rp {product.price}
                                                    </label>
                                                </div>
                                            ))}
                                        </div>
                                        <div className="quantity">
                                            <label htmlFor="quantity">Jumlah:</label>
                                            <input
                                                type="number"
                                                id="quantity"
                                                name="quantity"
                                                value={quantity === 0 ? 1 : quantity}
                                                onChange={handleQuantityChange}
                                                min="1"
                                                required
                                            />
                                        </div>
                                        <button disabled={handleDisable} style={{ width: "80%" }} type="button" onClick={() => gotoSlide(1)}>Checkout</button>
                                    </div>
                                </div>
                            </div>

                            {/* Checkout */}
                            <div className="swiper-slide">
                                <h2>Rincian Pesanan</h2>
                                <div className="row rincian">
                                    <div className="col-sm-4">
                                        <img src={imageProduct} alt="Slide 1" style={{ width: '100%' }} />
                                    </div>
                                    <div className="col-sm-8">
                                        <div className="rincian-pesanan">
                                            <table>
                                                <thead>
                                                    <tr>
                                                        <th>Produk</th>
                                                        <th>Harga</th>
                                                        <th>Jumlah</th>
                                                        <th>Total Harga</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>{products.find(product => product.id === selectedProduct)?.name}</td>
                                                        <td>Rp {products.find(product => product.id === selectedProduct)?.price}</td>
                                                        <td>{quantity}</td>
                                                        <td>Rp {calculateTotal()}</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                                <div className="butt">
                                    {/* <button type="button" onClick={() => togglePassword(this)}>ss</button> */}
                                    <button type="button" onClick={() => restart()}>Back</button>
                                    <button type="button" onClick={handleConfirm}>Confirm</button>
                            </div>

                            {/* Toggle Show Password */}
                            {/* <button className="toggle" type="button" onClick={() => togglePassword(this)}></button> */}
                            {/* End Toggle */}

                            {/* </div> */}

                        </div>
                    </div>
                    <div className="swiper-pagination" />
                </div>
            </div>
        </Modal >
        </>
    )
}

export default ProductList