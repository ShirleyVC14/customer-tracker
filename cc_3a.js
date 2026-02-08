const customers = [
    {
        name: "Ken Jones",
        email: "kenj@grocerystore.com",
        purchases: [ "Milk" , "Eggs", "Bread" ]

    },
    {
        name: "Rachel Carter",
        email: "rachelc@grocerystore.com",
        purchases: [ "Apple" , "Oranges" ]

    },
    {
        name: "Albert Nicks",
        email: "alerbertnicks@grocerystore.com",
        purchases: [ "Rice" , "Chicken", "Beans" ]
    }
];

customers.push(    //adding new customer
    {
    name: "Lily Kim",
    email: "lilyk@grocerystore.com",
    purchases: [ "Cereal" , "Milk" ]
    }
);
customers.shift();  //removing customer

customers[0].email = "rachelcnewemail@grocerystore.com"
customers[0].purchases.push ("Juice");

customers.forEach(customer => {
  console.log(
    `Name: ${customer.name} | Email: ${customer.email} | Total Purchases: ${customer.purchases.length}`
  );
});







