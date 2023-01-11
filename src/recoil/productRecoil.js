import { atom, selector } from "recoil";

export const productState = atom({
  key: "productState",
  default: [
    {
      name: "Huawei MateBook X Pro",
      laptop: "https://consumer.huawei.com/content/dam/huawei-cbg-site/common/mkt/pdp/pc/matebook-x-pro-2021/grey.png",
      price: 481,
      type: "laptop",
      id: 1,
    },
    {
      name: "Apple Macbook Pro 2018",
      laptop: "https://support.apple.com/library/APPLE/APPLECARE_ALLGEOS/SP776/sp776-mbp15touch-space.jpeg",
      price: 426,
      type: "laptop",
      id: 2,
    },
    {
      name: "Dell XPS 13",
      laptop: "https://i.dell.com/is/image/DellContent/content/dam/ss2/page-specific/dell-homepage/en/heroes/pl-cons-dell-inspiron-7420t-uhp-2302-03-in-homepage-hero-1023x842-v2-2-lr.png?fmt=pjpg&pscan=auto&scl=1&wid=1024&hei=842&qlt=100&resMode=sharp2&op_usm=1.75,0.3,2,0&size=1024,842",
      price: 362,
      type: "laptop",
      id: 3,
    },
    {
      name: "Asus ZenBook Flip S",
      price: 162,
      laptop: "https://www.asus.com/us/site/zenbook/assets/images/img/ux371/kv-2.jpg",
      type: "laptop",
      id: 4,
    },
    {
      name: "Samsung Notebook 9",
      laptop: "https://img.us.news.samsung.com/us/wp-content/uploads/2018/12/14103959/PR-Airforce_KV_B-Type_Output.jpg",
      price: 479,
      type: "laptop",
      id: 5,
    }
  ],
});

export const viewState = atom({
  key: "viewState",
  default: "column",
});

export const searchTextState = atom({
  key: "searchTextState",
  default: "",
});

export const productFilteredState = atom({
  key: "productFilteredState",
  default: "",
});

export const filteredProducts = selector({
  key: "filteredProducts",
  get: ({ get }) => {
    const products = get(productState);
    const searchText = get(searchTextState);
    const filterItem = get(productFilteredState);
    let filteredProducts = [];
    filteredProducts = products
      .filter((product) => product.name.includes(searchText))
      .filter((product) =>
        filterItem === "" ? true : product.type === filterItem
      );

    return filteredProducts;
  },
});

export const filteredCounts = selector({
  key: "filteredCounts",
  get: ({ get }) => {
    let filtredProductsCount = get(filteredProducts);
    return filtredProductsCount.length;
  },
});
