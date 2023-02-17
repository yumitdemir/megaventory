https://yumitdemir.github.io/megaventory/

This code fetches data from a JSON file, which contains a list of purchase orders. It then uses the retrieved data to dynamically create an unordered list of purchase orders and displays it on the web page. When a user clicks on a particular purchase order from the list, an event listener calls the showMoreInfo function, which displays detailed information about the selected purchase order. In this showMoreInfo function we call one more function to creat a table. The table is dynamically created to display detailed information about the selected purchase order. The table is populated with data from the selected purchase order using the GetDifferentData function, which is called for each cell in the table. 
