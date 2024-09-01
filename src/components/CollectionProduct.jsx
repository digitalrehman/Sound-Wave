import React, { useContext, useEffect, useState } from "react";
import Title from "./Title";
import { ContextProduct } from "../context/ContextProduct";
import EarBudsCard from "./EarBudsCard";
import { assets } from "../assets";
import SearchBar from "./SearchBar";
import toast from "react-hot-toast";

const CollectionProduct = () => {
  let { products, earbuds, gamingHeadphones, currency, search, searchVisible } =
    useContext(ContextProduct);
  let totalProducts = [...products, ...earbuds, ...gamingHeadphones];

  let [visibleFilter, setVisibleFilter] = useState(false);
  let [filterCollection, setFilterCollection] = useState([]);
  let [filterByCategory, setFilterByCategory] = useState([]);
  let [filterBySubCategory, setFilterBySubCategory] = useState([]);
  let [sortPrice, setSortPrice] = useState("relative");
  let filterProduct = (e) => {
    if (filterByCategory.includes(e.target.value)) {
      setFilterByCategory(
        filterByCategory.filter((item) => item !== e.target.value)
      );
    } else {
      setFilterByCategory([...filterByCategory, e.target.value]);
    }
  };
  let filterSubProduct = (e) => {
    if (filterBySubCategory.includes(e.target.value)) {
      setFilterBySubCategory(
        filterBySubCategory.filter((item) => item !== e.target.value)
      );
    } else {
      setFilterBySubCategory([...filterBySubCategory, e.target.value]);
    }
  };
  let filterApply = () => {
    let filteredProducts = totalProducts.slice();

    if (filterByCategory.length > 0) {
      filteredProducts = filteredProducts.filter((product) =>
        filterByCategory.includes(product.category)
      );
    }
    if (filterBySubCategory.length > 0) {
      filteredProducts = filteredProducts.filter((product) =>
        filterBySubCategory.includes(product.subCategory)
      );
    }
    if (search) {
      filteredProducts = filteredProducts.filter((product) =>
        product.name.toLowerCase().includes(search.toLowerCase())
      );
    }
    if (filteredProducts.length == 0) {
      toast.error("No products found with the given filters.");
      return;
    } else {
      setFilterCollection(filteredProducts);
    }

    setFilterCollection(filteredProducts);
  };
  useEffect(() => {
    filterApply();
  }, [filterByCategory, filterBySubCategory, search, searchVisible]);

  let sortPricing = () => {
    let fpCopy = filterCollection.slice();
    switch (sortPrice) {
      case "low-high":
        setFilterCollection(fpCopy.sort((a, b) => a.price - b.price));
        break;
      case "high-low":
        setFilterCollection(fpCopy.sort((a, b) => b.price - a.price));
        break;
      default:
        filterApply();
        break;
    }
  };
  useEffect(() => {
    sortPricing();
  }, [sortPrice]);

  return (
    <div>
      <SearchBar />
      <div className="text-white w-full flex md:flex-row flex-col">
        <div className="min-w-60 flex flex-col mt-5 border-gray-700  p-4 font-nowThin">
          <div
            className="flex items-center gap-3"
            onClick={() => setVisibleFilter(!visibleFilter)}
          >
            <h1 className="text-2xl font-nowRuguler font-semibold cursor-pointer">Filter</h1>
            <img
              src={assets.rightArrow}
              className={`invert ${
                visibleFilter ? "rotate-90" : "rotate-0"
              } mt-1 w-3 duration-300 md:hidden `}
            />
          </div>
          <div
            className={`border-gray-500 border pl-5 py-2 mt-4 rounded-md md:block ${
              visibleFilter ? "" : "hidden"
            } `}
          >
            <p className=" my-2 text-md">Category</p>
            <div className="flex gap-2 text-gray-400">
              <input
                type="checkbox"
                id="headphone"
                value={"headphone"}
                onChange={filterProduct}
              />
              <label htmlFor="headphone" className="text-sm">Headphones</label>
            </div>
            <div className="flex gap-2 text-gray-400">
              <input
                type="checkbox"
                id="gaming"
                value={"gaming"}
                onChange={filterProduct}
              />
              <label htmlFor="gaming" className="text-sm">Gaming Headphone</label>
            </div>
            <div className="flex gap-2 text-gray-400">
              <input
                type="checkbox"
                id="earBuds"
                value={"earBuds"}
                onChange={filterProduct}
              />
              <label htmlFor="earBuds" className="text-sm">EarBuds</label>
            </div>
          </div>

          <div
            className={`${
              visibleFilter ? "" : "hidden"
            } border-gray-500 border pl-5 py-2 mt-4 rounded-md md:block`}
          >
            <p className=" my-2 text-md">Type</p>
            <div className="flex gap-2 text-[17px] text-gray-400">
              <input
                type="checkbox"
                id="Wireless"
                value={"Wireless"}
                onChange={filterSubProduct}
              />
              <label htmlFor="Wireless" className="text-sm">Wireless</label>
            </div>
            <div className="flex gap-2 text-gray-400">
              <input
                type="checkbox"
                id="Wired"
                value={"Wired"}
                onChange={filterSubProduct}
              />
              <label htmlFor="Wired" className="text-sm">Wired</label>
            </div>
            <div className="flex gap-2 text-gray-400">
              <input
                type="checkbox"
                id="Over-Ear"
                value={"Over-Ear"}
                onChange={filterSubProduct}
              />
              <label htmlFor="Over-Ear" className="text-sm">Over-Ear</label>
            </div>

            <div className="flex gap-2 text-gray-400">
              <input
                type="checkbox"
                id="In-Ear"
                value={"In-Ear"}
                onChange={filterSubProduct}
              />
              <label htmlFor="In-Ear" className="text-sm">In-Ear</label>
            </div>
            <div className="flex gap-2 text-gray-400">
              <input
                type="checkbox"
                id="On-Ear"
                value={"On-Ear"}
                onChange={filterSubProduct}
              />
              <label htmlFor="On-Ear" className="text-sm">On-Ear</label>
            </div>
          </div>

        </div>
        <div className="w-full">
          <div className="flex flex-1 md:justify-between justify-center items-center px-4 lg:h-32   lg:flex-row flex-col">
            <div className="w-full lg:w-[65%]">
              <h1 className="text-2xl mb-3 text-center lg:text-left font-semibold font-nowRuguler">Explore Our Collection</h1>
              <p className="text-gray-500 text-sm lg:text-left font-nowThin text-center">Dive into expert advice, product reviews, and the latest trends in audio technology.</p>
            </div>
            <div className="flex justify-center items-center h-20">
              <select
                onChange={(e) => setSortPrice(e.target.value)}
                className=" text-black font-nowRuguler text-sm p-1 rounded-sm border-none outline-none w-44"
              >
                <option value="relative">Sort by: Relavent</option>
                <option value="low-high">Sort by: Low to High</option>
                <option value="high-low">Sort by: High to Low</option>
              </select>
            </div>
          </div>

          <div className="flex flex-wrap gap-3 items-center justify-center w-full">
            {filterCollection.map((item, index) => {
              return (
                <EarBudsCard
                  id={item.id}
                  key={index}
                  currency={currency}
                  image={item.img}
                  price={item.price}
                  name={item.name}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollectionProduct;
