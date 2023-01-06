 /**
* Extracts text of each element in WebElement list
* @param {*} listOfElements 
* @returns text of WebElements
*/
export async function getTextFromList(listOfElements) {
 try {
   let list = []
   for (var element of listOfElements) {
     list.push(await element.getText())

   }
   var list2 = list.filter(x => x.length > 0)

   return list2
 } catch (error) {
   throw new Error("Exception occured. Error Message = " + error.message)
 }
}
