"use client";
import React, { useState } from 'react';
import Select from 'react-select';
import data from './data.json';
import { loklfont_2_fontcn } from './loklfont_2_fontcn';

const FontPicker= () => {
  const [script, setScript] = useState(null);
  const [sfont, setSFont] = useState(null);

  const handleScriptChange = (scriptObject) => {
    setScript(scriptObject);
    if (scriptObject) {
      setSFont(scriptObject.sfonts[0]);
      setBodyFont(scriptObject.ovalue);
    }
  };


  const setBodyFont = (sval) => { document.body.className = "";
    const sf = loklfont_2_fontcn(sval); document.body.classList.add(sf); document.body.classList.add("antialiased");
  };
  return (
    <div style={{ width: 400, marginBottom: 20, color: 'black', backgroundColor: 'white' }} >
	  <Select placeholder="lAng(bhαsα).select" value={script} options={data}
        onChange={handleScriptChange}
		getOptionLabel={(x) => x.olabel} getOptionValue={(x) => x.ovalue}
      />
    </div>
  );
};
export default FontPicker;
