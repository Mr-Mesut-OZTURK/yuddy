import React from 'react';
import { ButtonProps as MuiButtonProps, SxProps } from '@mui/material';
interface ButtonProps extends MuiButtonProps {
    children?: React.ReactNode;
    onClick?: () => void;
    sx?: SxProps;
}
export declare const YButton: React.FC<ButtonProps>;
export {};
