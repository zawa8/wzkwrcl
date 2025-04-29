"use client";
import Image from "next/image";
import { SetStateAction, useState } from 'react';
import {Textarea} from "@heroui/input";
import {Button} from "@heroui/button";
import wzk from "wzk";
import { Hsciifontpicker } from "@/components/hscii/hsciifontpicker";
export default function Home() {
	const sampletkst = `test: select language binary/inglish4/... n see changes vere(here).
  x.com=xmericα=Americα=Aks.com
  zawa8.vercel.App is now muwed to ztr8.Vercel.app(new)
  whitehome=wvitevouse cαr=cAb=cxb
  ziro wn two three four fiwe siks sewen
  0123 4567 89LY VWPF . 4finger_mxths . 8+8=10=wnti=4*4
  eight nine ten twelwe dblu purn fiwn wnti`;
  const iplaceholer = `input: replace/paste here.ԃis is trαnsliterator for phonetical languages.
steps to use : 1. pls replace ԃis tekst to indiα/nepαl/sinhl/bαnglα.
1.1 to copy unicode google search : wiki indiα in indian languages
2. pls press eu2i btn.
3. result : tekst areα down.`;	
  const [iteksta, set_iteksta] = useState("");
  const handle_ita_change = (event) => { set_iteksta(event.target.value); };
  function on_eu2l() {  //alert("on_eu2l");
    const wzktr = new wzk();
    let ioft= { i: iteksta, f: "both", t: "all",
		o: {
		  inglish: "", korean: "", russian: "", hindi: "", bangla: "", gurmukhi: "", guzrati: "",
		  oriya: "", tamil: "", kannada: "", telugu: "", malayalam:"", sinhala:"",
		},
    };
    wzktr.ioft_tr(ioft);
    //const keys = Object.keys(ioft.o);
    let all_output  = "";
    Object.keys(ioft.o).forEach(key => {
      all_output += `modern_${key}: ` + ioft.o[key] + " \n" ;
    });
    set_iteksta(all_output);
}
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
      <div className="flex gap-4 items-center flex-col sm:flex-row">
          <Hsciifontpicker/>
          <a
            className="rounded-full border border-solid border-black dark:border-white transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
            href="https://github.com/zawa8/font"
            target="_blank"
            rel="noopener noreferrer"
          >
            free hscii fonts
          </a>
        </div>
        <div className="flex gap-2 items-center flex-col sm:flex-row">
          <Button color="default" variant="solid" onPress={on_eu2l}>ztr</Button>
        </div>
        <div className="flex min-w-full gap-2 items-center flex-col sm:flex-row">
          <Textarea id="ita"  rows={12} className="min-w-full" value={iteksta}  onChange={handle_ita_change} placeholder={iplaceholer} />
        </div>
      </main>
    </div>
  );
}
