export const isValidStr = function (val) {
    if (!val) {
        return false;
    }

    return true;
}

export const isValidNum = function (val) {
    if (!val || val < 0 || val > 999999999) {
        return false;
    }

    return true;
}