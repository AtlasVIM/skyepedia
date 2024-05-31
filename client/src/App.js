import './App.css';
import {Route, Routes} from 'react-router-dom'

import Layout from './Layout';

import Homepage from './pages/Homepage';
import GeneralListPage from './pages/GeneralListPage';
import CharacterTypeIndex from './pages/CharacterIndexPage';
import EntryDetailsWrapper from './components/page-components/EntryDetailsWrapper.js';

import { npcDB } from './db/page-items/npcsdb.js';
import { worldDB } from './db/page-items/worlddb.js';
import { orgDB } from './db/page-items/orgdb.js';
import { religionDB } from './db/page-items/religiondb.js';
import { speciesDB } from './db/page-items/speciesdb.js';
import { ideologiesDB } from './db/page-items/ideologiesdb.js';
import { dailylifeDB } from './db/page-items/dailylifedb.js';
import { itemsDB } from './db/page-items/itemsdb.js';

import { literatureFilter, religionFilters, speciesFilters, worldFilters } from './db/misc/filtersdb.js';
import { literatureDB } from './db/page-items/literaturedb.js';
import ComingSoon from './pages/ComingSoon.js';


function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout/>}>

          <Route index element={<Homepage/>}/>

          <Route path='/world' element={<GeneralListPage db={worldDB} filters={worldFilters} />}/>
          <Route path='/orgs' element={<GeneralListPage db={orgDB}/>}/>
          <Route path='/species' element={<GeneralListPage db={speciesDB} filters={speciesFilters}/>}/>
          <Route path='/religion' element={<GeneralListPage db={religionDB} filters={religionFilters}/>}/>
          <Route path='/ideologies' element={<GeneralListPage db={ideologiesDB}/>}/>
          <Route path='/dailylife' element={<GeneralListPage db={dailylifeDB}/>}/>
          <Route path='/literature' element={<GeneralListPage db={literatureDB} filters={literatureFilter}/>}/>
          <Route path='/items' element={<GeneralListPage db={itemsDB}/>}/>
          <Route path='/characters' element={<CharacterTypeIndex/>}/>
          
          <Route path="characters/npcs" element={<GeneralListPage db={npcDB}/>}/>
          <Route path='/characters/npcs/:id' element={<EntryDetailsWrapper db={npcDB}/>}/>
          <Route path="characters/players" element={<ComingSoon/>}/>
          
          <Route path='/world/:id' element={<EntryDetailsWrapper db={worldDB}/>}/>
          <Route path='/religion/:id' element={<EntryDetailsWrapper db={religionDB}/>}/>
          <Route path='/species/:id' element={<EntryDetailsWrapper db={speciesDB}/>}/>
          <Route path='/ideologies/:id' element={<EntryDetailsWrapper db={ideologiesDB}/>}/>
          <Route path='/dailylife/:id' element={<EntryDetailsWrapper db={dailylifeDB}/>}/>
          <Route path='/orgs/:id' element={<EntryDetailsWrapper db={orgDB}/>}/>
          <Route path='/literature/:id' element={<EntryDetailsWrapper db={literatureDB}/>}/>
          <Route path='/items/:id' element={<EntryDetailsWrapper db={itemsDB}/>}/>
          

          </Route>
    </Routes>
  );
}

export default App;
