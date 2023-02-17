fetch("3291ead6-82a2-43fa-ba6e-58328b4e02a1.json")
  .then((response) => response.json())
  .then((data) => {
    DisplayList(data);
  })
  .catch((error) => {
    console.error("Error fetching data: ", error);
  });

const DisplayList = (data) => {
  data = data.mvPurchaseOrders;
  const linkList = document.createElement("ul");
  linkList.id = "link-list";

  for (let i = 0; i < data.length; i++) {
    const listItem = document.createElement("li");
    listItem.className = "list-item";

    const link = document.createElement("a");
    listItem.setAttribute("listIndex", `${i}`);
    link.setAttribute("listIndex", `${i}`);
    link.textContent = `${data[i].PurchaseOrderTypeAbbreviation} – ${data[i].PurchaseOrderNo}`;
    listItem.addEventListener("click", () => {
      showMoreInfo(data);
    });

    listItem.appendChild(link);
    linkList.appendChild(listItem);
  }
  document.body.appendChild(linkList);
};

const showMoreInfo = (data) => {
  const oldContainer = document.getElementById("information-container");
  if (oldContainer != null) {
    const parent = oldContainer.parentNode;
    parent.removeChild(oldContainer);
  }

  data = data[event.target.getAttribute("listIndex")];
  const container = document.createElement("div");
  container.id = "information-container";

  var purchaseOrderAddress = document.createElement("p");
  purchaseOrderAddress.textContent = `Purchase Order Address: ${data.PurchaseOrderAddress} `;
  container.appendChild(purchaseOrderAddress);

  var purchaseOrderContactPerson = document.createElement("p");
  purchaseOrderContactPerson.textContent = `Purchase Order Contact Person:  ${data.PurchaseOrderContactPerson}`;
  container.appendChild(purchaseOrderContactPerson);

  var purchaseOrderStatus = document.createElement("p");
  purchaseOrderStatus.textContent = `Purchase Order Status:  ${data.PurchaseOrderStatus}`;
  container.appendChild(purchaseOrderStatus);

  const table = document.createElement("table");
  table.id = "purchase-details-table";
  const rows = data.PurchaseOrderDetails.length;
  const cols = 3;

  for (let i = 0; i < rows; i++) {
    const row = document.createElement("tr");

    for (let j = 0; j < cols; j++) {
      const cell = document.createElement("td");
      const cellText = document.createTextNode(GetDifferentData(j, i));
      cell.appendChild(cellText);
      row.appendChild(cell);
    }

    table.appendChild(row);
  }
  function GetDifferentData(j, i) {
    if (j == 0) {
      return `${data.PurchaseOrderDetails[i].PurchaseOrderRowProductSKU}`;
    } else if (j == 1) {
      return data.PurchaseOrderDetails[i].PurchaseOrderRowQuantity;
    } else if (j == 2) {
      return data.PurchaseOrderDetails[i]
        .PurchaseOrderRowUnitPriceWithoutTaxOrDiscount;
    } else if (j == 3) {
      return data.PurchaseOrderDetails[i].PurchaseOrderRowTotalAmount;
    }
  }

  container.appendChild(table);
  document.body.appendChild(container);
};
