export function limitCharacter(text: string) {
  return text !== null && text?.length > 100
    ? text.slice(0, 100) + " ..."
    : text;
}

export function replaceCharacters(
  text: string,
  replacementCharacter: string = "-",
  replacementWith: boolean = false
): string {
  if (replacementWith) {
    return text.replace(new RegExp(replacementCharacter, "g"), " ");
  } else {
    const regularExpressions = new RegExp(`[${replacementCharacter}\\s]+`, "g");
    return text.replace(regularExpressions, replacementCharacter);
  }
}
