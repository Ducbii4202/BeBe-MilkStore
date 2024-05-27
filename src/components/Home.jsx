import { useEffect, useState } from "react";
import Information from "./Information";
import { renderProducts } from "../utils/Utils";

export default function Home() {
  const [productsSale, setProductsSale] = useState([]);
  const [productsHot, setProductsHot] = useState([]);
  const [productsTrend, setProductsTrend] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/products")
      .then((response) => response.json())
      .then((data) => {
        const shuffled = data.sort(() => 0.5 - Math.random());
        setProductsSale(shuffled.slice(0, 4));
        setProductsHot(shuffled.slice(4, 8));
        setProductsTrend(shuffled.slice(8, 12));
      })
      .catch((error) => console.error("Error fetching data: ", error));
  }, []);

  return (
    <>
      <div className="flex flex-col items-center bg-blue-100">
        <img
          src="https://cdn-v2.kidsplaza.vn/media/mageplaza/bannerslider/banner/image/k/v/kv-sn-16-tuoi.chot-01_6.png"
          className="w-11/12"
        />
        <div className="flex justify-around my-6 w-fit mx-6">
          <div className="bg-white p-4 rounded-lg shadow-md w-1/5">
            <img src="https://cdn-v2.kidsplaza.vn/media/mageplaza/bannerslider/banner/image/k/v/kv-sn-16-tuoi.chot-01_6.png" />
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md w-1/5">
            <img src="https://cdn-v2.kidsplaza.vn/media/mageplaza/bannerslider/banner/image/k/v/kv-sn-16-tuoi.chot-01_6.png" />
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md w-1/5">
            <img src="https://cdn-v2.kidsplaza.vn/media/mageplaza/bannerslider/banner/image/k/v/kv-sn-16-tuoi.chot-01_6.png" />
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md w-1/5">
            <img src="https://cdn-v2.kidsplaza.vn/media/mageplaza/bannerslider/banner/image/k/v/kv-sn-16-tuoi.chot-01_6.png" />
          </div>
        </div>
        <div className="bg-white-500 w-11/12">
          <div className="bg-blue-700 text-white p-4 rounded-t-lg flex justify-between items-center">
            <h1 className="text-2xl font-bold">FLASH SALE THÁNG 5:</h1>
            <a href="/list-product" className="text-white underline">
              Xem tất cả &gt;&gt;
            </a>
          </div>
          <div className="bg-white p-4 rounded-b-lg shadow-md">
            {renderProducts(productsSale)}
          </div>
        </div>
        <div className="bg-white-100 my-10 w-11/12">
          <div className="bg-white p-4 rounded-t-lg flex justify-between items-center border-b">
            <h1 className="text-2xl font-bold">SẢN PHẨM BÁN CHẠY</h1>
          </div>
          <div className="bg-white p-4 rounded-b-lg shadow-md">
            {renderProducts(productsHot)}
          </div>
        </div>
        <div className="bg-white-100 mb-10 w-11/12">
          <div className="bg-white p-4 rounded-t-lg flex justify-between items-center border-b">
            <h1 className="text-2xl font-bold">XU HƯỚNG TÌM KIẾM</h1>
          </div>
          <div className="bg-white p-4 rounded-b-lg shadow-md">
            {renderProducts(productsTrend)}
          </div>
        </div>
        <img src="./public/assets/images/image 34.png" className="w-11/12" />
        <Information />
      </div>
    </>
  );
}
