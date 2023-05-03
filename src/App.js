import {DemoA} from './pages/jsx/Demo1'
// import Demo2 from './pages/jsx/Demo2'
import Demo3 from './pages/jsx/Demo3'
import Demo4 from './pages/jsx/Demo4'
import Demo5 from './pages/jsx/Demo5'
import Demo6 from './pages/jsx/Demo6'
import Demo7 from './pages/jsx/Demo7'
import Demo8 from './pages/jsx/Demo8'
import Demo9 from './pages/jsx/Demo9'
import Demo10 from './pages/jsx/Demo10'
import Demo11 from './pages/jsx/Demo11'
import Demo12 from './pages/jsx/Demo12'
import Demo13 from './pages/jsx/Demo13'
import Demo14 from './pages/jsx/Demo14'
import Demo15 from './pages/jsx/Demo15'
import Demo16 from './pages/jsx/Demo16'
import Demo17 from './pages/jsx/Demo17'

import {HashRouter,Route, Routes, Link} from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <HashRouter>
        <Link to='/demo1'>demo1</Link>   | 
        <Link to='/demo2/test1'>demo2</Link>  | 
        <Routes>
          <Route path='/demo1' element={<DemoA/>}></Route>
          <Route path='demo2'>
            <Route path='test1' element={<Demo3/>}></Route>
          </Route>
          <Route path='demo4' element={<Demo4/>}></Route>
          <Route path='demo5' element={<Demo5/>}></Route>
          <Route path='demo6' element={<Demo6/>}></Route>
          <Route path='demo7' element={<Demo7/>}></Route>
          <Route path='demo8' element={<Demo8/>}></Route>
          <Route path='demo9' element={<Demo9/>}></Route>
          <Route path='demo10' element={<Demo10/>}></Route>
          <Route path='demo11' element={<Demo11/>}></Route>
          <Route path='demo12' element={<Demo12/>}></Route>
          <Route path='demo13' element={<Demo13/>}></Route>
          <Route path='demo14' element={<Demo14/>}></Route>
          <Route path='demo15' element={<Demo15/>}></Route>
          <Route path='demo16' element={<Demo16/>}></Route>
          <Route path='demo17' element={<Demo17/>}></Route>
        </Routes>
      </HashRouter>
      {/* <DemoA a='abc'></DemoA>
      <hr/>
      <DemoB/>
      <Demo2></Demo2> */}
    </div>
  );
}

export default App;
