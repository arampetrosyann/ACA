const getUser = function (key) {
  try {
    const data = localStorage.getItem(key);

    if (!data) {
      return undefined;
    } else {
      const userObj = JSON.parse(data);

      return userObj;
    }
  } catch (error) {
    return undefined;
  }
};

const setUser = function (key, userObj) {
  try {
    const data = JSON.stringify(userObj);

    localStorage.setItem(key, data);
  } catch (error) {
    throw new Error("Failed to save changes in Local storage");
  }
};

export { getUser, setUser };
