import React, { PureComponent, useState, useCallback} from 'react';
import { PieChart, Pie, Sector, ResponsiveContainer } from 'recharts';
import './BuyerDash2.css';
import UserIcon from '../Assets/usericon.png';
import IconButton from '@mui/material/IconButton';
import {Home, ManageAccounts, Settings, ExitToApp, Margin} from '@mui/icons-material';
import { Link } from 'react-router-dom';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';

const data = [
    { name: "Antharkush", value: 400 },
    { name: "Sagoon", value: 300 },
    { name: "Beefsteak", value: 300 },
    { name: "Hybrid", value: 200 }
  ];

  const renderActiveShape = (props: any) => {
    const RADIAN = Math.PI / 180;
    const {
      cx,
      cy,
      midAngle,
      innerRadius,
      outerRadius,
      startAngle,
      endAngle,
      fill,
      payload,
      percent,
      value
    } = props;
    const sin = Math.sin(-RADIAN * midAngle);
    const cos = Math.cos(-RADIAN * midAngle);
    const sx = cx + (outerRadius + 10) * cos;
    const sy = cy + (outerRadius + 10) * sin;
    const mx = cx + (outerRadius + 30) * cos;
    const my = cy + (outerRadius + 30) * sin;
    const ex = mx + (cos >= 0 ? 1 : -1) * 22;
    const ey = my;
    const textAnchor = cos >= 0 ? "start" : "end";
    return (
      <g>
        <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
          {payload.name}
        </text>
        <Sector
          cx={cx}
          cy={cy}
          innerRadius={innerRadius}
          outerRadius={outerRadius}
          startAngle={startAngle}
          endAngle={endAngle}
          fill={fill}
        />
        <Sector
          cx={cx}
          cy={cy}
          startAngle={startAngle}
          endAngle={endAngle}
          innerRadius={outerRadius + 6}
          outerRadius={outerRadius + 10}
          fill={fill}
        />
        <path
          d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`}
          stroke={fill}
          fill="none"
        />
        <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
        <text
          x={ex + (cos >= 0 ? 1 : -1) * 12}
          y={ey}
          textAnchor={textAnchor}
          fill="#333"
        >{`${value} tons`}</text>
        <text
          x={ex + (cos >= 0 ? 1 : -1) * 12}
          y={ey}
          dy={18}
          textAnchor={textAnchor}
          fill="#999"
        >
        </text>
      </g>
    );
  };

  const columns = [
    { id: 'name', label: 'Name', minWidth: 80 },
    { id: 'rating', label: 'Rating', minWidth: 80 },
    {
      id: 'loc',
      label: 'Location',
      minWidth: 80,
      align: 'right',
      format: (value) => value.toLocaleString('en-US'),
    },
    {
      id: 'crop',
      label: 'Current Crop/s',
      minWidth: 170,
      align: 'right',
      format: (value) => value.toLocaleString('en-US'),
    },
    {
      id: 'edh',
      label: 'EDH',
      minWidth: 140,
      align: 'right',
      format: (value) => value.toFixed(2),
    },
    {
        id: 'expqty',
        label: 'Exp Quantity',
        minWidth: 170,
        align: 'right',
        format: (value) => value.toFixed(2),
      },
      {
        id: 'price',
        label: 'Expecting Price',
        minWidth: 170,
        align: 'right',
        format: (value) => value.toFixed(2),
      },
      {
        id: 'inputs',
        label: 'Inputs',
        minWidth: 170,
        align: 'right',
        format: (value) => value.toFixed(2),
      },
  ];
  
  function createData(name, rating, loc, crop, edh, expqty, price, inputs) {
    return {name, rating, loc, crop, edh, expqty, price, inputs};
  }
  
  const rows = [
    createData('Ramappa', '4.2', 'Hosur', 'Nati', '28/02/2022', '20 tons', 'Rs.18/kg', 'Glyphosate'),
    createData('Raja', '3.5', 'Yelahanka', 'Beefsteak', '02/03/2022', '10 tons', 'Rs.20/kg','Bourdeaux Mixture'),
    createData('Mohan', '5', 'Chikballapur', 'Cherry Tomato', '05/02/2022', '15 tons', 'Rs.22/kg','Garlic Spray'),
    createData('Rajan', '4.7', 'Hoskotae', 'Pearl Arka', '15/04/2022', '27 tons', 'Rs.19/kg','Neem Cakes'),
    createData('Rehman', '3.2', 'Huskur', 'Araka Samrat', '20/04/2022', '12 tons', 'Rs.16/kg','Urea'),
    createData('Rahim', '3.8', 'Kothanur', 'Nati', '07/06/2022', '4 tons', 'Rs.21/kg','DAP'),
  ];
  

function BuyerDash2() {
        const [activeIndex, setActiveIndex] = useState(0);
        const onPieEnter = useCallback(
        (_, index) => {
          setActiveIndex(index);
        },
        [setActiveIndex]
        );
        const [page, setPage] = React.useState(0);
        const [rowsPerPage, setRowsPerPage] = React.useState(10);

        const handleChangePage = (event, newPage) => {
            setPage(newPage);
        };

        const handleChangeRowsPerPage = (event) => {
            setRowsPerPage(+event.target.value);
            setPage(0);
        };

        return (
            <div className='Buyer-Dash2'>
                <div className='BuyerDash2-nav'>
                    <Link to="/buyerdash"><IconButton aria-label="Home">
                        <Home fontSize="large" sx={{ color: '#fff' }}/>
                    </IconButton></Link>
                    <IconButton aria-label="ManageAccount">
                        <ManageAccounts fontSize="large" sx={{ color: '#fff' }}/>
                    </IconButton>
                    <IconButton aria-label="Settings">
                        <Settings fontSize="large" sx={{ color: '#fff' }}/>
                    </IconButton>
                    <Link to="/"><IconButton aria-label="Exit">
                        <ExitToApp fontSize="large" sx={{ color: '#fff' }}/>
                    </IconButton></Link>
                </div>
                <div className='BuyerDash2-header'>
                    <div className='BuyerUser2-container'>
                        <div className='BuyerDash2-title'>Tomato</div>
                        <div className='BuyerDash2-user'>Welcome Prithvi
                            <img src={UserIcon} className='Buyer-icon' />
                        </div>
                    </div>
                    <div className='BuyerStats2-container'>
                        <div className='BuyerPiechart2-container'>
                            Average Selling Price of Tomato
                            <h2>Rs.18/kg</h2>
                        </div>
                        <div className='BuyerPiechart2-container'>
                            Expected production in next 90 days<br/>
                            <h2>5,000 tons</h2>
                        </div> 
                        <div className='BuyerPiechart2-container'>
                            <PieChart width={400} height={400}>
                                <Pie
                                    activeIndex={activeIndex}
                                    activeShape={renderActiveShape}
                                    data={data}
                                    cx={200}
                                    cy={200}
                                    innerRadius={60}
                                    outerRadius={80}
                                    fill="#EE2288"
                                    dataKey="value"
                                    onMouseEnter={onPieEnter}
                                />
                            </PieChart>
                        </div>             
                    </div>

                    <Paper sx={{ width: '90%', overflow: 'hidden', margin: '2vmin', borderRadius: '2vmin'}}>
                        <TableContainer sx={{ maxHeight: 400 }}>
                            <Table stickyHeader aria-label="sticky table">
                        <TableHead>
                            <TableRow>
                                {columns.map((column) => (
                                    <TableCell
                                        key={column.id}
                                        align={column.align}
                                        style={{ minWidth: column.minWidth }}>
                                        {column.label}
                                    </TableCell>
                                ))}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows
                                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                .map((row) => {
                                    return (
                                        <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                                            {columns.map((column) => {
                                            const value = row[column.id];
                                                return (
                                                    <TableCell key={column.id} align={column.align}>
                                                        <Link to="/farmerprofile" style={{textDecoration: 'none', color: '#000'}}>
                                                        {column.format && typeof value === 'number'
                                                        ? column.format(value)
                                                        : value}
                                                        </Link>
                                                    </TableCell>
                                                );
                                            })}
                                        </TableRow>
                                    );
                                })}
                        </TableBody>
                            </Table>
                    </TableContainer>
                    <TablePagination
                        rowsPerPageOptions={[10, 25, 100]}
                        component="div"
                        count={rows.length}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        onPageChange={handleChangePage}
                        onRowsPerPageChange={handleChangeRowsPerPage} />    
                    </Paper>
                </div>
            </div>
        )
    }    
    

export default BuyerDash2
