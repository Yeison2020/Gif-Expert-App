export const getGifs = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=iFSlLsxHOes7vH9IQw3NV9x457OJRzZy&q=${encodeURI(
    category
  )}&limit=101`;

  const resp = await fetch(url);
  const { data } = await resp.json();
  const gifs = data.map((img) => {
    return {
      id: img.id,
      title: img.title,
      url: img.images?.downsized_medium.url,
    };
  });
  return gifs;
};
