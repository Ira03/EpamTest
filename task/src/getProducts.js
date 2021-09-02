// const token = 'fQOzW3TLH6X4hq69i4j6vg';
// const id = 'sDUX9BwQ';
const id2 = 'yjY8J9su';
const token2 = 'ReAo5kxC_hvrsCgy_G2Q7g';
export const BASE_URL = `https://app.fakejson.com/q/${id2}?token=${token2}`;

export const getProducts = async () => {
  const res = await fetch(BASE_URL);

  if (res.ok) {
    const data = await res.json();
    const { products } = data;
    return products;
  }
  throw new Error('Failed request');
};
