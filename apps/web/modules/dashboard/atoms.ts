import { atomWithStorage } from "jotai/utils";
import { Doc } from "@workspace/backend/_generated/dataModel";
import { STATUS_FILTER_KEYS } from "./constants";

export const statusFilterAtom = atomWithStorage<
  Doc<"conversations">["status"] | "all"
>(STATUS_FILTER_KEYS, "all");
