"use strcit"

const isKeyIncluded = function (object, inKey) {
  for (const key in object) {
    if (key === inKey) return true;
  }

  return false;
}

console.log(isKeyIncluded({ user: "Steve", name: "Jobs" }, "name"))
