import Resizer from "react-image-file-resizer";

export const resizeBase64 = (input, outputCB) => {
    Resizer.imageFileResizer(
        input, // file
        600, // maxWidth
        600, // maxHeight
        'JPEG', // compressFormat
        100, // quality
        0, // rotation
        (uri) => {
            outputCB(uri);
        }, // callback
        'base64', // outputType
        300, // minWidth
        300 // minHeight
    );
}