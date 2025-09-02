import React from 'react';
import './EditSelection.less';
import { Box, Button, Container, Divider, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import Header from '../../../components/Header';
import { observer } from 'mobx-react-lite';
import CoverMap from '../../../components/CoverMap';
import { useNavigate } from 'react-router-dom';
import { uiStore } from '../../../stores';
import { Height } from '@mui/icons-material';

function EditSelection() {

    function createData(
        name: string,
        type: string
    ) {
        return { name, type };
    }

    const rows = [
        createData('ssss', 'type a'),
        createData('aaaaaaa', 'type b'),
        createData('ssss', 'type a'),
        createData('aaaaaaa', 'type b'),
        createData('ssss', 'type a'),
        createData('aaaaaaa', 'type b'),
    ];

    return (
        <div className='Edit'>
            <Header
                title='Edit Tent Covers'
                onClickBack={() => uiStore.setCurrentTab(0)}
                color='black'
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
                                        <div className='stats-content' style={{ marginTop: 8, marginBottom: 8 }}>
                                            <TableContainer component={Paper} className="table-container">
                                                <Table stickyHeader>
                                                    <TableHead>
                                                        <TableRow>
                                                            <TableCell>Name</TableCell>
                                                            <TableCell>Type</TableCell>
                                                        </TableRow>
                                                    </TableHead>
                                                    <TableBody>
                                                        {rows.map((row, idx) => (
                                                            <TableRow key={idx} hover>
                                                                <TableCell>{row.name}</TableCell>
                                                                <TableCell>{row.type}</TableCell>
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

