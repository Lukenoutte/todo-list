const urlApi = "http://localhost:9000";

const getData =  () => {
   
    return  fetch(urlApi).then((res) => res.json()).catch((err) => console.log(err));
  }

const postData =  (newData) => {
    const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ description: `${newData}` }),
      };
      fetch(urlApi, requestOptions).catch((err) =>
        console.log(err)
      );
  }

  const deleteData =  (id) => {
    const requestOptions = {
        method: "DELETE",
      };
  
      fetch(urlApi + "/" + id, requestOptions).catch((err) =>
      console.log(err)
    );
  }


export default {getData, postData, deleteData};