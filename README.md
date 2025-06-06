**ENGLISH**

# BOOK-LIBRARY-APP

A complete web application that allows adding and displaying books, built with React for the frontend and an Express backend.

## Features

- **Add a New Book (Book Form)**
- Inputs for adding the book's title and author
- Buttons for adding a book through different methods:

1. Add book (from the filled-in fields)
2. Add random (randomly from a local JSON file)
3. Add random via API (randomly via a server request)

- **Display Added Books in a List (Book List)**

  - Each item includes a button to mark as favorite and a delete button.

- **Filtering**

  - Search by title
  - Search by author
  - Display only favorite books
  - Reset filters

- **Loading Indicator**
  - Spinner shown while adding books via server request

## Technologies Used

### Frontend (React)

- **React**
- **Redux Toolkit**
- **React Icons**
- **CSS**
- **Fetch API (via Redux Thunk)**

### Backend (Express.js)

- **Node.js + Express.js**
- **CORS**
- **Local JSON File (`books.json`)**

# Local Run Guide

This application has two components: frontend (React) and backend/api (Express.js).

## Steps to run

1. Clone the project and navigate to the main folder:

   `git clone https://github.com/Alexandra123713/book-library-app.git`
   `cd book-library-app`

2. Install dependencies for backend and frontend:

   `cd api`
   `npm install`
   `cd frontend`
   `npm install`

3. Start the backend server:

   `cd api`
   `npm start`

   The server will be accessible at `http://localhost:4000`

4. Open a new terminal and start the frontend:

   `cd frontend`
   `npm start`

   The React application will be available at `http://localhost:3000`

## Project Status

Fully functional and complete project. Ready for deployment.

### Author

Project developed by **Cerevatii Alexandra**.

**Romana**

# BOOK-LIBRARY-APP

O aplicație web completă care permite adăugarea și afișarea de cărți, folosind React pentru front-end și un backend Express.

## Funcționalități

- **Adăugarea unei cărți noi (Book Form)**
- Inputuri pentru adăugarea titlului și autorului cărții
- Butoane de adăugare a cărții prin diferite metode:

1. Add book (Din câmpurile completate)
2. Add random (Random dintr-un fișier JSON local)
3. Add random via API (Random prin cerere la server)

- **Afișarea cărților adăugate într-o listă (Book List)**
  -Fiecare item din listă conține buton de marcare ca favorită și buton de ștergere.

- **Filtrare**
  -Căutare după titlu
  -Căutare după autor
  -Afișarea cărților marcate ca favorite
  -Resetarea filtrelor

- **Loading**
  -Afișarea unui indicator de încărcare la adâugarea cărților prin cerere la server

## Tehnologii folosite

### Frontend (React)

- **React**
- **Redux Toolkit**
- **React Icons**
- **CSS**
- **Fetch API (prin Redux Thunk)**

### Backend (Express.js)

- **Node.js + Express.js**
- **CORS**
- **Fișier JSON (`books.json`)**

# Ghid de rulare locală

Această aplicație are două componente: frontend (React) și backend/api (Express.js).

## Pași de rulare

1. Clonează proiectul și intră în folderul principal:

   `git clone https://github.com/Alexandra123713/book-library-app.git`
   `cd book-library-app`

2. Instalează dependențele pentru backend și frontend:

   `cd api`
   `npm install`
   `cd frontent`
   `npm install`

3. Pornește serverul backend:

   `cd api`
   `npm start`

   Serverul va fi accesibil la `http://localhost:4000`

4. Deschide un nou terminal, pornește frontend-ul:

   `cd frontend`
   `npm start`

   Aplicația React va fi disponibilă la `http://localhost:3000`

## Statut

Proiect finalizat și funcțional.

### Autor

Proiect realizat de **Cerevatii Alexandra**
