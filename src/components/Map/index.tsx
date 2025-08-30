import { useState } from 'react';
import { Grid, Container, Box } from '@mui/material';
import './Map.less';
import React from 'react';

export default function Map() {
    const rows = 9;
    const cols = 9;
    const [selectedCells, setSelectedCells] = useState<number[]>([]);

    const handleCellClick = (index: number): void => {
        setSelectedCells((prev) =>
            prev.includes(index)
                ? prev.filter((i) => i !== index)
                : [...prev, index]
        );
    };

    return (
        <Grid xs={9} item>
            <Container className="banner" sx={{ p: 0 }}>
                <Box className="map-container">
                    <Box className="map" />
                    <Box className="grid-overlay">
                        {Array.from({ length: 81 }).map((_, index) => (
                            <Box key={index} onClick={() => handleCellClick(index)} className={selectedCells.includes(index) ? 'selected' : ''} />
                        ))}
                    </Box>
                </Box>
            </Container>
        </Grid>

    );
}
