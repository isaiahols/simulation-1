update Inventory
set imgurl = $1, productname= $2, price = $3
where id = $4;

select *
from Inventory;