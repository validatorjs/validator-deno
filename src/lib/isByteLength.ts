interface IsByteLengthOptions {
  min: number;
  max?: number;
}

const defaultIsByteLengthOptions: IsByteLengthOptions = {
  min: 0,
  max: undefined,
};

export default function isByteLength(
  str: string,
  options: IsByteLengthOptions = defaultIsByteLengthOptions,
): boolean {
  const len = encodeURI(str).split(/%..|./).length - 1;
  return len >= options.min &&
    (typeof options.max === "undefined" || len <= options.max);
}
