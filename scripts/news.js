"use strict";
// lấy số trang vd 1 page = 1
const page = 2;
const pg = document.querySelector(".pagination");
// const user = [];
// const currentPage = 1;
// const perPage = 5;
// const perUser = [];
// const totalPage = user.length / 2;
getDataFromPublicAPI();
async function getDataFromPublicAPI() {
  const responseAPI = await fetch(
    "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=d0e4999fce3d41fbba13d367ae4f8f0d"
  );

  console.log("responseAPI :=>", responseAPI);
  const { articles } = await responseAPI.json();
  const newsContainer = document.getElementById("news-container");

  const size = 5;
  const start = (page - 1) * size;
  const end = page * size;

  const htmls = articles.slice(start, end).map(function (article) {
    return `<div class="card flex-row flex-wrap">
    <div class="card mb-3" style="">
        <div class="row no-gutters">
            <div class="col-md-4">
                <img src="${article.urlToImage}"
                    class="card-img"
                    alt="${article.content}">
            </div>
            <div class="col-md-8">
                <div class="card-body">
                    <h5 class="card-title">${article.title}</h5>
                    <p class="card-text">${article.description}</p>
                    <a href="${article.url}"
                        class="btn btn-primary">View</a>
                </div>
            </div>
        </div>
    </div>
</div>
    `;
  });
  newsContainer.innerHTML = htmls.join("");
}
