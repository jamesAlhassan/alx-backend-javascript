export default function handleResponseFromAPI(promise) {
  const customPromise = new Promise((resolve, reject) => {
    if (promise) {
      resolve({
        status: 200,
        body: success,
      });
    } else {
      reject("");
    }
    customPromise
      .then((res) => {
        if (res.status === 200) {
          console.log("Got a response from the API");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  });
}
