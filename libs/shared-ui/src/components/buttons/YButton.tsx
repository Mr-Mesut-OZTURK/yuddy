import React from 'react';
import Button from '@mui/material/Button';

interface ButtonProps {
    children?: React.ReactNode;
    onClick?: () => void;
}

export const YButton: React.FC<ButtonProps> = ({ children, onClick }) => {
    return (
        <Button variant="contained" color="primary" onClick={onClick}>
            {children}
        </Button>
    );
};