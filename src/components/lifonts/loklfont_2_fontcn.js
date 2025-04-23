import {
	inglishenglosoftw8asc, binarywenglosoftw8asc, russianenglosoftw8asc,
	banglaenglosoftw8asc, guzratienglosoftw8asc, kannadaenglosoftw8asc, malayalamenglosoftw8asc, sinhalaenglosoftw8asc, teluguenglosoftw8asc, 
	gurmukhienglosoftw8asc, hindienglosoftw8asc, koreanenglosoftw8asc, oriyaenglosoftw8asc, tamilenglosoftw8asc,
} from "./localfonts";

export const loklfont_2_fontcn = (sval) => {
    switch (sval) {
      case "binarywenglosoftw8asc": return binarywenglosoftw8asc.className;
      case "koreanenglosoftw8asc": return koreanenglosoftw8asc.className;
      case "russianenglosoftw8asc": return russianenglosoftw8asc.className;
      case "inglishenglosoftw8asc": return inglishenglosoftw8asc.className;
      case "hindienglosoftw8asc": return hindienglosoftw8asc.className;
      case "banglaenglosoftw8asc": return banglaenglosoftw8asc.className;
      case "sinhalaenglosoftw8asc": return sinhalaenglosoftw8asc.className;
      case "tamilenglosoftw8asc": return tamilenglosoftw8asc.className;
      case "kannadaenglosoftw8asc": return kannadaenglosoftw8asc.className;
      case "malayalamenglosoftw8asc": return malayalamenglosoftw8asc.className;
      case "teluguenglosoftw8asc": return teluguenglosoftw8asc.className;
      case "oriyaenglosoftw8asc": return oriyaenglosoftw8asc.className;
      case "gurmukhienglosoftw8asc": return gurmukhienglosoftw8asc.className;
      case "guzratienglosoftw8asc": return guzratienglosoftw8asc.className;
      default: return hindienglosoftw8asc.className;
    }
};
