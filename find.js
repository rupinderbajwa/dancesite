db.items.find({rating: 3.5})
db.items.find({rating:{$lt: 4.5}})
db.items.find({price: 15200})
db.items.find({rating:{$gte: 3.5},price:{$gte: 1200}})
db.items.find({rating:{$gte: 2.5}},{rating: 1})
db.items.deleteMany({price:1200})
db.items.find({name: "moto"})
db.items.updateMany({name: "moto"},{$set:{ price: 600,rating: 1}})
db.items.deleteOne({name: "moto"})
db.items.updateMany({name: "samsung"},{$set :{qty:2 }})