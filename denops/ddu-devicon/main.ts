import { Denops } from "https://deno.land/x/denops_std@v4.3.3/mod.ts";
import {
  DeviconDef,
  getDeviconDef,
  iconFileExtension,
  iconFilename,
} from "./def.ts";

function getHighlightGroup(def: DeviconDef) {
  return `DduDevIcon${def.name}`;
}

async function setupHighlight(denops: Denops, def: DeviconDef) {
  const hl_group = getHighlightGroup(def);
  await denops.cmd(`hi default ${hl_group} guifg=${def.color}`);
}

type IconData = {
  icon?: string;
  hl_group?: string;
};

export function getIconData(
  filename: string,
): IconData {
  const def = getDeviconDef(filename);
  if (def) {
    return { icon: def.icon, hl_group: getHighlightGroup(def) };
  } else {
    return {};
  }
}

export function main(denops: Denops) {
  Promise.all(
    [...Object.values(iconFilename), ...Object.values(iconFileExtension)]
      .map((def) => setupHighlight(denops, def)),
  );
}
