"use client";
import React, { useState } from 'react';
import Select from 'react-select';
import data from './data.json';
import { hsciifontscn } from './hsciifontscn';

const FontPicker= () => {
  const [fontcategory, setfontcategory] = useState(null);
  const [sfont, setSFont] = useState("");
  const [sfontlist, setSFontList] = useState([]);
  let currfontcn = "";
  const handlefontcategoryChange = (fontcategoryObject) => {
    setfontcategory(fontcategoryObject);
    if (fontcategoryObject) {
      setSFontList(fontcategoryObject.sfonts);
      setSFont(fontcategoryObject.sfonts[0]);
      setBodyFont(fontcategoryObject.ovalue);
    }
  };

  const handleSFontChange = (sfontObject) => {
    setSFont(sfontObject);
    if (sfontObject) { setBodyFont(sfontObject.ovalue); }
  };
  const setBodyFont = (selected_hsciifont_name) => {
	// alert(`currfontcn is ${currfontcn}. document.body.classList is ${document.body.classList}`);
	document.body.classList.value = document.body.classList.value.replaceAll(/__className_\w+\s+antialiased/g,"");
	document.body.classList.value = document.body.classList.value.replaceAll(/antialiased\s+__className_\w+/g,"");
	currfontcn = hsciifontscn[selected_hsciifont_name];
	document.body.classList.add(currfontcn);
	document.body.classList.add("antialiased");
  };
  return (
    <div style={{ width: 400, marginBottom: 20, color: 'black', backgroundColor: 'white' }} >
	  <Select id='fontcategorysel' placeholder="8aiueohcg lxnguAge(bhαsα).select" value={fontcategory} options={data}
        onChange={handlefontcategoryChange}
		getOptionLabel={(x) => x.olabel} getOptionValue={(x) => x.ovalue}
      />
	  <Select id='fontsel' placeholder="8aiueohcg font.select" value={sfont} options={sfontlist} onChange={handleSFontChange}
        getOptionLabel={(x) => x.olabel} getOptionValue={(x) => x.ovalue}
      />
    </div>
  );
};
export default FontPicker;
