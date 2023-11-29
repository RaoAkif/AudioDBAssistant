# AudioDBAssistant

The database Virgin Stores contains three collections: 
- Stores
- Inventory
- Sales

Ask any question about these three tables data, in any language, using your audio, and get that queried data back.

**Tables with Sample data**

**Stores Table**

| _id                       | StoreID | StoreName                 | enabled |
|---------------------------|---------|---------------------------|---------|
| 656215fd95632143ae728f00  | 402     | VIRGIN ABU DHABI MALL     | yes     |
| 656215fd95632143ae728f01  | 404     | VIRGIN MERCATO MALL       | yes     |
| 656215fd95632143ae728f02  | 405     | VIRGIN MALL OF THE EMIRATES | yes     |



**Inventory Table**

| _id                       | TagID | SKU    | ProductName         | Description                              | DepartmentID | Brand | Color      | Size   | Price  | TotalPrice | StoreID | StoreName                   | POSdate                     |
|---------------------------|-------|--------|----------------------|------------------------------------------|--------------|-------|------------|--------|--------|------------|---------|-----------------------------|-----------------------------|
| 656218fa95632143ae728f2d  | 1     | LPT001 | Laptop               | Powerful Laptop with Quad-Core Processor | 1            | Dell  | Silver     | Large  | 799.99 | 799.99     | 402     | VIRGIN ABU DHABI MALL      | 2023-11-25T00:00:00.000Z  |
| 656218fa95632143ae728f2e  | 2     | PHN002 | Smartphone           | High-End Smartphone with Dual Cameras   | 2            | Apple | Space Gray | Medium | 999.99 | 999.99     | 404     | VIRGIN MERCATO MALL        | 2023-11-26T00:00:00.000Z  |
| 656218fa95632143ae728f2f  | 3     | HDP003 | Headphones           | Wireless Noise-Canceling Headphones    | 3            | Sony  | Black      | One Size | 199.99 | 199.99     | 405     | VIRGIN MALL OF THE EMIRATES | 2023-11-27T00:00:00.000Z |



**Sales Table**

| _id                       | SaleID | TagID | SKU    | ProductName      | Quantity | SaleAmount | StoreID | StoreName                   | POSdate                     |
|---------------------------|--------|-------|--------|-------------------|----------|------------|---------|-----------------------------|-----------------------------|
| 65621ccc95632143ae728f6a  | 1      | 1     | LPT001 | Laptop            | 2        | 1599.98     | 402     | VIRGIN ABU DHABI MALL      | 2023-11-25T00:00:00.000Z  |
| 65621ccc95632143ae728f6b  | 2      | 3     | HDP003 | Headphones        | 1        | 199.99     | 405     | VIRGIN MALL OF THE EMIRATES | 2023-11-27T00:00:00.000Z  |
| 65621ccc95632143ae728f6c  | 3      | 6     | CAM006 | Camera            | 1        | 1299.99     | 423     | VIRGIN DUBAI MARINA MALL   | 2023-11-30T00:00:00.000Z  |
