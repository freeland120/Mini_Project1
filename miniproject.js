//Axios 이용해서 post 요청하기~

function getPost() {
  axios
    .get("https://jsonplaceholder.typicode.com/posts") //요청 URL
    .then((response) => {
      const Data = response.data;
      if (Data.length > 0) {
        const POST = document.getElementById("POST_CONTENT");
        Data.forEach((postdata) => {
          //Data 뿌리기!
          POST.innerHTML += `<h3><li><b>${postdata.title}</h3></b> - ${postdata.body}</li>`;
        });
      } else {
        alert("Data Not Exist❌");
      }
    })
    .catch((error) => {
      alert("Request Failed, Try Again❗");
    });
}
