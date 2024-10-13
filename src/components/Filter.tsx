"use client"

import { usePathname, useSearchParams, useRouter } from "next/navigation";
import React from "react";

const Filter = () => {

  const pathname = usePathname();
  const searchParams = useSearchParams();
  const {replace} = useRouter();
  const handleFilterChange = (e:React.ChangeEvent<HTMLSelectElement | HTMLInputElement>)=>{
    const {name,value} = e.target;
    console.log(name,value);
  }

  return (
    <div className="mt-12 flex justify-between">
      <div className="flex gap-6 flex-wrap">
        <select
          name="type"
          id=""
          className="py-2 px-4 rounded-2xl text-xs font-medium bg-[#EBEDED]"
          onChange={handleFilterChange}
        >
          <option value="">Ürün Çeşidi</option>
          <option value="elbise">Elbise</option>
          <option value="etek">Etek</option>
          <option value="pantolon">Pantolon</option>
          <option value="takim">Takım</option>
          <option value="tshirt">Tişört</option>
        </select>
        <input
          type="text"
          name="min"
          placeholder="En Düşük"
          className="text-xs rounded-2xl pl-2 w-24 ring-1 ring-gray-400"
          onChange={handleFilterChange}
        />
        <input
          type="text"
          name="max"
          placeholder="En Yüksek"
          className="text-xs rounded-2xl pl-2 w-24 ring-1 ring-gray-400"
          onChange={handleFilterChange}
        />
        
        <select
          name="category"
          id=""
          className="py-2 px-4 rounded-2xl text-xs font-medium bg-[#EBEDED]"
          onChange={handleFilterChange}
        >
          <option value="">Category</option>
          <option value="newproducts">Yeni Gelenler</option>
          <option value="popular">Popüler Ürünler</option>
          <option value="hotsale">Çok Satanlar</option>
        </select>
        <div>
          <select
            name="sort"
            id=""
            className="py-2 px-4 rounded-2xl text-xs font-medium bg-white ring-1 ring-gray-400"
            onChange={handleFilterChange}
          >
            <option>Sırala</option>
            <option value="">Fiyat(artan)</option>
            <option value="">Fiyat(azalan)</option>
            <option value="">En Yeni</option>
            <option value="">En Eski</option>
          </select>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Filter;
