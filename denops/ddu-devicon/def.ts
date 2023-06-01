/*
Reference source

https://github.com/nvim-tree/nvim-web-devicons

MIT License

Copyright (c) 2023 nvim-tree

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/

export type DeviconDef = {
  icon: string;
  color: string;
  name: string;
};

export const IconFilename: Record<string, DeviconDef> = {
  ".babelrc": {
    icon: "",
    color: "#cbcb41",
    name: "Babelrc",
  },
  ".bash_profile": {
    icon: "",
    color: "#89e051",
    name: "BashProfile",
  },
  ".bashrc": {
    icon: "",
    color: "#89e051",
    name: "Bashrc",
  },
  ".ds_store": {
    icon: "",
    color: "#41535b",
    name: "DsStore",
  },
  ".eslintrc": {
    icon: "",
    color: "#4b32c3",
    name: "Eslintrc",
  },
  ".gitattributes": {
    icon: "",
    color: "#41535b",
    name: "GitAttributes",
  },
  ".gitconfig": {
    icon: "",
    color: "#41535b",
    name: "GitConfig",
  },
  ".gitignore": {
    icon: "",
    color: "#41535b",
    name: "GitIgnore",
  },
  ".gitlab-ci.yml": {
    icon: "",
    color: "#e24329",
    name: "GitlabCI",
  },
  ".gitmodules": {
    icon: "",
    color: "#41535b",
    name: "GitModules",
  },
  ".gvimrc": {
    icon: "",
    color: "#019833",
    name: "Gvimrc",
  },
  ".npmignore": {
    icon: "",
    color: "#E8274B",
    name: "NPMIgnore",
  },
  ".npmrc": {
    icon: "",
    color: "#E8274B",
    name: "NPMrc",
  },
  ".settings.json": {
    icon: "",
    color: "#854CC7",
    name: "SettingsJson",
  },
  ".vimrc": {
    icon: "",
    color: "#019833",
    name: "Vimrc",
  },
  ".zprofile": {
    icon: "",
    color: "#89e051",
    name: "Zshprofile",
  },
  ".zshenv": {
    icon: "",
    color: "#89e051",
    name: "Zshenv",
  },
  ".zshrc": {
    icon: "",
    color: "#89e051",
    name: "Zshrc",
  },
  "brewfile": {
    icon: "",
    color: "#701516",
    name: "Brewfile",
  },
  "cmakelists.txt": {
    icon: "",
    color: "#6d8086",
    name: "CMakeLists",
  },
  "commit_editmsg": {
    icon: "",
    color: "#41535b",
    name: "GitCommit",
  },
  "containerfile": {
    icon: "󰡨",
    color: "#458ee6",
    name: "Dockerfile",
  },
  "copying": {
    icon: "",
    color: "#cbcb41",
    name: "License",
  },
  "copying.lesser": {
    icon: "",
    color: "#cbcb41",
    name: "License",
  },
  "docker-compose.yml": {
    icon: "󰡨",
    color: "#458ee6",
    name: "Dockerfile",
  },
  "docker-compose.yaml": {
    icon: "󰡨",
    color: "#458ee6",
    name: "Dockerfile",
  },
  ".dockerignore": {
    icon: "󰡨",
    color: "#458ee6",
    name: "Dockerfile",
  },
  "gemfile$": {
    icon: "",
    color: "#701516",
    name: "Gemfile",
  },
  "license": {
    icon: "",
    color: "#d0bf41",
    name: "License",
  },
  "r": {
    icon: "󰟔",
    color: "#358a5b",
    name: "R",
  },
  "rmd": {
    icon: "",
    color: "#519aba",
    name: "Rmd",
  },
  "vagrantfile$": {
    icon: "",
    color: "#1563FF",
    name: "Vagrantfile",
  },
  "_gvimrc": {
    icon: "",
    color: "#019833",
    name: "Gvimrc",
  },
  "_vimrc": {
    icon: "",
    color: "#019833",
    name: "Vimrc",
  },
  "package.json": {
    icon: "",
    color: "#e8274b",
    name: "PackageJson",
  },
  "package-lock.json": {
    icon: "",
    color: "#7a0d21",
    name: "PackageLockJson",
  },
  "node_modules": {
    icon: "",
    color: "#E8274B",
    name: "NodeModules",
  },
  "favicon.ico": {
    icon: "",
    color: "#cbcb41",
    name: "Favicon",
  },
  "gnumakefile": {
    icon: "",
    color: "#6d8086",
    name: "Makefile",
  },
  "makefile": {
    icon: "",
    color: "#6d8086",
    name: "Makefile",
  },
  "mix.lock": {
    icon: "",
    color: "#a074c4",
    name: "MixLock",
  },
  ".env": {
    icon: "",
    color: "#faf743",
    name: "Env",
  },
  "gruntfile": {
    icon: "",
    color: "#e37933",
    name: "Gruntfile",
  },
  "gulpfile": {
    icon: "",
    color: "#cc3e44",
    name: "Gulpfile",
  },
  "webpack": {
    icon: "󰜫",
    color: "#519aba",
    name: "Webpack",
  },
  "rakefile": {
    icon: "",
    color: "#701516",
    name: "Rakefile",
  },
  "procfile": {
    icon: "",
    color: "#a074c4",
    name: "Procfile",
  },
  "dockerfile": {
    icon: "󰡨",
    color: "#458ee6",
    name: "Dockerfile",
  },
  "build": {
    icon: "",
    color: "#89e051",
    name: "BazelBuild",
  },
  "workspace": {
    icon: "",
    color: "#89e051",
    name: "BazelWorkspace",
  },
} as const satisfies Record<string, DeviconDef>;

export const IconFileExtension: Record<string, DeviconDef> = {
  "ai": {
    icon: "",
    color: "#cbcb41",
    name: "Ai",
  },
  "awk": {
    icon: "",
    color: "#4d5a5e",
    name: "Awk",
  },
  "bash": {
    icon: "",
    color: "#89e051",
    name: "Bash",
  },
  "bat": {
    icon: "",
    color: "#C1F12E",
    name: "Bat",
  },
  "bazel": {
    icon: "",
    color: "#89e051",
    name: "Bazel",
  },
  "bzl": {
    icon: "",
    color: "#89e051",
    name: "Bzl",
  },
  "bmp": {
    icon: "",
    color: "#a074c4",
    name: "Bmp",
  },
  "c": {
    icon: "",
    color: "#599eff",
    name: "C",
  },
  "c++": {
    icon: "",
    color: "#f34b7d",
    name: "CPlusPlus",
  },
  "cbl": {
    icon: "⚙",
    color: "#005ca5",
    name: "Cobol",
  },
  "cc": {
    icon: "",
    color: "#f34b7d",
    name: "CPlusPlus",
  },
  "cfg": {
    icon: "",
    color: "#ECECEC",
    name: "Configuration",
  },
  "cjs": {
    icon: "",
    color: "#cbcb41",
    name: "Cjs",
  },
  "clj": {
    icon: "",
    color: "#8dc149",
    name: "Clojure",
  },
  "cljc": {
    icon: "",
    color: "#8dc149",
    name: "ClojureC",
  },
  "cljs": {
    icon: "",
    color: "#519aba",
    name: "ClojureJS",
  },
  "cljd": {
    icon: "",
    color: "#519aba",
    name: "ClojureDart",
  },
  "cmake": {
    icon: "",
    color: "#6d8086",
    name: "CMake",
  },
  "cob": {
    icon: "⚙",
    color: "#005ca5",
    name: "Cobol",
  },
  "cobol": {
    icon: "⚙",
    color: "#005ca5",
    name: "Cobol",
  },
  "coffee": {
    icon: "",
    color: "#cbcb41",
    name: "Coffee",
  },
  "conf": {
    icon: "",
    color: "#6d8086",
    name: "Conf",
  },
  "config.ru": {
    icon: "",
    color: "#701516",
    name: "ConfigRu",
  },
  "cp": {
    icon: "",
    color: "#519aba",
    name: "Cp",
  },
  "cpp": {
    icon: "",
    color: "#519aba",
    name: "Cpp",
  },
  "cpy": {
    icon: "⚙",
    color: "#005ca5",
    name: "Cobol",
  },
  "cr": {
    icon: "",
    color: "#c8c8c8",
    name: "Crystal",
  },
  "cs": {
    icon: "󰌛",
    color: "#596706",
    name: "Cs",
  },
  "csh": {
    icon: "",
    color: "#4d5a5e",
    name: "Csh",
  },
  "cson": {
    icon: "",
    color: "#cbcb41",
    name: "Cson",
  },
  "css": {
    icon: "",
    color: "#42a5f5",
    name: "Css",
  },
  "csv": {
    icon: "󰈙",
    color: "#89e051",
    name: "Csv",
  },
  "cxx": {
    icon: "",
    color: "#519aba",
    name: "Cxx",
  },
  "d": {
    icon: "",
    color: "#427819",
    name: "D",
  },
  "dart": {
    icon: "",
    color: "#03589C",
    name: "Dart",
  },
  "db": {
    icon: "",
    color: "#dad8d8",
    name: "Db",
  },
  "desktop": {
    icon: "",
    color: "#563d7c",
    name: "DesktopEntry",
  },
  "diff": {
    icon: "",
    color: "#41535b",
    name: "Diff",
  },
  "doc": {
    icon: "󰈬",
    color: "#185abd",
    name: "Doc",
  },
  "docx": {
    icon: "󰈬",
    color: "#185abd",
    name: "Docx",
  },
  "drl": {
    icon: "",
    color: "#ffafaf",
    name: "Drools",
  },
  "dropbox": {
    icon: "",
    color: "#0061FE",
    name: "Dropbox",
  },
  "dump": {
    icon: "",
    color: "#dad8d8",
    name: "Dump",
  },
  "edn": {
    icon: "",
    color: "#519aba",
    name: "Edn",
  },
  "eex": {
    icon: "",
    color: "#a074c4",
    name: "Eex",
  },
  "ejs": {
    icon: "",
    color: "#cbcb41",
    name: "Ejs",
  },
  "elm": {
    icon: "",
    color: "#519aba",
    name: "Elm",
  },
  "epp": {
    icon: "",
    color: "#FFA61A",
    name: "Epp",
  },
  "erb": {
    icon: "",
    color: "#701516",
    name: "Erb",
  },
  "erl": {
    icon: "",
    color: "#B83998",
    name: "Erl",
  },
  "ex": {
    icon: "",
    color: "#a074c4",
    name: "Ex",
  },
  "exs": {
    icon: "",
    color: "#a074c4",
    name: "Exs",
  },
  "f#": {
    icon: "",
    color: "#519aba",
    name: "Fsharp",
  },
  "f90": {
    icon: "󱈚",
    color: "#734f96",
    name: "Fortran",
  },
  "fnl": {
    color: "#fff3d7",
    icon: "🌜",
    name: "Fennel",
  },
  "fish": {
    icon: "",
    color: "#4d5a5e",
    name: "Fish",
  },
  "fs": {
    icon: "",
    color: "#519aba",
    name: "Fs",
  },
  "fsi": {
    icon: "",
    color: "#519aba",
    name: "Fsi",
  },
  "fsscript": {
    icon: "",
    color: "#519aba",
    name: "Fsscript",
  },
  "fsx": {
    icon: "",
    color: "#519aba",
    name: "Fsx",
  },
  "gd": {
    icon: "",
    color: "#6d8086",
    name: "GDScript",
  },
  "gemspec": {
    icon: "",
    color: "#701516",
    name: "Gemspec",
  },
  "gif": {
    icon: "",
    color: "#a074c4",
    name: "Gif",
  },
  "git": {
    icon: "",
    color: "#F14C28",
    name: "GitLogo",
  },
  "glb": {
    icon: "",
    color: "#FFB13B",
    name: "BinaryGLTF",
  },
  "go": {
    icon: "",
    color: "#519aba",
    name: "Go",
  },
  "godot": {
    icon: "",
    color: "#6d8086",
    name: "GodotProject",
  },
  "graphql": {
    icon: "",
    color: "#e535ab",
    name: "GraphQL",
  },
  "gql": {
    icon: "",
    color: "#e535ab",
    name: "GraphQL",
  },
  "h": {
    icon: "",
    color: "#a074c4",
    name: "H",
  },
  "haml": {
    icon: "",
    color: "#eaeae1",
    name: "Haml",
  },
  "hbs": {
    icon: "",
    color: "#f0772b",
    name: "Hbs",
  },
  "heex": {
    icon: "",
    color: "#a074c4",
    name: "Heex",
  },
  "hh": {
    icon: "",
    color: "#a074c4",
    name: "Hh",
  },
  "hpp": {
    icon: "",
    color: "#a074c4",
    name: "Hpp",
  },
  "hrl": {
    icon: "",
    color: "#B83998",
    name: "Hrl",
  },
  "hs": {
    icon: "",
    color: "#a074c4",
    name: "Hs",
  },
  "htm": {
    icon: "",
    color: "#e34c26",
    name: "Htm",
  },
  "html": {
    icon: "",
    color: "#e44d26",
    name: "Html",
  },
  "hxx": {
    icon: "",
    color: "#a074c4",
    name: "Hxx",
  },
  "ico": {
    icon: "",
    color: "#cbcb41",
    name: "Ico",
  },
  "import": {
    icon: "",
    color: "#ECECEC",
    name: "ImportConfiguration",
  },
  "ini": {
    icon: "",
    color: "#6d8086",
    name: "Ini",
  },
  "java": {
    icon: "",
    color: "#cc3e44",
    name: "Java",
  },
  "jl": {
    icon: "",
    color: "#a270ba",
    name: "Jl",
  },
  "jpeg": {
    icon: "",
    color: "#a074c4",
    name: "Jpeg",
  },
  "jpg": {
    icon: "",
    color: "#a074c4",
    name: "Jpg",
  },
  "js": {
    icon: "",
    color: "#cbcb41",
    name: "Js",
  },
  "test.js": {
    icon: "",
    color: "#cbcb41",
    name: "TestJs",
  },
  "spec.js": {
    icon: "",
    color: "#cbcb41",
    name: "SpecJs",
  },
  "json": {
    icon: "",
    color: "#cbcb41",
    name: "Json",
  },
  "json5": {
    icon: "",
    color: "#cbcb41",
    name: "Json5",
  },
  "jsx": {
    icon: "",
    color: "#20c2e3",
    name: "Jsx",
  },
  "test.jsx": {
    icon: "",
    color: "#20c2e3",
    name: "JavaScriptReactTest",
  },
  "spec.jsx": {
    icon: "",
    color: "#20c2e3",
    name: "JavaScriptReactSpec",
  },
  "ksh": {
    icon: "",
    color: "#4d5a5e",
    name: "Ksh",
  },
  "kt": {
    icon: "",
    color: "#7F52FF",
    name: "Kotlin",
  },
  "kts": {
    icon: "",
    color: "#7F52FF",
    name: "KotlinScript",
  },
  "leex": {
    icon: "",
    color: "#a074c4",
    name: "Leex",
  },
  "less": {
    icon: "",
    color: "#563d7c",
    name: "Less",
  },
  "lhs": {
    icon: "",
    color: "#a074c4",
    name: "Lhs",
  },
  "license": {
    icon: "",
    color: "#cbcb41",
    name: "License",
  },
  "lua": {
    icon: "",
    color: "#51a0cf",
    name: "Lua",
  },
  "luau": {
    icon: "",
    color: "#51a0cf",
    name: "Luau",
  },
  "gnumakefile": {
    icon: "",
    color: "#6d8086",
    name: "Makefile",
  },
  "makefile": {
    icon: "",
    color: "#6d8086",
    name: "Makefile",
  },
  "mk": {
    icon: "",
    color: "#6d8086",
    name: "Makefile",
  },
  "markdown": {
    icon: "",
    color: "#519aba",
    name: "Markdown",
  },
  "material": {
    icon: "󰔉",
    color: "#B83998",
    name: "Material",
  },
  "md": {
    icon: "",
    color: "#ffffff",
    name: "Md",
  },
  "mdx": {
    icon: "",
    color: "#519aba",
    name: "Mdx",
  },
  "mint": {
    icon: "󰌪",
    color: "#87c095",
    name: "Mint",
  },
  "mjs": {
    icon: "",
    color: "#f1e05a",
    name: "Mjs",
  },
  "ml": {
    icon: "λ",
    color: "#e37933",
    name: "Ml",
  },
  "mli": {
    icon: "λ",
    color: "#e37933",
    name: "Mli",
  },
  "mo": {
    icon: "∞",
    color: "#9772FB",
    name: "Motoko",
  },
  "mustache": {
    icon: "",
    color: "#e37933",
    name: "Mustache",
  },
  "nim": {
    icon: "",
    color: "#f3d400",
    name: "Nim",
  },
  "nix": {
    icon: "",
    color: "#7ebae4",
    name: "Nix",
  },
  "opus": {
    icon: "󰈣",
    color: "#F88A02",
    name: "OPUS",
  },
  "org": {
    icon: "",
    color: "#77AA99",
    name: "OrgMode",
  },
  "otf": {
    icon: "",
    color: "#ECECEC",
    name: "OpenTypeFont",
  },
  "pck": {
    icon: "",
    color: "#6d8086",
    name: "PackedResource",
  },
  "pdf": {
    icon: "",
    color: "#b30b00",
    name: "Pdf",
  },
  "php": {
    icon: "",
    color: "#a074c4",
    name: "Php",
  },
  "pl": {
    icon: "",
    color: "#519aba",
    name: "Pl",
  },
  "pm": {
    icon: "",
    color: "#519aba",
    name: "Pm",
  },
  "png": {
    icon: "",
    color: "#a074c4",
    name: "Png",
  },
  "pp": {
    icon: "",
    color: "#FFA61A",
    name: "Pp",
  },
  "ppt": {
    icon: "󰈧",
    color: "#cb4a32",
    name: "Ppt",
  },
  "pro": {
    icon: "",
    color: "#e4b854",
    name: "Prolog",
  },
  "ps1": {
    icon: "󰨊",
    color: "#4273ca",
    name: "PsScriptfile",
  },
  "psd1": {
    icon: "󰨊",
    color: "#6975c4",
    name: "PsManifestfile",
  },
  "psm1": {
    icon: "󰨊",
    color: "#6975c4",
    name: "PsScriptModulefile",
  },
  "psb": {
    icon: "",
    color: "#519aba",
    name: "Psb",
  },
  "psd": {
    icon: "",
    color: "#519aba",
    name: "Psd",
  },
  "py": {
    icon: "",
    color: "#ffbc03",
    name: "Py",
  },
  "pyc": {
    icon: "",
    color: "#ffe291",
    name: "Pyc",
  },
  "pyd": {
    icon: "",
    color: "#ffe291",
    name: "Pyd",
  },
  "pyo": {
    icon: "",
    color: "#ffe291",
    name: "Pyo",
  },
  "query": {
    icon: "",
    color: "#90a850",
    name: "Query",
  },
  "r": {
    icon: "󰟔",
    color: "#358a5b",
    name: "R",
  },
  "rake": {
    icon: "",
    color: "#701516",
    name: "Rake",
  },
  "rb": {
    icon: "",
    color: "#701516",
    name: "Rb",
  },
  "res": {
    icon: "",
    color: "#cc3e44",
    name: "ReScript",
  },
  "resi": {
    icon: "",
    color: "#f55385",
    name: "ReScriptInterface",
  },
  "rlib": {
    icon: "",
    color: "#dea584",
    name: "Rlib",
  },
  "rmd": {
    icon: "",
    color: "#519aba",
    name: "Rmd",
  },
  "rproj": {
    icon: "󰗆",
    color: "#358a5b",
    name: "Rproj",
  },
  "rs": {
    icon: "",
    color: "#dea584",
    name: "Rs",
  },
  "rss": {
    icon: "",
    color: "#FB9D3B",
    name: "Rss",
  },
  "sass": {
    icon: "",
    color: "#f55385",
    name: "Sass",
  },
  "sbt": {
    icon: "",
    color: "#cc3e44",
    name: "sbt",
  },
  "scala": {
    icon: "",
    color: "#cc3e44",
    name: "Scala",
  },
  "scm": {
    icon: "󰘧",
    color: "#000000",
    name: "Scheme",
  },
  "scss": {
    icon: "",
    color: "#f55385",
    name: "Scss",
  },
  "sh": {
    icon: "",
    color: "#4d5a5e",
    name: "Sh",
  },
  "sig": {
    icon: "λ",
    color: "#e37933",
    name: "Sig",
  },
  "slim": {
    icon: "",
    color: "#e34c26",
    name: "Slim",
  },
  "sln": {
    icon: "",
    color: "#854CC7",
    name: "Sln",
  },
  "sml": {
    icon: "λ",
    color: "#e37933",
    name: "Sml",
  },
  "sql": {
    icon: "",
    color: "#dad8d8",
    name: "Sql",
  },
  "sqlite": {
    icon: "",
    color: "#dad8d8",
    name: "Sql",
  },
  "sqlite3": {
    icon: "",
    color: "#dad8d8",
    name: "Sql",
  },
  "styl": {
    icon: "",
    color: "#8dc149",
    name: "Styl",
  },
  "sublime": {
    icon: "",
    color: "#e37933",
    name: "Suo",
  },
  "suo": {
    icon: "",
    color: "#854CC7",
    name: "Suo",
  },
  "sv": {
    icon: "󰍛",
    color: "#019833",
    name: "SystemVerilog",
  },
  "svelte": {
    icon: "",
    color: "#ff3e00",
    name: "Svelte",
  },
  "svh": {
    icon: "󰍛",
    color: "#019833",
    name: "SystemVerilog",
  },
  "svg": {
    icon: "󰜡",
    color: "#FFB13B",
    name: "Svg",
  },
  "swift": {
    icon: "",
    color: "#e37933",
    name: "Swift",
  },
  "t": {
    icon: "",
    color: "#519aba",
    name: "Tor",
  },
  "tbc": {
    icon: "󰛓",
    color: "#1e5cb3",
    name: "Tcl",
  },
  "tcl": {
    icon: "󰛓",
    color: "#1e5cb3",
    name: "Tcl",
  },
  "terminal": {
    icon: "",
    color: "#31B53E",
    name: "Terminal",
  },
  "tex": {
    icon: "󰙩",
    color: "#3D6117",
    name: "Tex",
  },
  "tf": {
    icon: "",
    color: "#5F43E9",
    name: "Terraform",
  },
  "tfvars": {
    icon: "",
    color: "#5F43E9",
    name: "TFVars",
  },
  "toml": {
    icon: "",
    color: "#6d8086",
    name: "Toml",
  },
  "tres": {
    icon: "",
    color: "#cbcb41",
    name: "TextResource",
  },
  "ts": {
    icon: "",
    color: "#519aba",
    name: "Ts",
  },
  "test.ts": {
    icon: "",
    color: "#519aba",
    name: "TestTs",
  },
  "spec.ts": {
    icon: "",
    color: "#519aba",
    name: "SpecTs",
  },
  "tscn": {
    icon: "󰎁",
    color: "#a074c4",
    name: "TextScene",
  },
  "tsx": {
    icon: "",
    color: "#1354bf",
    name: "Tsx",
  },
  "test.tsx": {
    icon: "",
    color: "#1354bf",
    name: "TypeScriptReactTest",
  },
  "spec.tsx": {
    icon: "",
    color: "#1354bf",
    name: "TypeScriptReactSpec",
  },
  "twig": {
    icon: "",
    color: "#8dc149",
    name: "Twig",
  },
  "txt": {
    icon: "󰈙",
    color: "#89e051",
    name: "Txt",
  },
  "v": {
    icon: "󰍛",
    color: "#019833",
    name: "Verilog",
  },
  "vala": {
    icon: "",
    color: "#7239b3",
    name: "Vala",
  },
  "vh": {
    icon: "󰍛",
    color: "#019833",
    name: "Verilog",
  },
  "vhd": {
    icon: "󰍛",
    color: "#019833",
    name: "VHDL",
  },
  "vhdl": {
    icon: "󰍛",
    color: "#019833",
    name: "VHDL",
  },
  "vim": {
    icon: "",
    color: "#019833",
    name: "Vim",
  },
  "vue": {
    icon: "",
    color: "#8dc149",
    name: "Vue",
  },
  "webmanifest": {
    icon: "",
    color: "#f1e05a",
    name: "Webmanifest",
  },
  "webp": {
    icon: "",
    color: "#a074c4",
    name: "Webp",
  },
  "webpack": {
    icon: "󰜫",
    color: "#519aba",
    name: "Webpack",
  },
  "xcplayground": {
    icon: "",
    color: "#e37933",
    name: "XcPlayground",
  },
  "xls": {
    icon: "󰈛",
    color: "#207245",
    name: "Xls",
  },
  "xlsx": {
    icon: "󰈛",
    color: "#207245",
    name: "Xlsx",
  },
  "xml": {
    icon: "󰗀",
    color: "#e37933",
    name: "Xml",
  },
  "xul": {
    icon: "",
    color: "#e37933",
    name: "Xul",
  },
  "yaml": {
    icon: "",
    color: "#6d8086",
    name: "Yaml",
  },
  "yml": {
    icon: "",
    color: "#6d8086",
    name: "Yml",
  },
  "zig": {
    icon: "",
    color: "#f69a1b",
    name: "Zig",
  },
  "zsh": {
    icon: "",
    color: "#89e051",
    name: "Zsh",
  },
  "sol": {
    icon: "󰞻",
    color: "#519aba",
    name: "Solidity",
  },
  "prisma": {
    icon: "󰔶",
    color: "#ffffff",
    name: "Prisma",
  },
  "lock": {
    icon: "",
    color: "#bbbbbb",
    name: "Lock",
  },
  "log": {
    icon: "󰌱",
    color: "#ffffff",
    name: "Log",
  },
  "wasm": {
    icon: "",
    color: "#5c4cdb",
    name: "Wasm",
  },
  "liquid": {
    icon: "",
    color: "#95BF47",
    name: "Liquid",
  },
} as const satisfies Record<string, DeviconDef>;

export const IconFolder = {
  icon: "",
  color: "#7ebae4",
  name: "Folder",
} as const satisfies DeviconDef;

export function getDeviconDef(
  filename: string,
  isFolder?: boolean,
): DeviconDef | undefined {
  if (isFolder) {
    return IconFolder;
  }
  filename = filename.toLowerCase();
  if (IconFilename[filename]) {
    return IconFilename[filename];
  }
  const ext = filename.replace(/(.*)\./, "");
  return IconFileExtension[ext];
}
