import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { muiTheme } from '../theme';
// import { muiTheme } from './theme';

interface YuddyProviderProps {
    children: React.ReactNode;
}

export const YuddyProvider: React.FC<YuddyProviderProps> = ({ children }) => {
    return (
        <ThemeProvider theme={muiTheme}>
            {children}
        </ThemeProvider>
    );
};
export default YuddyProvider