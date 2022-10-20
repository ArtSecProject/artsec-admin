import React, { createContext, useContext, useState } from 'react';



const StateContext = createContext();

const initialState = {
  chat: false,
  userProfile: false,
  notification: false,
  add_money: false,
  confirm_withdrawal: false,
  bid_success: false,

};

export const ContextProvider = ({ children }) => {
  const [activeMenu, setActiveMenu] = useState(true);

  // navbar items function that listen to the icon to open whenever is clicked
  const [isClicked, setIsClicked] = useState(initialState);
  const handleClick = (clicked) => {
    setIsClicked({ ...initialState, [clicked]: true });
  };

  // all devices responsiveness
  // it is undefined because we do not know the actual device screen
  const [screenSize, setScreenSize] = useState(undefined);

  // tab navigation
  const [view, setView] = useState("customer");

  // const [isToggled, setIsToggled] = useState(false);


  // changing the theme color
  const [currentColor, setCurrentColor] = useState('#F68A29');
  const [currentMode, setCurrentMode] = useState('Light');
  const [themeSettings, setThemeSettings] = useState(false);

  const setMode = (e) => {
    setCurrentMode(e.target.value);

    localStorage.setItem('themeMode', e.target.value);

    setThemeSettings(false);
  };

  const setColor = (color) => {
    setCurrentColor(color);

    localStorage.setItem('colorMode', color);
  };

  // state for table dropdown menu 
  // const theme = useTheme();

  const [anchorEl, setAnchorEl] = useState(null);

  const handleItemClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };


  return (
    <StateContext.Provider
      value={{
        activeMenu,
        setActiveMenu,
        isClicked,
        setIsClicked,
        handleClick,
        screenSize,
        setScreenSize,
        currentColor,
        setCurrentColor,
        currentMode,
        setCurrentMode,
        themeSettings,
        setThemeSettings,
        setMode,
        setColor,
        view,
        setView,
        anchorEl,
        handleItemClick,
        handleClose,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
