"use client";
import React, { useState } from 'react';
import Select from 'react-select';
import data from './data_lang_encode.json';
import { loklfont_2_fontcn } from './loklfont_2_fontcn';

// interface ScriptOption { olabel: string; ovalue: string;
//   sfonts: Array<{ olabel: string; ovalue: string }>;
// }

const FontPicker= () => {
  const [script, setScript] = useState(null);
  const [sfont, setSFont] = useState(null);
  const [sfontlist, setSFontList] = useState([]);

  const handleScriptChange = (scriptObject) => {
    setScript(scriptObject);
    if (scriptObject) {
      setSFontList(scriptObject.sfonts);
      setSFont(scriptObject.sfonts[0]);
      setBodyFont(scriptObject.ovalue);
    }
  };

  const handleSFontChange = (sfontObject) => {
    setSFont(sfontObject);
    if (sfontObject) { setBodyFont(sfontObject.ovalue); }
  };
  const setBodyFont = (sval) => { document.body.className = "";
    const sf = loklfont_2_fontcn(sval); document.body.classList.add(sf); document.body.classList.add("antialiased");
  };
  return (
    <div style={{ width: 400, marginBottom: 20, color: 'black', backgroundColor: 'white' }} >
	  <Select id='scriptsel' placeholder="lAng(bhαsα).select" value={script} options={data}
        onChange={handleScriptChange}
		getOptionLabel={(x) => x.olabel} getOptionValue={(x) => x.ovalue}
      />
	  <Select id='fontsel' placeholder="languagefont.select" value={sfont} options={sfontlist} onChange={handleSFontChange}
        // className='hidden' isDisabled 
        getOptionLabel={(x) => x.olabel} getOptionValue={(x) => x.ovalue}
      />
      {/* <Select id='fontsel' className='hidden' isDisabled placeholder="languagefont.select" value={sfont} options={sfontlist}
        onChange={handleSFontChange}
		getOptionLabel={(x) => x.olabel} getOptionValue={(x) => x.ovalue}
      /> */}
    </div>
  );
};
export default FontPicker;
