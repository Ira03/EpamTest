const id = 'keNk1ejp';
const token = 'PBpdcgHHawV_YEqwMPrRLQ';
export const BASE_URL = `https://app.fakejson.com/q/${id}?token=${token}`;

export const getProducts = async () => {
  const res = await fetch(BASE_URL);

  if (res.ok) {
    const data = await res.json();
    const { products } = data;
    return products;
  }
  throw new Error('Failed request');
};
