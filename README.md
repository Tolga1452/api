A local server with some tools for your PC.

# Setup

1. Install **the latest** [Node.js](https://nodejs.org/en/download/current) version.
2. Install [Git](https://git-scm.com/).
3. Open a terminal and run the following commands:

```sh
git clone https://github.com/Tolga1452/api.git
cd api
npm install
```

4. Rename the `.env.example` file to `.env` and fill the values.

## Manual start

Open a terminal in the `api` folder and run the following command:

```sh
npm start
```

## Automatic start

### Windows

1. Copy the path of the `api` folder and replace the `E:\api` in `start.bat` and `local-api.vbs` with the path you copied.
2. Press `Win + R` and type `shell:startup` and press `Enter`.
3. Move the `local-api.vbs` file to the folder that opened.
4. For the first time, restart your PC.
5. If Windows ask you to allow the script, allow it.

### Linux

1. Open a terminal and run the following command:

```sh
crontab -e
```

2. Add the following line to the end of the file (replace `/path/to/api` with the path of the `api` folder):

```sh
@reboot /usr/bin/node /path/to/api/index.js
```

3. Save and close the file.

4. For the first time, restart your PC.

# Endpoints

**Base URL:** <http://localhost:3010>

## `GET` `/theme-color`

Automatically gets the theme color from your wallpaper.
