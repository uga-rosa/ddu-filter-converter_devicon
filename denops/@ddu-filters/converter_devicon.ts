import {
  BaseFilter,
  DduItem,
} from "https://deno.land/x/ddu_vim@v3.2.6/types.ts";
import { basename } from "https://deno.land/std@0.192.0/path/mod.ts";
import { isLike } from "https://deno.land/x/unknownutil@v3.2.0/is.ts";
import { getIconData } from "../ddu-devicon/main.ts";

const HIGHLIGHT_NAME = "ddu_devicon" as const satisfies string;

type Params = {
  padding: number;
  defaultIcon: string;
  defaultIconHlgroup: string;
};

const ENCODER = new TextEncoder();

function byteLen(str: string) {
  return ENCODER.encode(str).length;
}

function getPath(item: DduItem): string | undefined {
  if (isLike({ action: { path: "" } }, item)) {
    return basename(item.action.path);
  }
}

export class Filter extends BaseFilter<Params> {
  filter(args: {
    filterParams: Params;
    items: DduItem[];
  }): Promise<DduItem[]> {
    const { filterParams, items } = args;
    const padding = " ".repeat(filterParams.padding);
    return Promise.resolve(items.map((item) => {
      const path = getPath(item);
      if (path === undefined) {
        return item;
      }
      const { word, display = word, highlights = [] } = item;

      // Already added a devicon
      if (
        highlights.some((item) => item.name === HIGHLIGHT_NAME) ||
        (display.startsWith(padding + filterParams.defaultIcon))
      ) {
        return item;
      }

      const isDirectory = isLike({ action: { isDirectory: true } }, item)
        ? item.action.isDirectory
        : undefined;
      const iconData = getIconData(path, isDirectory);
      const icon = iconData.icon ?? filterParams.defaultIcon;
      const hl_group = iconData.hl_group ?? filterParams.defaultIconHlgroup;

      item.display = `${padding}${icon} ${display}`;

      const col = filterParams.padding + 1;
      const width = byteLen(icon);
      const offset = col + width;

      highlights.forEach((hl) => hl.col += offset);

      if (hl_group) {
        item.highlights = [
          ...highlights,
          {
            name: HIGHLIGHT_NAME,
            hl_group,
            col,
            width,
          },
        ];
      }

      return item;
    }));
  }

  params(): Params {
    return {
      padding: 0,
      defaultIcon: "",
      defaultIconHlgroup: "",
    };
  }
}
