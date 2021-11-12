import React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import TimerIcon from "@mui/icons-material/Timer";
import AssignmentIcon from "@mui/icons-material/Assignment";
import BarChartIcon from "@mui/icons-material/BarChart";
import PersonIcon from "@mui/icons-material/Person";
import { Link, useLocation } from "react-router-dom";
import { styled } from "@mui/system";
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

const StyledNavigation = styled(BottomNavigation)(({theme}) => ({
    position: "fixed",
    left: 0,
    right: 0,
    bottom: 0,
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(1),
    backgroundColor: theme.palette.background.paper,

}))

const navigationConfig = [
    {
        label: "Pomodoro", 
        value: "home",
        icon: <TimerIcon />
    }, 
    {
        label: "Tasks", 
        value: "tasks",
        icon: <AssignmentIcon />
    }, 
    {
        label: "Stats", 
        value: "stats",
        icon: <BarChartIcon />
    }, 
    {
        label: "Profile", 
        value: "profile",
        icon: <PersonIcon />
    }
]

function MobileNavigation() {
    const location = useLocation()
    const currentTab = location.pathname.substring(1)
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up('sm'));
    if (matches) return null;
    return (
        <StyledNavigation value={currentTab}>
            {navigationConfig.map(navigation => (
                <BottomNavigationAction
                    component={Link}
                    to={`/${navigation.value}`}
                    disableRipple
                    disableTouchRipple
                    label={navigation.label}
                    value={navigation.value}
                    icon={navigation.icon}
                />
            ))}
        </StyledNavigation>
    );
}

export default MobileNavigation;
