import {
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList
} from '@chakra-ui/react';
import { HamburgerIcon, ArrowLeftIcon } from '@chakra-ui/icons';
import React from 'react';
import { logout } from '../services/auth';

interface DashboardLayoutProps {
  children: React.ReactNode | React.ReactNode[];
}

const DashboardLayout = (props: DashboardLayoutProps) => {
  return (
    <div>
      <Menu>
        <MenuButton
          as={IconButton}
          aria-label="Options"
          icon={<HamburgerIcon />}
          variant="outline"
        />
        <MenuList>
          <MenuItem icon={<ArrowLeftIcon />} onClick={() => logout()}>
            Logout
          </MenuItem>
        </MenuList>
      </Menu>
      {props.children}
    </div>
  );
};

export default DashboardLayout;
