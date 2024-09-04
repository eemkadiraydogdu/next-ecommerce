const Filter = () => {
  return (
    <div className="mt-12 flex justify-between">
      <div className="flex gap-6 flex-wrap">
        <select
          name="type"
          id=""
          className="py-2 px-4 rounded-2xl text-xs font-medium bg-[#EBEDED]"
        >
          <option value="">Type</option>
          <option value="pyhsical">Pyhsical</option>
          <option value="digital">Digital</option>
        </select>
        <input
          type="text"
          name="min"
          placeholder="En Düşük"
          className="text-xs rounded-2xl pl-2 w-24 ring-1 ring-gray-400"
        />
        <input
          type="text"
          name="max"
          placeholder="En Yüksek"
          className="text-xs rounded-2xl pl-2 w-24 ring-1 ring-gray-400"
        />
        <select
          name="size"
          id=""
          className="py-2 px-4 rounded-2xl text-xs font-medium bg-[#EBEDED]"
        >
          <option value="">Size</option>
          <option value="s">S</option>
          <option value="m">M</option>
          <option value="l">L</option>
          <option value="xl">XL</option>
        </select>
        <select
          name="color"
          id=""
          className="py-2 px-4 rounded-2xl text-xs font-medium bg-[#EBEDED]"
        >
          <option value="">Color</option>
          <option value="siyah">Siyah</option>
          <option value="beyaz">Beyaz</option>
        </select>
        <select
          name="category"
          id=""
          className="py-2 px-4 rounded-2xl text-xs font-medium bg-[#EBEDED]"
        >
          <option value="">Category</option>
          <option value="pyhsical">Yeni Gelenler</option>
          <option value="digital">Popüler Ürünler</option>
          <option value="digital">Çok Satanlar</option>
        </select>
        <select
          name=""
          id=""
          className="py-2 px-4 rounded-2xl text-xs font-medium bg-[#EBEDED]"
        >
          <option value="">Filtreler</option>
          <option>Bütün Filtreler</option>
        </select>
        <div>
          <select
            name=""
            id=""
            className="py-2 px-4 rounded-2xl text-xs font-medium bg-white ring-1 ring-gray-400"
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
