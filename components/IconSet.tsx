import React from 'react';

interface IconSetProps {
    Icon: React.ElementType;
    text: string;
}

export const IconSet: React.FC<IconSetProps> = ({ Icon, text }) => {
    return (
        <div className="flex flex-col items-center justify-center">
            <Icon className="h-6 w-6 mb-1" />
            <p className="text-sm">{text}</p>
        </div>
    );
};