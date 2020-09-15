import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import categories from '../tabdata'


const OptionsList = ({ options, selectedOptions, onChange }) => {

    const handleCheckboxClicked = (selectedOptionId) => {
      // is currently selected
      if(selectedCategories[selectedOptionId]){
        // remove selected key from options list
        delete selectedCategories[selectedOptionId];
      } else { // is not currently selected
        // Add selected key to optionsList
        selectedCategories[selectedOptionId] = {}
      }
      // call onChange function given by parent
      onChange(selectedCategories)
    }

    const handleSubOptionsListChange = (optionId, subSelections) => {
      // add sub selections to current optionId
      selectedCategories[optionId] = subSelections;
      // call onChange function given by parent
      onChange(selectedCategories);
    }

export default () => (

  <Tabs>
  {categories.map((category) => (
    <>
    <TabList key={category.title}>
        <Tab>{category.title}</Tab>
        <Tab>{category.title}</Tab>
    </TabList>
     <TabList key={category.subcategories}>
        <Tab>{subcategories.title}</Tab>
        <Tab>{category.subcategories.title}</Tab>
    </TabList>
    <TabPanel key={category.subcategories}>
        <a href="#">{category.subcategories.pages.title}</a>
        <a href="#">{category.subcategories.pages.title}</a>
    </TabPanel>
    </>
    ))}
  </Tabs>

);



// // Recursive component


//     return (
//       <div>
//         {options.map(option => (
//           <ul>
//             <Checkbox
//               selected={selectedOptions[option.id]}
//               label={option.name}
//               onChange={() => {handleCheckboxClicked(option.id)}}
//              />
//             {/* Base Case */}
//             {(option.subOptions.length > 0 && selectedOptions[option.id]) &&
//               <OptionsList
//                 options={option.subOptions}
//                 selectedOptions={selectedOptions[option.id]}
//                 onChange={(subSelections) => handleSubOptionsListChange(option.id, subSelections)}
//                />
//             }
//           </ul>
//         ))}
//       </div>
//     )
//   }

//   // Dumb checkbox component, completly controlled by parent
//   const Checkbox = ({ selected, label, onChange }) => {
//     return (
//       <div>
//         <div
//           className="checkbox"
//           onClick={() => onChange(!selected)}
//         />
//         <div className="label">{label}</div>
//       </div>
//     )
//   }