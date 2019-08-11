export const setItem = (key, object) => {
  if (key && object) {
    localStorage.setItem(key, JSON.stringify(object));
  }
};

export const getItem = key => {
  if (key) {
    let item = localStorage.getItem(key);
    if (item) return JSON.parse(item);
  }
  return null;
};

export const removeItem = key => {
  if (key) {
    localStorage.removeItem(key);
  }
};
