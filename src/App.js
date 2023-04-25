import {DemoA} from './pages/jsx/Demo1'
// import Demo2 from './pages/jsx/Demo2'
import Demo3 from './pages/jsx/Demo3'
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
