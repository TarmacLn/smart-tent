import { useEffect, useState } from 'react';
import { Grid, Container, Box } from '@mui/material';
import './Map.less';
import React from 'react';
import { dataStore } from '../../stores';

export default function Map() {
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

    //starting cell to save
    const computeStartFor = (index: number, size: number) => {
        const r = Math.floor(index / cols);
        const c = index % cols;
        return {
            startR: Math.max(0, Math.min(r, rows - size)),
            startC: Math.max(0, Math.min(c, cols - size)),
        };
    };

    const handleCellClick = (index: number): void => {
        setSelectedCells((prev) => {
            const group = getGroupFor(index, size);
            // if clicked group is exactly the current selection -> clear
            const same =
                prev.length === group.length &&
                group.every((g) => prev.includes(g));
            if (same) {
                // clear selection and persist
                dataStore.setTentLocation({ x: 0, y: 0});
                return [];
            }
            // persist top-left of selected box
            const { startR, startC } = computeStartFor(index, size);
            dataStore.setTentLocation({ x: startC, y: startR });
            return group;
        });
        if (selectedCells.length > 0) {
            // persist selection
            dataStore.setTentLocation({ x: 0, y: 0 });
        }
    };

    //restore selection on mount
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
                        {Array.from({ length: 81 }).map((_, index) => (
                            <Box key={index} onClick={() => handleCellClick(index)} className={selectedCells.includes(index) ? 'selected' : ''} />
                        ))}
                    </Box>
                </Box>
            </Container>
        </Grid>

    );
}
