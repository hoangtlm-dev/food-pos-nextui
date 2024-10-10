# Food POS - Food Management Web Application

## Overview

Food POS is a web-based application designed for managing food items in restaurants and cafes. It allows users to manage menus, track orders, handle ingredients, and process payments efficiently. With an intuitive and user-friendly interface, it helps streamline restaurant operations and improve overall business management.

Author: Hoang Tran &lt;[hoangtlm2410@gmail.com.vn](hoangtlm2410@gmail.com.vn)&gt;

## Tech Stacks

- Front-end
  - NextJS v14.2.15
  - React v18.3.1
  - TailwindCSS v3.4.1
  - NextUI v2.4.8
  - Storybook v8.3.5
- Testing
  - Jest v29.7.9
  - React Testing Library v16.0.1
- Other third parties
  - Pagination API
- Deployment:
  - CI/CD: GitHub Action
  - Render for JSON server: 🔥 Coming soon!
  - Vercel for Web site: 🔥 Coming soon!
  - Vercel for Storybook: 🔥 Coming soon!

## Requirements

- [Node](https://nodejs.org/en/) &gt;= v21.7.3 / [npm](https://www.npmjs.com/) &gt;= v10.8.2
- [pnpm](https://pnpm.io/) &gt;= v9.10.0

## Getting Started

**Step by step to run the web site and storybook in your local**

1. Clone the project repository

   ```
   git clone git@github.com:hoangtlm-dev/food-pos-nextui.git`
   ```

2. Install project dependencies

   ```
   pnpm install
   ```

3. Set up environment variables

- Create a `.env.local` file in the root directory
- Contact the author to get the value of environment variables (please follow `.env.example` to get the key)

4. Running the page

- Open a new terminal
- Run the page
  ```
  pnpm dev
  ```
- The page will run on [http://localhost:3000](http://localhost:3000) by default. You can access it using your browser.

5. Running the storybook

- Open a new terminal
- Run the storybook
  ```
  pnpm storybook
  ```
- The storybook will run on [http://localhost:6006](http://localhost:6006) by default. You can access it using your browser.
