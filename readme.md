# Hotel Hopper

Hotel Hopper is a full-stack application that allows users to browse hotels, make reservations, and manage their orders. It provides both a backend API built with NestJS and MongoDB and a frontend application developed with Next.js, TypeScript, Tailwind CSS, Next UI, and Zod for validation.

## Backend

### Controllers

#### AppController

- **Endpoints**:
  - `GET /me`: Retrieves information about the current user.

#### UserController

- **Endpoints**:
  - `POST /user`: Creates a new user.

#### OrderController

- **Endpoints**:
  - `POST /order`: Creates a new order.
  - `GET /order`: Retrieves all orders.
  - `GET /order/:id`: Retrieves a specific order by ID.

#### HotelController

- **Endpoints**:
  - `POST /hotel`: Creates a new hotel.
  - `GET /hotel`: Retrieves all hotels.
  - `GET /hotel/:hotelID`: Retrieves a specific hotel by ID.
  - `GET /hotel/:hotelID/:roomID`: Retrieves a specific room within a hotel by ID.
  - `PATCH /hotel/:id`: Updates information about a hotel.
  - `DELETE /hotel/:id`: Deletes a hotel.

#### AuthController

- **Endpoints**:
  - `POST /login`: Handles user authentication and generates a JWT token.

### Starting the Backend

To start the backend server:

1. Navigate to the server directory: `cd server`.
2. Build the Docker image: `docker build . -t hotelhopper-image`.
3. Run the Docker container: `docker run -p 8000:8000 hotelhopper-image`.

## Frontend

### Routes

- `/`: Home page.
- `/hotels`: Displays all hotels.
- `/hotels/:hotelID`: Displays details of a specific hotel.
- `/hotels/:hotelID/:roomID`: Displays details of a specific room within a hotel.
- `/orders`: Manages user orders.

### API Integration

#### Hotel API

- `getAllHotels(filters?: FilterHotels)`: Retrieves all hotels with optional filters.
- `getHotelByID(hotelID: string)`: Retrieves details of a hotel by ID.
- `getRoomByID(hotelID: string, roomNumber: string)`: Retrieves details of a room within a hotel by ID.

#### Order API

- `createOrder(orderData: OrderPost)`: Creates a new order.
- `getAllOrders()`: Retrieves all orders.
- `getOrderById(orderId: string)`: Retrieves details of an order by ID.

#### User API

- `signupUser(data: UserSignup)`: Registers a new user.
- `LoginUser(data: UserLogin)`: Authenticates a user and returns a JWT token.
- `getUserInfo(token: string)`: Retrieves information about the current user.

## Technologies

### Frontend

- Next.js
- TypeScript
- Tailwind CSS
- Next UI
- Zod (for validation)

### Backend

- NestJS
- Docker
- MongoDB
- Mongoose (ORM)

## Contribution

Contributions are always welcome! Feel free to open an issue or submit a pull request.

## Contact

If you have any questions or would like to discuss the project, you can contact me at lucas.ribeiro.24444@gmail.com.

## License

This project is licensed under the MIT License.

## Credits

This project was entirely created by me.
