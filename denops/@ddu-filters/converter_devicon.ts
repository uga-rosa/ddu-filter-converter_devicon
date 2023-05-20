import {
  BaseFilter,
  DduItem,
} from "https://deno.land/x/ddu_vim@v2.8.3/types.ts";
import { Denops } from "https://deno.land/x/ddu_vim@v2.8.3/deps.ts";
import {
  assertArray,
  isString,
} from "https://deno.land/x/unknownutil@v2.1.1/mod.ts";

const HIGHLIGHT_NAME = "ddu_devicon";

type Params = {
  padding: number;
  defaultIcon: string;
};

type IconData = {
  icon: string | undefined;
  hl_group: string | undefined;
};

const ENCODER = new TextEncoder();

function byteLen(str: string) {
  return ENCODER.encode(str).length;
}

function getPath(item: DduItem): string | undefined {
  if (
    item.action != null &&
    typeof item.action === "object" &&
    item.action != null &&
    "path" in item.action &&
    typeof item.action.path === "string"
  ) {
    return item.action.path;
  }
}

async function getIconHl(
  denops: Denops,
  filename: string,
): Promise<IconData> {
  const retval = await denops.call(
    "ddu#filter#converter#devicon#get_icon_hl",
    filename,
  );
  assertArray(retval, isString);
  const [icon, hl_group] = retval;
  return { icon, hl_group };
}

export class Filter extends BaseFilter<Params> {
  filter(args: {
    denops: Denops;
    filterParams: Params;
    items: DduItem[];
  }): Promise<DduItem[]> {
    const { denops, filterParams, items } = args;
    const padding = " ".repeat(filterParams.padding);
    return Promise.all(items.map(async (item) => {
      const path = getPath(item);
      if (path === undefined) {
        return item;
      }
      const { word, display = word, highlights = [] } = item;

      // Icon & highlight is already added (nvim-web-devicons)
      if (highlights.some((item) => item.name === HIGHLIGHT_NAME)) {
        return item;
      }

      const { icon = filterParams.defaultIcon, hl_group } = await getIconHl(denops, path);

      // vim-devicon support only icon.
      if (!display.startsWith(padding + icon)) {
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
      }

      return item;
    }));
  }

  params(): Params {
    return {
      padding: 0,
      defaultIcon: "",
    };
  }
}
