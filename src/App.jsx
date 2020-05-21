import React, {useState, useEffect} from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import axios from 'axios';
import './App.scss';

const products = [{
  id: 1,
  jobName: 'mnv2_d_UND_rpt',
  startTime: '05/20/2020 03:00:01',
  endTime: '05/20/2020 03:00:02',
  status: 'SU'
}];
const columns = [{
  dataField: 'jobName',
  text: 'Job Name',
  sort: true
}, {
  dataField: 'startTime',
  text: 'Start Time',
  sort: true
}, {
  dataField: 'endTime',
  text: 'End Time',
  sort: true
}, {
  dataField: 'status',
  text: 'Status',
  sort: true
}];

const App = () => {

  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001')
        .then(result => {
          setData(result)
        })
  }, [])

  return (
    <div className="App">
      {console.log(data)}
      <BootstrapTable bootstrap4 keyField='id' data={ products } columns={ columns } />
    </div>
  );
}

export default App;
