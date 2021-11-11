// import logo from './logo.svg';
import './App.css';
import { Foot } from './Foot';
import { Menu, Box1, Box2, Box3, Box4, Box5, Box6, Box7, Box8 } from './Menu';
// import MenuIcon from '@mui/icons-material/Menu';
// import useState from 'react';

function App() {
  return (
    <div className="App">
      <Menu />
      <div className="boxlist">
        <Box1 />
        <Box2 />
        <Box3 />
        <Box4 />
        <Box5 />
        <Box6 />
        <Box7 />
        <Box8 />
      </div>
      <Foot />
    </div>
  );
}

export default App;
