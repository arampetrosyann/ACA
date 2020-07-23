export const normName = function (name) {
    name = name.trim();

    name = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();

    return name;
}

export const normEmail = function (email) {
    email.trim();

    return email;
}