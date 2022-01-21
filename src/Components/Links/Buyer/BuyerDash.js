import React, { PureComponent, useState, useCallback} from 'react';
import { PieChart, Pie, Sector, ResponsiveContainer } from 'recharts';
import './BuyerDash.css';
import UserIcon from './Assets/usericon.png';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import {Home, ManageAccounts, Settings, ExitToApp} from '@mui/icons-material';
import { Link } from 'react-router-dom';

const data = [
    { name: "Tomatoes", value: 400 },
    { name: "Capsicum", value: 300 },
    { name: "Lettuce", value: 300 },
    { name: "Chillies", value: 200 }
  ];

  const tomcrop = [
    { name: "Beefsteak", value: 4 },
    { name: "Nati", value: 3 },
    { name: "Sagoon", value: 3 },
    { name: "Hybrid", value: 2 }
  ];
  const capcrop = [
    { name: "Bomby", value: 4 },
    { name: "Orobelle", value: 3 },
    { name: "Indra", value: 3 },
    { name: "Cherry", value: 2 }
  ];
  const letcrop = [
    { name: "Romaine", value: 4 },
    { name: "Leafy", value: 3 },
    { name: "Stem", value: 3 },
    { name: "Head", value: 2 }
  ];
  const chilcrop = [
    { name: "Kanthari", value: 4 },
    { name: "Guntur", value: 3 },
    { name: "Jwala", value: 3 },
    { name: "Dhani", value: 2 }
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


function BuyerDash() {
    const [activeIndex, setActiveIndex] = useState(0);
    const onPieEnter = useCallback(
    (_, index) => {
      setActiveIndex(index);
    },
    [setActiveIndex]
    );
    
    return (
        <div className='Buyer-Dash'>
            <div className='BuyerDash-nav'>
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
            <div className='BuyerDash-header'>
                <div className='BuyerUser-container'>
                    <div className='BuyerDash-title'>DashBoard</div>
                    <div className='BuyerDash-user'>Welcome Prithvi
                        <img src={UserIcon} className='Buyer-icon' />
                    </div>
                </div>
                
                <div className='BuyerStats-container'>
                    

                    <div className='BuyerPiechart-container'>
                        Number of Farmers
                        <h2>1064</h2>
                    </div>
                    <div className='BuyerPiechart-container'>
                        Expected Yield in next 90 days<br/>
                        <h2>20,000 tons</h2>
                    </div> 
                    <div className='BuyerPiechart-container'>
                        <PieChart width={400} height={400}>
                            <Pie
                                activeIndex={activeIndex}
                                activeShape={renderActiveShape}
                                data={data}
                                cx={200}
                                cy={200}
                                innerRadius={60}
                                outerRadius={80}
                                fill="#26d7ab"
                                dataKey="value"
                                onMouseEnter={onPieEnter}
                            />
                        </PieChart>
                    </div>     
                              
                </div>
                <h2>Select Crops</h2>   
                <div className='BuyerCrops-container'>
                    
                    <div className='BuyerCropSub-container'>
                    <h4>Tomatoes</h4>
                    <div className='BuyerCropSub-grid'>
                            {tomcrop.map(crop => {
                                return (
                                    <div className='Buyer-row'>
                                    <input type="checkbox" id={crop.name} className="BuyerCrop-Check" />
                                                <label htmlFor={crop.name} className="BuyerCrop-Check">{crop.name}</label>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                    <div className='BuyerCropSub-container'>
                    <h4>Capsicum</h4>
                    <div className='BuyerCropSub-grid'>
                            {capcrop.map(crop => {
                                return (
                                    <div className='Buyer-row'>
                                    <input type="checkbox" id={crop.name} className="BuyerCrop-Check" />
                                                <label htmlFor={crop.name} className="BuyerCrop-Check">{crop.name}</label>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                    <div className='BuyerCropSub-container'>
                    <h4>Lettuce</h4>
                    <div className='BuyerCropSub-grid'>
                            {letcrop.map(crop => {
                                return (
                                    <div className='Buyer-row'>
                                    <input type="checkbox" id={crop.name} className="BuyerCrop-Check" />
                                                <label htmlFor={crop.name} className="BuyerCrop-Check">{crop.name}</label>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                    <div className='BuyerCropSub-container'>
                    <h4>Chillies</h4>
                    <div className='BuyerCropSub-grid'>
                            {chilcrop.map(crop => {
                                return (
                                    <div className='Buyer-row'>
                                    <input type="checkbox" id={crop.name} className="BuyerCrop-Check" />
                                                <label htmlFor={crop.name} className="BuyerCrop-Check">{crop.name}</label>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                    
                        
                </div>
                <Link to="/buyerdash2" className="BuyerCrop-button">Search for Farmers</Link>
            </div>
        </div>
    )
}

export default BuyerDash 
