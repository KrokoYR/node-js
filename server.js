import http from "http";
import fs from "fs";

const starter = "|--";
const margin = "  ";

const getMargin = (count) => {
  let result = "";
  let isFirst = true;
  while (count > 0) {
    if (isFirst) {
      result += "|";
      isFirst = false;
    }
    if (count === 1) {
      result += starter;
      count--;
      continue;
    }
    result += margin;
    count--;
  }
  return result;
};

const assignDepthArr = (arr, depth = 1, index = 0) => {
  if (index < arr.length) {
    assignDepthObj(arr[index], depth + 1);
    return assignDepthArr(arr, depth, index + 1);
  }
};

const assignDepthObj = (obj, depth = 0) => {
  obj["depth"] = depth;
  const toConsole = getMargin(depth) + obj.name;
  console.log(toConsole);
  if (Array.isArray(obj.items)) {
    assignDepthArr(obj.items, depth + 1);
  }

  return;
};

fs.readFile("./homework.json", "utf-8", (err, data) => {
  if (err) {
    throw new Error(err);
  }

  const parsedData = JSON.parse(data);
  assignDepthObj(parsedData);

  const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    res.end(data);
  });
  server.listen(8001, "0.0.0.0", () => {
    console.log("Server running at http://0.0.0.0:8001");
  });
});
