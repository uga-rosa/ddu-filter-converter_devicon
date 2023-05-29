import {
  BaseFilter,
  DduItem,
} from "https://deno.land/x/ddu_vim@v2.8.3/types.ts";
import { basename } from "https://deno.land/std@0.188.0/path/win32.ts";
import { getIconData } from "../ddu-devicon/main.ts";

const HIGHLIGHT_NAME = "ddu_devicon";

type Params = {
  padding: number;
  defaultIcon: string;
  defaultIconColor: string;
};

const ENCODER = new TextEncoder();

function byteLen(str: string) {
  return ENCODER.encode(str).length;
}

function getPath(item: DduItem): string | undefined {
  if (
    typeof item.action === "object" &&
    item.action != null &&
    "path" in item.action &&
    typeof item.action.path === "string"
  ) {
    const fullpath = item.action.path;
    return basename(fullpath);
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

      const {
        icon = filterParams.defaultIcon,
        hl_group = filterParams.defaultIconColor,
      } = getIconData(path);

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
      defaultIconColor: "White",
    };
  }
}
