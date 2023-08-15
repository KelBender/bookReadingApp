import * as DocumentPicker from "expo-document-picker";

const pickDocument = async () => {

  try {

    const result = await DocumentPicker.getDocumentAsync({
      type: "application/pdf",
    });

    //let type = result.assets[0].mimeType;
    //let uri = result.assets[0].uri;
    //let name = result.assets[0].name;

    //console.log(type, uri, name);

    return result;

  } catch (error) {
    console.error("Error picking document:", error);
  }
};

export default pickDocument;
