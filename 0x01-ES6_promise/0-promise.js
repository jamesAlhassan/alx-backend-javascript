export function getResponseFromAPI() {
  const promise = new Promise((resolve, reject) => {
    if (resolve) {
      console.log("Successful");
    } else {
      reject(Error("Unsuccessful"));
    }
  });

  return promise;
}
