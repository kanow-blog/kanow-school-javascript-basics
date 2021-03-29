# Kanow-school JavaScript Basics

> This repository contains tasks for students which will to learn JavaScript

## Requirements

Before you will use this repository make sure that you have installed:

- **_Git_**

  - If you are a **Windows** or **macOS** user visit this link **[Downloading Git](https://git-scm.com/download/win)** then download appropriate installer and install it.
  - If you are a **Linux** (Ubuntu-based distribution) user you can paste bellow scrip into your terminal or visit this page **[Installing Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)**

    ```bash
    sudo apt install git-all
    ```

- **_Node.js_** and **_npm_**

  - If you are a **Windows** or **macOS** user visit this link **[Node.js download](https://nodejs.org/en/download/)** then download _LTS_ version for Windows and install it.
  - If you are a **Linux** (Ubunto-based distribution) user you can paste bellow scrip into your terminal or visit this page **[Node installation instruction](https://nodejs.org/en/download/package-manager/#debian-and-ubuntu-based-linux-distributions)** or use **[nvm](https://github.com/nvm-sh/nvm#install--update-script)**

    ```bash
    curl -fsSL https://deb.nodesource.com/setup_15.x | sudo -E bash -
    sudo apt-get install -y nodejs
    ```

- If you have installed **Node.js** and **npm**, then open your terminal / git-bash and run this command

  ```bash
  sudo npm install -g http-server
  ```

If you followed every step, you should be ready to start using this repository. To make sure that you have installed everything correctly open your terminal git-bash and run the following commands:

- To check **git**: _`git --version`_ → you shoud see output with **git** version
- To check **node.js**: _`node --version`_ → you shoud see output with **node.js** version
- To check **npm**: _`npm --version`_ → you shoud see output with **npm** version
- To check **http-server**: _`http-server`_ → you should see output which starts with **Starting up http-server, serving**

## Downloading the repository

- Open your terminal / git-bash in location where you create a directory which will contain this repository

- Run the following command in your terminal / git-bash

  ```bash
  git clone https://github.com/kanow-blog/kanow-school-javascript-basics.git
  ```

- Using your terminal / git-bash navigate to **_kanow-school-javascript-basics_** directory and check that this directory contains lessons (You can use bellow commands)

  ```bash
  cd kanow-school-javascript-basics/
  ls
  ```

  If you see lessons names it means that you have successfully downloaded this repository

## Using this repository

- Open **_kanow-school-javascript-basics_** directory in your terminal / git-bash
- Run `http-server` inside your terminal / git-bash in root directory
- Open your web-browser and go under **_http://localhost:8080/_**
- Now you can modify **index.js** files of lessons you are interested in. After you make any modifications do not forget to refresh your webpage
