window.onload = function() {

  const oldHeader = document.querySelector("h1");
  oldHeader.remove();
  const firstHeader = document.createElement("h1");
  firstHeader.append("Webpage Recreation Page");
  document.body.appendChild(firstHeader);

  const firstParagraph = document.createElement("p");
  firstParagraph.append("The HTML of this webpage was created with JavaScript.");
  document.body.appendChild(firstParagraph);

  const imgRec = document.createElement("img");
  imgRec.src = "https://cdn.download.ams.birds.cornell.edu/api/v1/asset/202984001/900";
  imgRec.setAttribute("alt", "This is an image of a Multicolored Tanager bird from birdsoftheworld.org");
  imgRec.style.width = "50%";
  document.body.appendChild(imgRec);

  const secondHeader = document.createElement("h1");
  secondHeader.append("Facts about the Multicolored Tanager");
  document.body.appendChild(secondHeader);

  const unorderedList = document.createElement("ul");
  unorderedList.setAttribute("id", "facts");
  document.body.appendChild(unorderedList);

  const liOne = document.createElement("li");
  const liTwo = document.createElement("li");
  liOne.append("It is endemic to the mountains of Colombia.");
  liTwo.append("It usually searches for insects on the underside of leaves of outer limbs while clinging to leaves with its feet.");
  document.body.appendChild(liOne);
  document.body.appendChild(liTwo);

  const thirdHeader = document.createElement("h2");
  thirdHeader.append("Source");
  document.body.appendChild(thirdHeader);

  const link = document.createElement("a");
  const linkText = document.createTextNode("Wikipedia");
  link.appendChild(linkText);
  link.title = "Wikipedia";
  link.href = "https://en.wikipedia.org/wiki/Multicoloured_tanager";
  document.body.appendChild(link);
}
