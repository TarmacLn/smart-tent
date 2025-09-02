import { useEffect, useState } from 'react';
import { Grid, Container, Box } from '@mui/material';
import './CoverMap.less';
import React from 'react';
import { dataStore } from '../../stores';

export default function CoverMap() {
    const rows = 9;
    const cols = 9;
    const size = dataStore.getTent?.()?.size ?? 2;
    const [selectedCells, setSelectedCells] = useState<number[]>([]);

    const getGroupFor = (index: number, size: number): number[] => {
        const r = Math.floor(index / cols);
        const c = index % cols;

        // clamp start so the whole size x size box fits inside grid
        const startR = Math.max(0, Math.min(r, rows - size));
        const startC = Math.max(0, Math.min(c, cols - size));

        const coords: number[] = [];
        for (let rr = startR; rr < startR + size; rr++) {
            for (let cc = startC; cc < startC + size; cc++) {
                coords.push(rr * cols + cc);
            }
        }
        return coords;
    };

    // fetch tent location
    useEffect(() => {
        const x = dataStore.getTentLocation()?.x;
        const y = dataStore.getTentLocation()?.y;
        if ((x !== 0) && (y !== 0) && x && y) {
            const startIndex = y * cols + x;
            const group = getGroupFor(startIndex, size);
            setSelectedCells(group);
        }
    }, []);

    return (
        <Grid xs={9} item>
            <Container className="banner" sx={{ p: 0 }}>
                <Box className="map-container">
                    <Box className="map" />
                    <Box className="grid-overlay">
                        {Array.from({ length: rows * cols }).map((_, index) => {
                            const sel = selectedCells.includes(index);
                            return (
                                <Box key={index} className={sel ? 'selected' : ''} />

                            );
                        })}
                    </Box>
                </Box>
            </Container>
        </Grid>

    );
}
