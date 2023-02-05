function ApiAjax() {
  const url = "https://restcountries.com/v3.1/all";

  function getSomething() {
    let startingLetter = document.querySelector("input").value;

    if (isNaN(startingLetter) === true) {
      const xhr = new XMLHttpRequest();
      // initialising the request
      xhr.open("GET", url, true);
      // how to handle the response
      xhr.onload = function () {
        if (xhr.status === 200) {
          // console.log("request status 200");
          let countries = JSON.parse(this.response);
          const parentDiv = document.querySelector("h2");
          parentDiv.innerHTML = "";

          countries.forEach((capital) => {
            if (
              capital.name.common.charAt(0) === startingLetter.toUpperCase()
            ) {
              const newH6 = document.createElement("h6");
              parentDiv.appendChild(newH6);
              newH6.innerHTML = capital.name.common;
            }
          });
        }
      };
      // sending the request
      xhr.send();
    } else console.log("is number");
  }

  return (
    <div>
      <h1>Api Ajax</h1>
      <input
        className="api-input"
        type="text"
        placeholder="starting letter"
        maxLength="1"
      />
      <button className="api-input" type="submit" onClick={getSomething}>
        Find
      </button>
      <h2>Countries starting... </h2>
    </div>
  );
}

export default ApiAjax;
