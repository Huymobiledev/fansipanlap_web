import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { formatNumber } from '../../../../utils/index';
import { Avatar, Box, ButtonBase } from '@mui/material';
import { useTranslation } from "react-i18next";
import { useEffect, useState } from 'react';
import { getCarbonPrice } from "@/api/config";

function createData(
    name: string,
    price: string,
    change: number,
    market: Array<number>,
    action: string,
) {
    return { name, price, change, market, action };
}

export default function PopularTradingCreditsTable() {
    const { t } = useTranslation()
    const [rows, setRows] = useState<any[]>([]) 
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            const res = await getCarbonPrice()
            try {
                const result = await getCarbonPrice()
                const data = []
                for(let i = 0; i < result.data.length; i++){
                    let row = result.data[i]
                    if(row.last == ""){
                        continue;
                    }
                    let change = row.change.replace('%','').trim()
                    if(change == '-'){
                        change = 0
                    }
                    data.push(
                        createData(row.carboncreditscomlivecarbonprices, row.last, change, [2, 5.5, 2, 8.5, 1.5, 1], 'BNB')
                    )
                }

                setRows(data)
            } catch (err) {
            } finally {
                setLoading(false);
            }
        }
        fetchData()
    }, []);

    return (
        <TableContainer component={Paper}
            sx={{
                backgroundColor: 'inherit !important',
                borderRadius: 'none !important',
                boxShadow: 'none !important'
            }}
        >
            <Table
                sx={{
                    minWidth: 350,

                }}
                aria-label="simple table">
                <TableHead>
                    <TableRow
                        sx={{
                            '& td, & th': {
                                border: 0,
                                color: '#898989',
                                fontSize: 12,
                            },

                        }}
                    >
                        <TableCell>{t('Trading pair')}</TableCell>
                        <TableCell >Price</TableCell>
                        <TableCell align='center'>{t('Change')}</TableCell>
                        {/* <TableCell align='center'>{t('Market')}</TableCell> */}
                        <TableCell align="right">{t('Action')}</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow
                            key={row.name}
                            sx={{ '& td, & th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row"
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: 1
                                }}
                            >
                                <Avatar
                                    sx={{
                                        background: '#22AD01',
                                        width: 30,
                                        height: 30,
                                        minWidth: 30,
                                    }}
                                >
                                    {row.name.charAt(0)}
                                </Avatar>
                                {row.name}
                            </TableCell>
                            <TableCell
                                sx={{
                                    fontWeight: 700,

                                }}
                            >
                                {row.price}
                            </TableCell>
                            <TableCell align='center'
                                sx={{
                                    color: row.change > 0 ? '#22AD01' : (row.change == 0 ? '#898989' : '#FF0000'),
                                    fontWeight: 700,
                                    whiteSpace: 'nowrap'
                                }}
                            >
                                {row.change > 0 ? '+' : ''} {formatNumber(row.change, 2)}%
                            </TableCell>
                            {/* <TableCell align='center'
                                sx={{
                                    color: row.change > 0 ? '#22AD01' : '#FF0000',
                                    display: 'flex',
                                    justifyContent: 'center'
                                }}
                            >
                                <Box sx={{ flexGrow: 1, maxWidth: 200 }}>
                                    {row.market &&
                                        <SparkLineChart data={row.market} height={30} colors={[row.change > 0 ? '#22AD01' : (row.change == 0 ? '#898989' : '#FF0000')]} />
                                    }
                                </Box>
                            </TableCell> */}
                            <TableCell align="right"
                                sx={{
                                    px: 0
                                }}
                            >
                                <ButtonBase
                                    sx={{
                                        border: '1px solid #22AD01',
                                        borderRadius: '33px',
                                        height: 30,
                                        px: 2,
                                        fontSize: [12,14],
                                        whiteSpace: 'nowrap'
                                    }}
                                >
                                    {t('Trade')}
                                </ButtonBase>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
