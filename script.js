var url = 'http://newsapi.org/v2/top-headlines?country=in&apiKey=cf251cc4033e4ac9b7bc3e0e29c4551e';
var newsContainer = document.getElementById("news-container");
const newsContent = async ()=>{
    const res = await fetch(url);
    const news = await res.json();
    displayNews(news.articles);
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
        for(var i=0;i<articles.length;i++)
        {
            if(i%2 == 0)
            {
                html[i] =  `  <div class="row">
                <div class="col s12 m6">
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
            }
            else
            {
                `  <div class="row">
                <div class="col s12 offset-s6">
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
            }
        }
    }
    newsContainer.innerHTML = html.join('');
}
newsContent();