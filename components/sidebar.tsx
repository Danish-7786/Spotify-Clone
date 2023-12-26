"use client"

import { usePathname } from "next/navigation";
import { useMemo } from "react";

type SidebarProps =  {
    children :React.ReactNode;
}
const Sidebar = ({children}:SidebarProps) => 
 {
    const pathname = usePathname(); // used to get the current path
    const routes = useMemo(()=> [
        {
            icon
        label: 'Home',
        active: pathname !== '/search',

    }],[pathname])

    return (
        <div>
        {children}
        </div>
    );
}

export default Sidebar;