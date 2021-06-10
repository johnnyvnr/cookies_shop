import React from 'react'
import {SidebarContainer, SidebarLink, SidebarMenu, SidebarRoute, SideBtnWrap, Icon, CloseIcon} from './SideBarElements'

function SideBar({isOpen, toogle}) {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toogle}>
            <Icon onClick={toogle}>
                <CloseIcon/>
            </Icon>
            <SidebarMenu>
                <SidebarLink to ="/">Cookies</SidebarLink>
                <SidebarLink to ="/">Cookies Premium</SidebarLink>
                <SidebarLink to ="/">Full Menu</SidebarLink>
            </SidebarMenu>
            <SideBtnWrap>
                <SidebarRoute to ="/">Order Now</SidebarRoute>
            </SideBtnWrap>
        </SidebarContainer>
    )
}

export default SideBar
