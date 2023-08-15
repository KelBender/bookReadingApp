import pickDocument from "../components/DocumentPicker";
import { useBookListContext } from "../contexts/BookListContext";

console.log("start addPDF");

const addPdf = async () => {
  console.log("starting function");

  //console.log(1, bookList);

  try {
    console.log("starting pickDocument");

    const result = await pickDocument();

    console.log("pickDocument done");
    console.log("\nFile-Stats: \n", result);

    let type = result.assets[0].mimeType;
    let uri = result.assets[0].uri;
    let name = result.assets[0].name;

    console.log(type, uri, name);

    //console.log(bookList);

    //() => addBook("Kelvin", 258);

    //console.log(bookList);
  } catch (error) {
    console.error("Error adding PDF:", error);
  }

  console.log("end");
};

export default addPdf;
