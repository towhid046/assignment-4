// Problem 04 : Make A Great Password:

function password(obj) {
  if (typeof obj !== "object" || obj.birthYear.toString().length !== 4) {
    return "invalid";
  }
  const firstCharacterOfSiteName = obj.siteName
    ? obj.siteName[0].toUpperCase()
    : "invalid";

  const restCharacterOfSiteName = obj.siteName
    ? obj.siteName.split("").slice(1).join("")
    : "invalid";

  const nameOfSite =
    firstCharacterOfSiteName === "invalid" ||
    restCharacterOfSiteName === "invalid"
      ? "invalid"
      : firstCharacterOfSiteName + restCharacterOfSiteName;

  let result = `${nameOfSite ? nameOfSite : "invalid"}#${obj.name}@${
    obj.birthYear
  }`;

  if (
    nameOfSite === "invalid" ||
    obj.name === undefined ||
    obj.birthYear === undefined
  ) {
    return "invalid";
  } else {
    return result;
  }
}
