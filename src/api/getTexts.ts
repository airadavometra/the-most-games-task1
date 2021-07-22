import { TextLine } from "../types/textLine";

//calls server to get texts by ids
const getTexts = async (ids: number[]) => {
  const result: string[] = [];
  //we need to call api for each id
  for (const id of ids) {
    const response = await fetch(
      `http://tmgwebtest.azurewebsites.net/api/textstrings/${id}`,
      {
        headers: {
          "TMG-Api-Key": "0J/RgNC40LLQtdGC0LjQutC4IQ==",
        },
      }
    );
    //if response is ok, we can parse its body
    if (response.ok) {
      const { text } = await response.json();
      result.push(text);
    } else {
      throw new Error(`HTTP-Error: ${response.status}`);
    }
  }
  return result;
};
//just a stupid mock for debugging
const getTextsMock = (ids: number[]) => {
  return [
    "Where is he living,—clipp'd in with the sea that chides the banks of England, Scotland, Wales,—which calls me pupil, or hath read to me?",
    "Бессилен рёв зверя перед этими воплями природы, ничтожен и голос человека, и сам человек так мал, слаб, так незаметно исчезает в мелких подробностях широкой картины! От этого, может быть, так и тяжело ему смотреть на море.",
    "Este Ginés de Pasamonte, a quien don Quijote llamaba Ginesillo de Parapilla, fue el que hurtó a Sancho Panza el rucio; que, por no haberse puesto el cómo ni el cuándo en la primera parte, por culpa de los impresores, ha dado en qué entender a muchos, que atribuían a poca memoria del autor la falta de emprenta.",
    "Ludovico aveva già toccata in un braccio una pugnalata d’un servitore; e il nemico gli cadeva addosso per finirlo, quando Cristoforo vedendo il suo padrone nell’estremo pericolo s’avventò col pugnale al signore, il quale rivolta tutta la sua ira contra di lui lo passò colla spada.",
  ];
};
//method to count vowels in the text
const countVowels = (text: string) => {
  var matchResult = text.match(
    /[aeiouAEIOUаеёиоуыэюяАЕЁИОУЫЭЮЯÁáÂâÀàÆæÅåĀāĂăĄąÄäÉéÊêÈèËëĒēĘęÍíĪīÎîÏïÓóÖöŐőÔôØøŒœÚúÜüŰűŪūÛûÙùŮů]/gi
  );
  return matchResult === null ? 0 : matchResult.length;
};
//method to count words in the text
const countWords = (text: string) => {
  var matchResult = text.match(/[\s|,|.|?|!]+/g);
  return matchResult === null ? 0 : matchResult.length;
};

export const getTextsWithData = async (ids: number[]) => {
  const result: TextLine[] = (await getTexts(ids)).map((text) => ({
    text,
    wordsAmount: countWords(text),
    vowelsAmount: countVowels(text),
  }));

  //API does not work for localhost because of CORS, this is the mock i used for debugging

  // const result: TextLine[] = getTextsMock(ids).map((text) => ({
  //   text,
  //   wordsAmount: countWords(text),
  //   vowelsAmount: countVowels(text),
  // }));
  return result;
};
