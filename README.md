# Recipe Search App

This project is a **Recipe Search Application** built with React and Node.js. It allows users to search for recipes by name, view detailed recipe information, and save their Favorite recipes. The application fetches recipe data from the **TheMealDB** API.

## Table of Contents

- [Features](#features)
- [Technologies](#technologies)
- [Setup Instructions](#setup-instructions)
- [Usage](#usage)
- [Folder Structure](#folder-structure)
- [Website Images](#website-images)
- [API](#api)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Search Recipes**: Search for recipes by name using the search bar.
- **View Recipe Details**: Click on a recipe from the search results to view detailed information including instructions and origin.
- **Favorites**: Save your Favorite recipes for easy access later.

## Technologies

- **Frontend**: React, React Router, Axios
- **API**: TheMealDB (https://www.themealdb.com)
- **Styling**: Tailwind CSS

## Setup Instructions

### Prerequisites

Before you begin, ensure you have the following installed on your local machine:

- **Node.js** (v14 or higher)
- **npm** (v6 or higher)

### Clone the Repository

```bash
git clone https://github.com/Aditya-Pawar-1/Recipe-Finder-App.git
cd recipe-search-app
```

### Install Dependencies

Navigate to the project directory and install the necessary dependencies:

```bash
npm install
```

### Run the Application

To start the development server, run:

```bash
npm run dev
```

This will start the app at `http://localhost:5173`.

## Usage

1. **Search for Recipes**: Enter a recipe name in the search bar and click the search icon.
2. **View Recipe Details**: Click on a recipe from the search results to view detailed information.
3. **Favorites**: Save your Favorite recipes for easy access later (if implemented).

## Folder Structure

```bash
recipe-search-app/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── Home.jsx
│   │   ├── Search.jsx
│   │   ├── RecipeDetails.jsx
│   │   ├── Favorites.jsx
│   │   ├── Loading.jsx
│   │   ├── Error.jsx
│   ├── utils/
│   │   ├── Routing.jsx
│   ├── App.jsx
│   └── index.js
├── .env
├── package.json
└── README.md
```

## website-images
Home Page
![Home Page](https://github.com/user-attachments/assets/48dff7c8-604b-4117-8043-3319717dbaf6)

Recipe Details Page
![Recipe Details Page](https://github.com/user-attachments/assets/3e2a69b8-76fa-4c38-8cf1-961107e5b7b7)

Favorite Recipes Page
![Favorite Recipes Page](https://github.com/user-attachments/assets/405d0247-12b0-4012-a1a7-90464c427086)


## API

This project uses **TheMealDB API** to fetch recipe data. You can learn more about the API here: [TheMealDB](https://www.themealdb.com/api.php).

## Contributing

Contributions are welcome! To contribute to this project:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature-name`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add some feature'`).
5. Push to the branch (`git push origin feature/your-feature-name`).
6. Open a pull request.

Please ensure that your code adheres to the existing code style and includes tests where applicable.

## License


Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
