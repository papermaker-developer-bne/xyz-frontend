## How to run the project

1. Open the Project_Coffee.sln inside Project_Coffee folder
2. Start the project through IIS Express
3. When the browser opens, You can copy the address from below options to check the results:
	- `localhost:54716/api/Drink/List`
        - Get drink data from local drink.json file
	- `localhost:54716/api/Order/List`
        - Get orders data from local orders.json file
    - `localhost:54716/api/Order/All`  
        - Get order detials with total cost and drink details from all users
	- `localhost:54716/api/Order/Info?name=`
        - Return order details for certain user based on user name
    - `localhost:54716/api/results/all`
        - Get results including total payments, orders and balance from all users
