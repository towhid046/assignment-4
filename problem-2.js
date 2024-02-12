// Problem-02: Good Name , Bad Name:

function checkName(name) {
  if (typeof name !== "string") {
    return "Invalid Name";
  }
  const lastCharacter = name[name.length - 1].toLowerCase();
  switch (lastCharacter) {
    case "a":
    case "y":
    case "i":
    case "e":
    case "o":
    case "u":
    case "w":
      return "Good Name";
    default:
      return "Bad Name";
  }
}
