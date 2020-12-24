//- import React from 'react';
import React, { useState, useEffect } from 'react';
import { Layout, Row, Col } from 'antd'; // use to organize the arrangment of charts
import { useCubeQuery } from '@cubejs-client/react';
import Pie from './Pie';
import Map from './Map';


const Dashboard = () => {
//define the data, give an initial value(not matters)
const [pieData, setPieData] = useState([{ name: '', y: 100 }]);
const [regionsData, setRegionsData] = useState([0, 0]);
const [region, setRegion] = useState(null);
// const [range, setRange] = useState('last year');

const { resultSet: pie } = useCubeQuery({
  //update measures and dimensions
  measures: ['Customer.count'],
  dimensions: ['Customer.salesperson'],
  timeDimensions: [],//If put things no need, it'll break
  order: {
    'Customer.count': 'desc',
  }
},
{ subscribe: true }
);

const { resultSet: regions } = useCubeQuery({
  measures: ['Address.count'],
  dimensions: ['Address.city'],
  timeDimensions:[]
},
{ subscribe: true }
);
//change resultset to the name of chart component
// It's used to re-render/update the page
useEffect(() => {
  if (pie) {
    let temp = [];
    pie.tablePivot().forEach((item) => {
      temp.push({//Update x,y data
        name: item['Customer.salesperson'],
        y: parseInt(item['Customer.count']),
      });
    });
    setPieData(temp);
  }
}, [pie]);

useEffect(() => {
  if (regions) {
    let temp = [];

    regions.tablePivot().forEach((item) => {
      temp.push([item['Users.state'], parseInt(item['Orders.count'])]);
    });

    setRegionsData(temp);
  }
}, [regions]);

//Move this loading return after the useeffect function, otherwise there'll be an error "React Hook is called conditionally"
if (!pie) {
  return "Loading…";
}
//const data = regions.tablePivot().map(item => [item['Users.state'], parseInt(item['Orders.count'])])
 return (
   <Layout>
     <React.Fragment>
     <Row gutter={20} className='dashboard__row'>
        <Col sm={24} lg={8}>
          <div className='dashboard__cell'>
            <Pie data={pieData} />
          </div>
        </Col>
        <Col sm={24} lg={16}>
          <div className='dashboard__cell'>
          <Map
              data={regionsData}
              setRegion={(data) => {
                setRegion(data);
              }}
              />
          </div>
        </Col>
      </Row>
     </React.Fragment>
   </Layout>
 );
};
export default Dashboard;