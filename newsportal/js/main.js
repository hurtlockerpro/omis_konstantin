
$(document).ready(function(){

    // 
    let newsUrlTemplate = "http://newsapi.org/v2/everything?q={keyword}&from={date}&sortBy=publishedAt&apiKey=4a5de1e54b304bf2909af12bf979c242";
    var newsUrl = '';
    
    let q = $('#newsFilter input[name=q]').val();
    let date = $('#newsFilter input[name=date]').val();

    $('#btnFilter').on('click', function(){

        q = $('#newsFilter input[name=q]').val();
        date = $('#newsFilter input[name=date]').val();

        // 1. change keyqord
        if (q.length >= 1) {
            newsUrl = newsUrlTemplate.replace('{keyword}', q);
        } else {
            newsUrl = newsUrlTemplate.replace('{keyword}', 'bitcoin');
        }  

        // 2. change category
        if (date.length >= 1) {
            newsUrl = newsUrl.replace('{date}', date);
        } 

        loadNews(newsUrl);

        //console.log("q = ", q, ", category = ", category);
    });

    // 1. change keyqord
    /*
    if (q.length >= 1) {
        newsUrl = newsUrlTemplate.replace('{keyword}', q);
    } else {
        newsUrl = newsUrlTemplate.replace('{keyword}', 'bitcoin');
    }  

    // 2. change category
    if (date.length >= 1) {
        newsUrl = newsUrl.replace('{date}', date);
    } 

    loadNews(newsUrl);
    */
});


function loadNews(newsUrl){

    $.ajax({
        url: newsUrl,
        success: function( result ) {

            console.log(result);

            let card = new NewsCards();
            let cards = '';

            for (let index = 0; index < result.articles.length; index++) {
            
                let news = result.articles[index];

                card.setTitle(news.title);
                card.setBody(news.description);
                card.setImage(news.urlToImage);
                card.setBtn("Refresh");

                cards += card.showCard();
            }

            $("#newsContent").html( cards );
        }, 
        error: function(err, status, msg){
            console.log('err: ', err, ', status: ', status, ', msg: ', msg );

            console.log('API server: ' + err.responseJSON.message);
        }
    });

}


class NewsCards {
    
    cardTitle = '';
    cardBody = '';
    cardImage = '';
    cardInfo = '';

    btnRefresh = '';

    setTitle(txt){
        if (txt.length >= 1) this.cardTitle = txt;
    }

    setBody(txt){
        if (txt.length >= 1) this.cardBody = txt;
    }

    setImage(url){
        if (url != null) this.cardImage = `<img src="${url}" alt="${this.cardTitle}" height="180">`;
    }

    setInfo(txt){
        if (txt.length >= 1) this.cardInfo = txt;
    }

    setBtn(btnTitle){
        this.btnRefresh = `<button type="button" class="btn btn-sm btn-outline-secondary">${btnTitle}</button>`
    }

    showCard(){

        let template = `<div class="col-md-4">
                <div class="card mb-4 shadow-sm">
                ${this.cardImage}
                <div class="card-body">
                    <h5 class="card-title">${this.cardTitle}</h5>
                    <p class="card-text">${this.cardBody}</p>
                    <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                        ${this.btnRefresh}
                    </div>
                    <small class="text-muted">${this.cardInfo}</small>
                    </div>
                </div>
                </div>
                </div>`;

        return template;
    }


}


