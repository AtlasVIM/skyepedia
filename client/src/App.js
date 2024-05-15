import './App.css';
import Homepage from './pages/Homepage';
import {Route, Routes} from 'react-router-dom'
import Layout from './Layout';
import GeneralPage from './pages/GeneralPage';
import WorldItems from './components/page-components/WorldItems';
import WorldFilters from './components/filters/WorldFilters';
import CreatePage from './pages/CreatePage';
import CharacterTypeIndex from './pages/CharacterIndexPage';
//import LoginPage from './pages/LoginPage';
//import RegisterPage from './pages/RegisterPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout/>}>
          <Route index element={<Homepage/>}/>
          {/*<Route path='/login' element={<LoginPage/>}/>
          <Route path='/register' element={<RegisterPage/>}/>*/}
          <Route path='/world' element={
          <GeneralPage itemsComponent={<WorldItems/>} filters={<WorldFilters/>} />}/>
          <Route path='/characters' element={
          <CharacterTypeIndex/>}/>
          <Route path="characters/npcs" element={<GeneralPage/>}/>
          <Route path="characters/players"/>
          <Route path='/orgs' element={<GeneralPage/>}/>
          <Route path='/species' element={<GeneralPage/>}/>
          <Route path='/religion' element={<GeneralPage/>}/>
          <Route path='/ideologies' element={<GeneralPage/>}/>
          <Route path='/dailylife' element={<GeneralPage/>}/>
          <Route path='/create/page' element={<CreatePage/>} />
          </Route>
    </Routes>
  );
}

export default App;
