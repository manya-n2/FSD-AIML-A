const image=document.createElement("img");
image.src=""
image.width=250;
image.height=250;
const h4=document.createElement("h4")
h4.innerText="Title: Physics";
const h3=document.createElement("h3");
h3.innerText="Price=₹321/-"
const bt=document.createElement("button");
bt.innerText="Add to Cart"
const child=document.createElement("div");
child.className="card";
child.appendChild(image);
child.appendChild(h4);
child.appendChild(h3);
child.appendChild(bt);