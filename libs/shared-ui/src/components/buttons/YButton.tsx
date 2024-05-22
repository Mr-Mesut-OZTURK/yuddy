import React from 'react';
import { Button as MuiButton, ButtonProps as MuiButtonProps, SxProps } from '@mui/material';


interface ButtonProps extends MuiButtonProps {
    children?: React.ReactNode;
    onClick?: () => void;
    sx?: SxProps;
}

export const YButton: React.FC<ButtonProps> = ({ children, onClick, sx, ...rest }) => {
    return (
        <MuiButton
            variant="contained"
            color={rest?.color ?? "primary"}
            onClick={onClick}
            sx={{
                ...sx
            }}
        >
            {children}
        </MuiButton>
    );
};