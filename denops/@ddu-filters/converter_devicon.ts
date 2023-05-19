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
};

type IconData = {
  icon: string;
  hl_group: string;
};

const ENCODER = new TextEncoder();

function byteLen(str: string) {
  return ENCODER.encode(str).length;
}

export class Filter extends BaseFilter<Params> {
  filter(args: {
    denops: Denops;
    filterParams: Params;
    items: DduItem[];
  }): Promise<DduItem[]> {
    const { denops, filterParams, items } = args;
    return Promise.all(items.map(async (item) => {
      const { word, display = word, highlights = [] } = item;

      // Icon & highlight is already added
      if (highlights.some((item) => item.name === HIGHLIGHT_NAME)) {
        return item;
      }

      const { icon, hl_group } = await this.getIconHl(denops, word);
      if (icon && hl_group) {
        const padding = " ".repeat(filterParams.padding);
        item.display = `${padding}${icon} ${display}`;

        item.highlights = [...highlights, {
          name: HIGHLIGHT_NAME,
          hl_group,
          col: filterParams.padding + 1,
          width: byteLen(icon),
        }];
      }

      return item;
    }));
  }

  async getIconHl(
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

  params(): Params {
    return {
      padding: 0,
    };
  }
}
