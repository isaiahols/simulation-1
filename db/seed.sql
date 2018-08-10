drop table if exists Inventory;

create table Inventory
(
    Id serial PRIMARY KEY,
    imgUrl text,
    productName varchar(80),
    price FLOAT(9)
);

insert into Inventory
    (imgUrl, productName, price)
values
    ('https://picsum.photos/300/200/?random', 'someThing', 23.43),
    ('https://picsum.photos/300/200/?random', 'someThing', 2345),
    ('https://picsum.photos/300/200/?random', 'someThing', 2.20),
    ('https://picsum.photos/300/200/?random', 'someThing', 2343),
    ('https://picsum.photos/300/200/?random', 'someThing', 432),
    ('https://picsum.photos/300/200/?random', 'someThing', 93),
    ('https://picsum.photos/300/200/?random', 'someThing', 82),
    ('https://picsum.photos/300/200/?random', 'someThing', 102),
    ('https://picsum.photos/300/200/?random', 'someThing', 92.19),
    ('https://picsum.photos/300/200/?random', 'someThing', 23.43),
    ('https://picsum.photos/300/200/?random', 'someThing', 23.43),
    ('https://picsum.photos/300/200/?random', 'someThing', 23.43);

    select * from Inventory;