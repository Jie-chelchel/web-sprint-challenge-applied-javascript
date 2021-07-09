const Header = (title, date, temp) => {
  //set up const and value
  const header = document.createElement("div");
  header.classList.add("header");
  const dateofDay = document.createElement("span");
  dateofDay.classList.add("date");
  dateofDay.textContent = date;
  const h1 = document.createElement("h1");
  h1.textContent = title;
  const temperature = document.createElement("span");
  temperature.classList.add("temp");
  temperature.textContent = temp;
  //append
  header.appendChild(dateofDay);
  header.appendChild(h1);
  header.appendChild(temperature);
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
  const headerContainer = document.querySelector(selector);
  headerContainer.classList.add(selector);
  headerContainer.appendChild(Header("Daily News", "Mar 20 2010", "75F"));
  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //
};

export { Header, headerAppender };
