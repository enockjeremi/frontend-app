export function limitCharacter(text: string) {
  return text !== null && text?.length > 100
    ? text.slice(0, 100) + " ..."
    : text;
}
