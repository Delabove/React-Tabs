import React from 'react';
import TabsApp from './components/Tabs';
import { TabPanel } from 'react-tabs';
import categories from './tabdata';


function App() {
  state = {
    selectedOptions: {}
  }

  return (
    <div className="App">

     <TabsApp
       categories={categories}
           onChange={(selectedCategories) => this.setState({selectedCategories})}
           selectedCategories={this.state.selectedCategories}
     />

    </div>
  );
}

export default App;
