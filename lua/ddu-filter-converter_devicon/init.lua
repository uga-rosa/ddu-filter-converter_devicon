local M = {}

function M.get_icon_hl(filename)
  local icon, hl = require("nvim-web-devicons").get_icon(filename)
  return { icon, hl }
end

return M
