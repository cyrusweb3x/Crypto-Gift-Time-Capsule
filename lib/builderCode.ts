// lib/builderCode.ts

import { Attribution } from "ox/erc8021";

export const DATA_SUFFIX = Attribution.toDataSuffix({
  codes: ["bc_5f8xm7gq"],
});

export function appendBuilderCode(encodedData: string): string {
 
  const suffix = DATA_SUFFIX.startsWith("0x")
    ? DATA_SUFFIX.slice(2)
    : DATA_SUFFIX;

  
  const clean = encodedData.startsWith("0x")
    ? encodedData.slice(2)
    : encodedData;

  return "0x" + clean + suffix;
}