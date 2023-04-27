import {DemoA} from './pages/jsx/Demo1'
// import Demo2 from './pages/jsx/Demo2'
import Demo3 from './pages/jsx/Demo3'
import Demo4 from './pages/jsx/Demo4'
import Demo5 from './pages/jsx/Demo5'
import Demo6 from './pages/jsx/Demo6'
import Demo7 from './pages/jsx/Demo7'
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
