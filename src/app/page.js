"use client";
import Image from "next/image";
import {  useState } from 'react';
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
  const wzktr = new wzk("","both","all");
  const [iteksta, set_iteksta] = useState("");
  const handle_ita_change = (event) => { set_iteksta(event.target.value); };
  function on_kh2uK() {
	  let all_output  = wzk.kh2hindiK(iteksta);
	  set_iteksta(all_output);
  }
  function on_xvjqK2u() {
	  let all_output  = wzk.xvjqK2hindi(iteksta);
	  set_iteksta(all_output);
  }
  function on_eu2l() {  //alert("on_eu2l");
    wzktr.istr = iteksta;
    wzktr.duztr();
    let all_output  = "";
    for (const key in wzktr.odikt) {
      all_output += `modern_${key}: ` + wzktr.odikt[key] + " \n" ;
    }
    set_iteksta(all_output);
}
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-4 pb-20 gap-16 sm:p-20 ]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
      <div className="flex gap-4 items-center flex-col sm:flex-row"><Hsciifontpicker/></div>
        <div className="flex gap-2 items-center flex-col sm:flex-row">
			<Button className="bg-green-500 text-white" onPress={on_eu2l}>ztr</Button>
			<Button className="border-black border-2" onPress={on_xvjqK2u}>xvjqK2u</Button>
			<Button className="border-black border-2" onPress={on_kh2uK}>kh2uK</Button>
			<a className="border-black border-2" href="https://github.com/zawa8/font" target="_blank" rel="noopener noreferrer" > free hscii fonts </a>
        </div>
        <div className="flex min-w-full gap-2 items-center flex-col sm:flex-row">
          <Textarea id="ita"  rows={12} className="w-full border-black" value={iteksta}  onChange={handle_ita_change} placeholder={iplaceholer} />
        </div>
      </main>
    </div>
  );
}
