import axios from "axios";

const Card = (article) => {
  //set up const
  const card = document.createElement("div");
  const headline = document.createElement("div");
  const author = document.createElement("div");
  const imgContainer = document.createElement("div");
  const img = document.createElement("img");
  const authorName = document.createElement("span");

  //add class and value
  card.classList.add("card");
  headline.classList.add("headline");
  headline.textContent = article.headline;
  author.classList.add("author");
  imgContainer.classList.add("img-container");
  img.src = article.authorPhoto;
  authorName.textContent = `By ${article.authorName}`;

  //append
  imgContainer.appendChild(img);
  author.appendChild(imgContainer);
  author.appendChild(authorName);
  card.appendChild(headline);
  card.appendChild(author);

  //add event
  card.addEventListener("click", () => console.log(article.headline));

  return card;
};
// TASK 5
// ---------------------
// Implement this function, which should return the markup you see below.
// It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
// The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
// The text inside elements will be set using their `textContent` property (NOT `innerText`).
// Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
//
// <div class="card">
//   <div class="headline">{ headline }</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={ authorPhoto }>
//     </div>
//     <span>By { authorName }</span>
//   </div>
// </div>
//

const cardAppender = (selector) => {
  //create a container for all the cards
  const cardsContainer = document.querySelector(selector);
  cardsContainer.classList.add(selector);

  //fetch data
  axios
    .get("http://localhost:5000/api/articles")
    .then((res) => {
      //save only data that we are interested in, notice that it is an object
      const allData = res.data.articles;
      //save all the keys from allData, and use it to loop though the allData object
      const arrOfTabs = Object.keys(allData);
      arrOfTabs.forEach((curTab) => {
        //for each item in the allData object, it also contains certain arrays,
        //so we need to loop each item again, to get all the objects and pass them into Card() to created cards.
        //and then append all cards to the card container.
        const eachTabObj = allData[`${curTab}`];
        eachTabObj.forEach((obj) => {
          cardsContainer.appendChild(Card(obj));
        });
      });
    })
    .catch((err) =>
      console.log(`Oh no, something went wrong 👹: ${err.message}`)
    );
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `http://localhost:5000/api/articles` (test it in Postman/HTTPie!).
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //
};

export { Card, cardAppender };
