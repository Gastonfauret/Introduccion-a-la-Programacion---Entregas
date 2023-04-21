constructor() {
    if (fs.existsSync("./students.json")) {
      console.log("Archivo existente");

    } else {
      fs.writeFileSync("./students.json", "[]", "utf-8");
    }
    if (fs.existsSync("./teachers.json")) {
      console.log("Archivo existente");
    } else {
      fs.writeFileSync("./teachers.json", "[]", "utf-8")
    }    
  }