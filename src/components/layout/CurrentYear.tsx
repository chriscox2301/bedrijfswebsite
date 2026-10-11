import { cacheLife } from "next/cache";

/**
 * Het huidige jaartal voor de copyright-regel.
 * Met cacheComponents mag `new Date()` niet zomaar tijdens het prerenderen;
 * daarom cachen we de uitkomst en vernieuwen we die dagelijks.
 */
export async function CurrentYear() {
  "use cache";
  cacheLife("days");
  return <>{new Date().getFullYear()}</>;
}
