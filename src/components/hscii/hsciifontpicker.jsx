"use client";
import React, { useState } from 'react';
import Select from 'react-select';
import options from './options.json';
import { hsciifont_classnames } from './hsciifont_classnames.js';

export const Hsciifontpicker= () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);  
  let currfontcn = "";

  const handleCategoryChange = (selectedOption) => {
    setSelectedCategory(selectedOption);
    setSelectedItem(null); // Reset the second select
    if (selectedOption) { setBodyFont(selectedOption.value); }
  };

  const handleItemChange = (selectedOption) => {
    setSelectedItem(selectedOption);
    if (selectedOption) { setBodyFont(selectedOption.value); }
  };

  const setBodyFont = (selected_hsciifont_name) => {
	// alert(`currfontcn is ${currfontcn}. document.body.classList is ${document.body.classList}`);
	document.body.classList.value = document.body.classList.value.replaceAll(/__className_\w+\s+antialiased/g,"");
	document.body.classList.value = document.body.classList.value.replaceAll(/antialiased\s+__className_\w+/g,"");
	currfontcn = hsciifont_classnames[selected_hsciifont_name];
	document.body.classList.add(currfontcn);
	document.body.classList.add("antialiased");
  };
  const itemOptions = selectedCategory ? selectedCategory.children : [];

  return (
    <div style={{ width: 400, marginBottom: 20, color: 'black', backgroundColor: 'white' }} >
      <Select
        options={options}
        onChange={handleCategoryChange}
        value={selectedCategory}
        placeholder="8aiueohcg lxnguAge(bhαsα).select"
      />
      <Select
        options={itemOptions}
        onChange={handleItemChange}
        value={selectedItem}
        placeholder="8aiueohcg font.select"
        isDisabled={!selectedCategory}
      />

    </div>
  );
};
