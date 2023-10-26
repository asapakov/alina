export const setRequestToLs = (request) => {
  const data = getRequestFromLs();
  data.push({ ...request, id: data.length + 1 ?? 1 });
  localStorage.setItem('requests', JSON.stringify(data));
};

export const getRequestFromLs = () => {
  const data = localStorage.getItem('requests');
  if (!data) {
    localStorage.setItem('requests', JSON.stringify([]));
    return [];
  }
  return JSON.parse(data);
};

export const deleteFromLs = (id: number) => {
  const data = getRequestFromLs();
  const newData = data.filter((d) => d.id !== id);
  localStorage.setItem('requests', JSON.stringify(newData));
};
