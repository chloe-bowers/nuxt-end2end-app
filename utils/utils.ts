//render final instance of key, value pair
export const renderUser = (user: Record<string, string>): string => {
  return Object.entries(user)
    .map(([key, value]) => {
      return `<li>${renderValue(key, value)}</li>`;
    })
    .join('');
};

//render the values using labels or nested objects
export const renderValue = (key: string, value: string): string => {
  if (
    typeof value === 'object' &&
    value !== null &&
    Object.keys(value).length > 0
  ) {
    return `<span>${generateLabel(key)}:</span><ul>${renderNestedObjects(
      value
    )}</ul>`;
  } else {
    return `<span>${generateLabel(key)}:</span> ${generateValue(value)}`;
  }
};

//to map and render nested objects in the json response
export const renderNestedObjects = (
  object: Record<string, string>
): string => {
  return Object.entries(object)
    .map(([key, value]) => {
      if (
        typeof value === 'object' &&
        value !== null &&
        Object.keys(value).length > 0
      ) {
        return `<li>${renderValue(key, value)}</li>`;
      } else {
        return `<li><span>${generateLabel(key)}:</span> ${generateValue(
          value
        )}</li>`;
      }
    })
    .join('');
};

//Generate label from key, seperate camelCase and split to human readable
export const generateLabel = (key: string): string => {
  const camelCaseRegex = /([a-z])([A-Z])/g; //fiund camel case regex
  const pascalCaseWithSpace = key.replace(camelCaseRegex, '$1 $2'); //convert camelCase to pascal

  return pascalCaseWithSpace.charAt(0).toUpperCase() + pascalCaseWithSpace.slice(1);
};

//do not generate value if object, continue through nest
export const generateValue = (value: string): string => {
  return typeof value === 'object' && value !== null ? '' : value;
};
