const container = document.getElementById("container");

const ul = document.createElement("ul");

const items = [
  {
    name: "Kartik",
    marks: "99",
  },
  {
    name: "Utkarsh",
    marks: "98",
  },
  {
    name: "Hitesh",
    marks: "97",
  },
];

items.forEach((item) => {
  const li = document.createElement("li");
  li.textContent = `${item.name} - ${item.marks}`;

  li.style.backgroundColor = "teal";
  li.style.margin = "5px";
  li.style.padding = "10px";
  li.style.width = "10%";

  ul.appendChild(li);
});

container.appendChild(ul);
