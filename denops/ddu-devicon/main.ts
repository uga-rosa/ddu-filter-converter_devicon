import { Denops } from "https://deno.land/x/denops_std@v5.0.1/mod.ts";
import { batch } from "https://deno.land/x/denops_std@v5.0.1/batch/mod.ts";
import { extname } from "https://deno.land/std@0.200.0/path/mod.ts";
import {
  DeviconDef,
  getDeviconDef,
  IconFileExtension,
  IconFilename,
  IconFolder,
} from "./def.ts";

function getHighlightGroup(def: DeviconDef) {
  return `DduDevIcon${def.name}`;
}

async function setupHighlight(denops: Denops, def: DeviconDef) {
  const hl_group = getHighlightGroup(def);
  await denops.cmd(`hi default ${hl_group} guifg=${def.color}`);
}

export type IconData = {
  icon?: string;
  hl_group?: string;
};

export function getIconData(
  filename: string,
  isFolder?: boolean,
): IconData {
  const def = getDeviconDef(filename, isFolder);
  return {
    icon: def?.icon,
    hl_group: def && getHighlightGroup(def),
  };
}

export function getCustomIconData(
  filename: string,
  specificFileIcon: Record<string, IconData>,
  extentionIcon: Record<string, IconData>,
  isFolder?: boolean,
): IconData | undefined {
  if (isFolder) {
    return undefined;
  }
  const def = getDeviconDef(filename, isFolder);
  let customIcon = specificFileIcon[filename];
  if (customIcon) {
    return {
      icon: customIcon.icon ?? (def?.icon ?? ""),
      hl_group: customIcon.hl_group ?? (def && getHighlightGroup(def)),
    };
  }
  const ext = extname(filename).slice(1);
  customIcon = extentionIcon[ext];
  if (customIcon) {
    return {
      icon: customIcon.icon ?? (def?.icon ?? ""),
      hl_group: customIcon.hl_group ?? (def && getHighlightGroup(def)),
    };
  }
}

export function main(denops: Denops) {
  batch(denops, async (denops) => {
    for (
      const def of [
        ...Object.values(IconFilename),
        ...Object.values(IconFileExtension),
        IconFolder,
      ]
    ) {
      await setupHighlight(denops, def);
    }
  });
}
