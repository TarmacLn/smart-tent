import { useEffect, useState } from 'react';
import { Grid, Container, Box } from '@mui/material';
import './Map.less';
import React from 'react';
import { dataStore, uiStore } from '../../stores';
import { SeverityEnum } from '../../stores/types';

export default function Map() {
    const rows = 9;
    const cols = 9;
    const size = dataStore.getTent?.()?.size ?? 2;
    const [selectedCells, setSelectedCells] = useState<number[]>([]);
    const dangerCells = dataStore.getDangerCells();
    const warningCells = dataStore.getWarningCells();
    const severity = dataStore.getSeverity();

    useEffect(() => {
        if (severity === SeverityEnum.Danger || severity === undefined) {
            uiStore.setTentReady(false);
            uiStore.setStakeReady(false);
        }
    }, [severity]);

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

    // Specific range random: Math.floor(Math.random() * (max - min + 1)) + min;
    const randomRange = (min: number, max: number): number => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    const randomStats = (severity: SeverityEnum) => {
        let humidityRange: [number, number];
        let sunshineRange: [number, number];
        let groundRange: [number, number];

        if (severity === SeverityEnum.Danger) {
            // red cells
            humidityRange = [70, 100];
            sunshineRange = [20, 50];
            groundRange = [30, 70];
            dataStore.setWind(randomRange(40, 80));
            dataStore.setSeverity(SeverityEnum.Danger);
        } else if (severity === SeverityEnum.Warning) {
            // yellow cells
            humidityRange = [55, 85];
            sunshineRange = [40, 70];
            groundRange = [60, 90];
            dataStore.setWind(randomRange(20, 60));
            dataStore.setSeverity(SeverityEnum.Warning);    
        } else {
            // normal
            humidityRange = [40, 70];
            sunshineRange = [60, 85];
            groundRange = [85, 100];
            dataStore.setWind(randomRange(0, 40));
            dataStore.setSeverity(SeverityEnum.Normal);
        }

        const humidity = randomRange(humidityRange[0], humidityRange[1]);
        const sunshine = randomRange(sunshineRange[0], sunshineRange[1]);
        const groundStability = randomRange(groundRange[0], groundRange[1]);
        dataStore.setTentStats({ humidity, sunshine, groundStability });
    };

    const handleCellClick = (index: number): void => {
        // calculate if the selection is on top of warning or danger cells
        const group = getGroupFor(index, size);
        const overlapsDanger = group.some((i) => dangerCells.includes(i));
        const overlapsWarning = !overlapsDanger && group.some((i) => warningCells.includes(i));
        const severity: SeverityEnum = overlapsDanger ? SeverityEnum.Danger : overlapsWarning ? SeverityEnum.Warning : SeverityEnum.Normal;

        setSelectedCells((prev) => {
            const group = getGroupFor(index, size);
            // if clicked group is exactly the current selection -> clear
            const same =
                prev.length === group.length &&
                group.every((g) => prev.includes(g));
            if (same) {
                // clear selection and persist
                dataStore.setTentLocation({ x: 0, y: 0 });
                dataStore.setTentStats({ humidity: 0, sunshine: 0, groundStability: 0 });
                dataStore.setSeverity(undefined);
                return [];
            }
            // persist top-left of selected box
            const { startR, startC } = computeStartFor(index, size);
            dataStore.setTentLocation({ x: startC, y: startR });
            randomStats(severity);
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
                        {Array.from({ length: rows * cols }).map((_, index) => {
                            const sel = selectedCells.includes(index);
                            const warning = warningCells.includes(index);
                            const danger = dangerCells.includes(index);
                            const classes = sel ? 'selected' : danger ? 'danger' : warning ? 'warning' : '';
                            return (
                                <Box key={index} onClick={() => handleCellClick(index)} className={classes} />

                            );
                        })}
                    </Box>
                </Box>
            </Container>
        </Grid>

    );
}
