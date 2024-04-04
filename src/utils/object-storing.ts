import fs from "node:fs";
import path from "node:path";

const imageDir = path.join(__dirname, "../../public/images");

const supportedExtensions = [".jpg", ".jpeg", ".png"];

function directoryExist(directory: string) {
  if (!fs.existsSync(directory)) {
    fs.mkdirSync(directory, { recursive: true });
  }
}

export function getImagePath(filename: string) {
  directoryExist(imageDir);
  for (const ext of supportedExtensions) {
    const imagepath = path.join(imageDir, `${filename}${ext}`);

    if (fs.existsSync(imagepath)) {
      return imagepath;
    }
  }
  return null;
}
