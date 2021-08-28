export const BASE_URL = 'https://app.fakejson.com/q/yjY8J9su?token=ReAo5kxC_hvrsCgy_G2Q7g';

export const getProducts = async () => {
  const res = await fetch(BASE_URL);
  if (res.ok) {
    const data = await res.json();
    const { products } = data;
    return products;
  }
  throw new Error('Failed request');
};
