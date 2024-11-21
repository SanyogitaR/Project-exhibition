# Project Setup

## Database Setup

1. **Create the Database**:
   - Open your MySQL client and create the database:
     ```sql
     CREATE DATABASE project1_database;
     ```

2. **Import the Database Schema and Data**:
   - Use the provided `project1_database_backup.sql` file to restore the database:
     ```bash
     mysql -u root -p project1_database < project1_database_backup.sql
     ```

## Environment Configuration

1. **Create a `.env` File**:
   - Create a `.env` file in the root directory with the following content:
     ```plaintext
     CLOUDINARY_CLOUD_NAME=your_cloud_name
     CLOUDINARY_API_KEY=your_api_key
     CLOUDINARY_API_SECRET=your_api_secret
     DB_HOST=your_db_host
     DB_USER=your_db_user
     DB_PASSWORD=your_db_password
     DB_NAME=project1_database
     ```

2. **Install Dependencies**:
   - Run `npm install` to install project dependencies.

3. **Run the Server**:
   - Start the server using:
     ```bash
     node app.js
     ```

## Dependencies
- Express
- Multer
- Cloudinary
- MySQL
- dotenv
