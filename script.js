var url = 'http://newsapi.org/v2/top-headlines?country=in&apiKey=cf251cc4033e4ac9b7bc3e0e29c4551e';
var newsContainer = document.getElementById("news-container");
var search        = document.getElementById('search');

const newsContent = async ()=>{
  const res = await fetch(url);
  const news = await res.json();
  displayNews(news.articles);
}

const filterNewsContent = async (searchText)=>{
    const res = await fetch(url);
    const news = await res.json();
    // Get Matches to current text input
    let matches = news.articles.filter(filterNews=>{
      if(filterNews.description && filterNews.author)
      {
        return filterNews.title.toLowerCase().includes(searchText.toLowerCase()) || filterNews.description.toLowerCase().includes(searchText.toLowerCase()) || filterNews.author.toLowerCase().includes(searchText.toLowerCase());
      }
      else if(filterNews.description)
      {
        return filterNews.title.toLowerCase().includes(searchText.toLowerCase()) || filterNews.description.toLowerCase().includes(searchText.toLowerCase());
      }
    });
    if(searchText.length == 0)
    {
      matches = [];
      newsContent();
    }
    outputHtml(matches);
}
const displayNews = function(articles)
{
    const html = [];
    for(var i=0;i<articles.length;i++)
    {
        var image = articles[i].urlToImage;
        var title = articles[i].title;
        var description = articles[i].description;
        var date = articles[i].publishedAt;
        var author = articles[i].author;
        html.push(
          `  <div class="row">
          <div class="col s12">
              <div class="container">
                  <div class="card">
                      <div class="card-image waves-effect waves-block waves-light">
                        <img class="activator" src="${image}">
                      </div>
                      <div class="card-content">
                        <span class="card-title activator grey-text text-darken-4">${title}<i class="material-icons right">more_vert</i></span>
                        <p>Author: ${author}</p>
                        <p>${date}</p>
                      </div>
                      <div class="card-reveal">
                        <span class="card-title grey-text text-darken-4">${title}<i class="material-icons right">close</i></span>
                        <p>${description}</p>
                      </div>
                    </div>
              </div>
          </div>
      </div>`
        )
    }
    newsContainer.innerHTML = html.join('');
}
const outputHtml = function(matches){
  if(matches.length>0)
  {
    const html = [];
    for(var i=0;i<matches.length;i++)
    {
        var image = matches[i].urlToImage;
        var title = matches[i].title;
        var description = matches[i].description;
        var date = matches[i].publishedAt;
        var author = matches[i].author;
      html.push(
        `  <div class="row">
        <div class="col s12">
            <div class="container">
                <div class="card">
                    <div class="card-image waves-effect waves-block waves-light">
                      <img class="activator" src="${image}">
                    </div>
                    <div class="card-content">
                      <span class="card-title activator grey-text text-darken-4">${title}<i class="material-icons right">more_vert</i></span>
                      <p>Author: ${author}</p>
                      <p>${date}</p>
                    </div>
                    <div class="card-reveal">
                      <span class="card-title grey-text text-darken-4">${title}<i class="material-icons right">close</i></span>
                      <p>${description}</p>
                    </div>
                  </div>
            </div>
        </div>
    </div>`
      )
    }
    newsContainer.innerHTML = html.join('');
  }
}
newsContent();
search.addEventListener('input',()=>{filterNewsContent(search.value)});