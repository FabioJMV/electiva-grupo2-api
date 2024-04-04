import fs from "node:fs";
import path from "node:path";

const imageDir = path.join(__dirname, "../../public/images");

const supportedExtensions = [".jpg", ".jpeg", ".png"];

export function getImagePath(filename: string) {
  for (const ext of supportedExtensions) {
    const imagepath = path.join(imageDir, `${filename}${ext}`);

    if (fs.existsSync(imagepath)) {
      return imagepath;
    }
  }
  return null;
}
