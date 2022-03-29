class ImageUploader {
  async upload(file) {
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "j1rhbc9y");
    const result = await fetch(
      "https://api.cloudinary.com/v1_1/djfx4qnoc/upload",
      {
        method: "POST",
        body: data,
      }
    );
    return await result.json();
  }
}

export default ImageUploader;
