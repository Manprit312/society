import React, { useState } from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

function HoverMenu({ children, menuItems }) {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleOpenMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  return (
    <div onMouseEnter={handleOpenMenu} onMouseLeave={handleCloseMenu}>

      <Menu
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleCloseMenu}
        onMouseLeave={handleCloseMenu}
      >
        {menuItems.map((item, index) => (
          <MenuItem key={index} onClick={handleCloseMenu}>
            {item}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}

export default HoverMenu;
