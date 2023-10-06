const useLocalStorage = (key: string) => {
    const setOrUpdateValue = (value: string) =>
        window.localStorage.setItem(key, value);

    const getValue = () => window.localStorage.getItem(key);
    const removeValue = () => window.localStorage.removeItem(key);

    return { setOrUpdateValue, getValue, removeValue };
};

export default useLocalStorage;
