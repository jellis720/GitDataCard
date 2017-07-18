console.log("Data Card")
let content = document.querySelector("#vCard")

function reqListener () {
  let data = JSON.parse(this.responseText);
  let info = `
  <div id="nameBlock"
    <h1>${data.name}</h1>
  </div>

  <div id="content">
    <div class="info">
      <h2>The Basics</h2>
      <li>Name: ${data.name}</li>
      <li>Github URL: <a href="${data.html_url}">${data.html_url}</a></li>
      <li>Email: ${data.email}</li>
      <li>Company: ${data.company}</li>
      <li>Website: <a href="${data.blog}">${data.blog}</a></li>
    </div>

    <div id="bio">
      <h2>The Story</h2>
      <p>${data.bio}</p>
    </div>

    <div id="profilePhoto">
      <img src="${data.avatar_url}"
    </div>
  </div>
  `;

  content.innerHTML = info
}

let req = new XMLHttpRequest();
req.open("GET", "https://api.github.com/users/jellis720");
req.addEventListener("load", reqListener);
req.send();
