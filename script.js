fetch("3291ead6-82a2-43fa-ba6e-58328b4e02a1.json")
  .then((response) => response.json())
  .then((data) => {
    console.log(data.mvPurchaseOrders);
    DisplayList(data);
  })
  .catch((error) => {
    console.error("Error fetching data: ", error);
  });

function DisplayList(data) {
  data = data.mvPurchaseOrders.reverse();
  const linkList = document.createElement("ul");
  linkList.id = "link-list";
  for (let i = 0; i < data.length; i++) {
    const listItem = document.createElement("li");
    const link = document.createElement("a");
    link.href = "www.google.com";
    link.textContent = `${data[i].PurchaseOrderTypeAbbreviation} – ${data[i].PurchaseOrderNo}`;
    listItem.appendChild(link);
    linkList.appendChild(listItem);
  }
  document.body.appendChild(linkList);
}
