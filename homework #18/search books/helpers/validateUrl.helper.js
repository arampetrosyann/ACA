const validateUrl = function (value) {
    let normValue = value.trim().toLowerCase();
  
    normValue = normValue.replace(/\s/g, "+");
  
    return normValue;
}

export default validateUrl;