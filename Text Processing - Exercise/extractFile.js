function extractingFile(directoryPath) {
    directoryPath = directoryPath.split('\\');
    const file = directoryPath[directoryPath.length - 1];
    const name = file.substring(0, file.lastIndexOf('.'));
    const extension = file.substring(file.lastIndexOf('.') + 1);
    console.log('File name:', name);
    console.log('File extension:', extension);
}
extractingFile('C:\\Internal\\training-internal\\Template.pptx')