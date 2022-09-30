use roopkart
db.items.insertOne({name: "samsung",price: 1200,rating: 3.5, qty: 233,sold: 20})
db.items.insertMany([{name: "moto",price: 22000,rating: 4.5,qty: 150,sold: 40},{name: "samsung",price: 1200,rating: 3.5, qty: 233,sold: 20},{name: "redmi",price: 15200,rating: 2.5, qty: 533,sold: 50}])