insert into Inventory
    (imgUrl, productName, price)
values($1, $2, $3);

select *
from Inventory;