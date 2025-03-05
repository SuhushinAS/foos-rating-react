export const debounce = (func: (...arg: any) => void, wait: number) => {
  let timeout;

  return (...args) => {
    clearTimeout(timeout);

    timeout = setTimeout(() => {
      timeout = null;

      func(...args);
    }, wait);
  };
};
