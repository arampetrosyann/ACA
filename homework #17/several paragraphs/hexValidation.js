const isHex = function (color) {
    if (typeof color !== 'string') {
        return false;
    } 

    if (!color) { 
        return true;
    }

    return /^#[0-9A-F]{6}$/i.test(color);
}

export default isHex;