import { convertToHex } from '@tolga1452/toolbox.js';
import { getColor } from 'colorthief';
import { config } from 'dotenv';
import express from 'express';
import { getWallpaper } from 'wallpaper';
import cors from 'cors';

config();

const app = express();

app.use(cors());
app.use(express.json());

app.use((req, res, next) => {
    let key = (req.headers.authorization ?? '').split(' ')[1];

    if (key !== process.env.API_KEY) return res.status(401).json({ message: 'Unauthorized' });

    next();
});

app.get('/theme-color', async (req, res) => {
    try {
        let wallpaperPath = await getWallpaper({
            screen: 'main'
        });
        let themeColor = await getColor(wallpaperPath);
    
        return res.json({
            color: convertToHex(themeColor)
        });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    };
});

app.listen(3010, console.log('Server started on port 3010'));