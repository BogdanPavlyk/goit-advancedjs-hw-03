const l=s=>s.reduce((i,a)=>i+`
            <li class="gallery-card">
              <a class="gallery-img-orig" href="${a.largeImageURL}">
                <img class="gallery-img" src="${a.webformatURL}" alt="${a.tags}" />
                <div class="img-data">
                 <div class="img-data-column img-likes">
                  <p class="img-title">Likes</p>
                  <p class="img-value">${a.likes}</p>
                 </div>
                 <div class="img-data-column img-views">
                  <p class="img-title">Views</p>
                  <p class="img-value">${a.views}</p>
                 </div>
                 <div class="img-data-column img-comments">
                  <p class="img-title">Comments</p>
                  <p class="img-value">${a.comments}</p>
                 </div>
                  <div class="img-data-column img-downloads">
                  <p class="img-title">Downloads</p>
                  <p class="img-value">${a.downloads}</p>
                 </div>
                </div>
              </a>
            </li>
           `,"");export{l as c};
//# sourceMappingURL=render-functions-Cm8S9jAV.js.map
