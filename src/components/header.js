const Header = (title, date, temp) => {
  //set up const
  const header = document.createElement("div");
  const dateofDay = document.createElement("span");
  const h1 = document.createElement("h1");
  const temperature = document.createElement("span");

  //add class and value

  header.classList.add("header");

  dateofDay.classList.add("date");
  dateofDay.textContent = date;

  h1.textContent = title;

  temperature.classList.add("temp");
  temperature.textContent = temp;

  //append
  header.appendChild(dateofDay);
  header.appendChild(h1);
  header.appendChild(temperature);
  //return
  return header;
  // TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>
  //
};

const headerAppender = (selector) => {
  //set up header container
  const headerContainer = document.querySelector(selector);
  headerContainer.classList.add(selector);
  //call Header function to create header and append to the container
  headerContainer.appendChild(Header("Daily News", "06/28/2021", "75F"));
  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //
};

export { Header, headerAppender };
