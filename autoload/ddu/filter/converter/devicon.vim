if has('nvim') && luaeval('pcall(require, "nvim-web-devicons")')
  function! ddu#filter#converter#devicon#get_icon_hl(filename) abort
    return luaeval('require("ddu-filter-converter_devicon").get_icon_hl(_A[1])', [a:filename])
  endfunction
else
endif
