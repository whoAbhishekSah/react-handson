export const get = async (url) => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Failed to fetch url ${url}`);
  }
  const res = await response.json();
  return res;
};
