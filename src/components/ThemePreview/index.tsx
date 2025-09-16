import { Box } from "@mui/material";
import React from "react";
import { SpecialThemeEnum } from "../../stores/types";
import { dataStore } from "../../stores";
import './ThemePreview.less';

export default function ThemePreview({ themeEnum, image }: { themeEnum: SpecialThemeEnum | undefined, image: React.ReactNode }) {
    const theme = themeEnum ? dataStore.getTheme(themeEnum) : undefined;

    if (!image) {
        return <Box className='box'>
            <div className='label'>
                No Theme Selected
            </div>
        </Box>

    }
    return (
        <Box className='box Theme'>
            <div className='label'>
                Selected Theme: {theme?.name ?? 'None'}
            </div>
            <div className='description'>
                {theme?.description ?? ''}
            </div>
            <div className='image'>
                {image}
            </div>
            <div className='preview'>
                <div className='colour-boxes' style={{ display: 'flex', gap: '10px', marginTop: '10px', flexDirection: 'row' }}>
                    <div className='colour-box' style={{ backgroundColor: theme?.colours?.[0] ?? '#fff', height: '50px', width: '50px' }}></div>
                    <div className='colour-box' style={{ backgroundColor: theme?.colours?.[1] ?? '#fff', height: '50px', width: '50px' }}></div>
                    <div className='colour-box' style={{ backgroundColor: theme?.colours?.[2] ?? '#fff', height: '50px', width: '50px' }}></div>
                </div>
            </div>
        </Box>
    )
}