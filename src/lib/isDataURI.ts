const validMediaType: RegExp = /^[a-z]+\/[a-z0-9\-\+]+$/i;

const validAttribute: RegExp = /^[a-z\-]+=[a-z0-9\-]+$/i;

const validData: RegExp = /^[a-z0-9!\$&'\(\)\*\+,;=\-\._~:@\/\?%\s]*$/i;

export default function isDataURI(str: string): boolean {
  let data: any[] = str.split(",");
  if (data.length < 2) {
    return false;
  }
  const attributes: any = data.shift().trim().split(";");
  const schemeAndMediaType = attributes.shift();
  if (schemeAndMediaType.substr(0, 5) !== "data:") {
    return false;
  }
  const mediaType = schemeAndMediaType.substr(5);
  if (mediaType !== "" && !validMediaType.test(mediaType)) {
    return false;
  }
  for (let i = 0; i < attributes.length; i++) {
    if (
      i === attributes.length - 1 && attributes[i].toLowerCase() === "base64"
    ) {
      // ok
    } else if (!validAttribute.test(attributes[i])) {
      return false;
    }
  }
  for (let i = 0; i < data.length; i++) {
    if (!validData.test(data[i])) {
      return false;
    }
  }
  return true;
}
