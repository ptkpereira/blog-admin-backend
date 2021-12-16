<div id="top"></div>

<!-- PROJECT LOGO -->
<br />
<div align="center">

<h3 align="center">Blog Admin Backend</h3>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

A backend for managing blog posts, which exposes a REST API to be consumed by the frontend (see [frontend](https://github.com/patrickpereirak/blog-admin-frontend)). Adds new posts with related, updates and get post view and list.

<p align="right">(<a href="#top">back to top</a>)</p>

### Built With

- [Sequelize](https://sequelize.org/)
- [PostgreSQL](https://www.postgresql.org/)
- [Express.js](https://expressjs.com/pt-br/)
- [Node.js](https://nodejs.org/en/)

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites

- node
- npm
- postgreSQL

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/patrickpereirak/blog-admin-backend.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Configure database and frontend url in `.env`
   ```sh
   DB_DIALECT=YOUR_DIALECT
   DB_HOST=YOUR_HOST
   DB_USERNAME=YOUR_USERNAME
   DB_PASSWORD=YOUR_PASSWORD
   DB_DATABASE=YOUR_DATABASE
   URL_ORIGIN=YOUR_ORIGIN
   ```

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- USAGE EXAMPLES -->

## Usage

1. Start server
   ```sh
   npm run start
   ```
2. Access API in
   ```sh
   localhost:3333
   ```

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- CONTACT -->

## Contact

Patrick Pereira - patrickpereirak@gmail.com

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- ACKNOWLEDGMENTS -->
