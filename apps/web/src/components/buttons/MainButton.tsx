"use client"

import { YButton } from "@yuddy/shared-ui"
import { ButtonProps as MuiButtonProps, SxProps } from '@mui/material';


interface ButtonProps extends MuiButtonProps {
    children?: React.ReactNode;
    onClick?: () => void;
    sx?: SxProps;
}

export const MainButton = ({ sx, onClick, ...props }: ButtonProps) => <YButton {...props} sx={sx} onClick={onClick} />