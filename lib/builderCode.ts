// lib/builderCode.ts

export function getBuilderCodeSuffix(): string {
  const code = "bc_5f8xm7gq";
  const hex = Array.from(new TextEncoder().encode(code))
    .map(b => b.toString(16).padStart(2, "0"))
    .join("");
  return hex + "8021802180218021";
}

export function appendBuilderCode(encodedData: string): string {
  const suffix = getBuilderCodeSuffix();
  const clean = encodedData.startsWith("0x")
    ? encodedData.slice(2)
    : encodedData;
  return "0x" + clean + suffix;
}