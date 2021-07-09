import axios from "axios";

const Tabs = (topics) => {
  //set up const and values and classes
  const AllTabs = document.createElement("div");
  AllTabs.classList.add("topics");

  //loop through the array to create tabs and append each of them into the div allTabs
  topics.forEach((cur) => {
    let curTab = document.createElement("div");
    curTab.classList.add("tab");
    curTab.textContent = cur;
    AllTabs.appendChild(curTab);
  });
  return AllTabs;
};
// document.body.appendChild(Tabs(["javascript", "bootstrap", "technology"]));

// TASK 3
// ---------------------
// Implement this function which takes an array of strings ("topics") as its only argument.
// As an example, if the topics passed are ['javascript', 'bootstrap', 'technology']
// then the function returns the markup below.
// The tags used, the hierarchy of elements and their attributes must match the provided markup!
// The text inside elements will be set using their `textContent` property (NOT `innerText`).
//
// <div class="topics">
//   <div class="tab">javascript</div>
//   <div class="tab">bootstrap</div>
//   <div class="tab">technology</div>
// </div>
//

const tabsAppender = (selector) => {
  //set up a container for all tabs
  const tabsContainer = document.querySelector(selector);
  tabsContainer.classList.add(selector);
  //fetch data with axios
  axios
    .get("http://localhost:5000/api/topics")
    .then((res) => {
      //save data to an array
      const arr = res.data.topics;
      //pass array to Tabs and also append all the tabs into the container
      tabsContainer.appendChild(Tabs(arr));
    })
    .catch((err) =>
      console.log(`Oh no, something went wrong 👹: ${err.message}`)
    );

  // TASK 4
  // ---------------------
  // Implement this function which takes a css selector as its only argument.
  // It should obtain topics from this endpoint: `http://localhost:5000/api/topics` (test it in Postman/HTTPie!).
  // Find the array of topics inside the response, and create the tabs using the Tabs component.
  // Append the tabs to the element in the DOM that matches the selector passed to the function.
  //
};

export { Tabs, tabsAppender };
