import React, { useState } from 'react';
import './EditSelection.less';
import { Box, Button, Container, Divider, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import Header from '../../../components/Header';
import { observer } from 'mobx-react-lite';
import CoverMap from '../../../components/CoverMap';
import { data, useNavigate } from 'react-router-dom';
import { dataStore, uiStore } from '../../../stores';
import { Height } from '@mui/icons-material';
import CoverModal from '../../../components/CoverModal';
import { CoverSizeEnum } from '../../../stores/types';

function EditSelection() {
    const [isVisible, setIsVisible] = useState(false);
    const covers = dataStore.getCovers();
    const [coverId, setCoverId] = useState<number | undefined>(undefined);

    return (
        <div className='Edit'>
            <Header
                title='Edit Tent Covers'
                onClickBack={() => uiStore.setCurrentTab(0)}
                color='black'
            />
            <CoverModal
                isVisible={isVisible}
                closeModal={() => setIsVisible(false)}
                type='edit'
                id={coverId}
            />
            <div className='content'>
                <Grid container>
                    <Grid md={7} xs={12} item>
                        <CoverMap />
                    </Grid>
                    <Grid md={5} xs={12} item>
                        <Grid container className='right'>
                            <Grid xs={12} item>
                                <Container className='stats'>
                                    <div className='title'>
                                        Choose the cover you want to edit:
                                    </div>
                                    <div className='stats-content' style={{ marginTop: 8, marginBottom: 8, height: 400 }}>
                                        <TableContainer component={Paper} className="table-container">
                                            <Table stickyHeader>
                                                <TableHead>
                                                    <TableRow>
                                                        <TableCell>Name</TableCell>
                                                        <TableCell>Type</TableCell>
                                                        <TableCell>Size</TableCell>
                                                    </TableRow>
                                                </TableHead>
                                                <TableBody>
                                                    {covers.map((cover, idx) => (
                                                        <TableRow
                                                            key={idx}
                                                            onClick={() => {
                                                                setCoverId(cover.id);
                                                                setIsVisible(true);
                                                            }}
                                                            hover
                                                        >
                                                            <TableCell>{cover.name}</TableCell>
                                                            <TableCell>{cover.type}</TableCell>
                                                            <TableCell>{cover.size === CoverSizeEnum.Small ? 'Small' : cover.size === CoverSizeEnum.Medium ? 'Medium' : 'Large'}</TableCell>
                                                        </TableRow>
                                                    ))}
                                                </TableBody>
                                            </Table>
                                        </TableContainer>
                                    </div>
                                    <div className='button'>
                                        <Button
                                            variant="contained"
                                            color="primary"
                                            onClick={() => uiStore.setCurrentTab(0)}
                                        >
                                            Back to menu
                                        </Button>
                                    </div>
                                </Container>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        </div>
    );
}

export default observer(EditSelection);

