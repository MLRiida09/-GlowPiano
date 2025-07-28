# 🎹 Beautiful Piano

A stunning, interactive piano application with modern web technologies and beautiful visual effects.

![Piano Screenshot](https://via.placeholder.com/800x400/667eea/ffffff?text=Beautiful+Piano+🎹)

## ✨ Features

### 🎵 Audio
- **Web Audio API** - No external audio files needed!
- **Real-time sound generation** with triangle wave oscillators
- **ADSR envelope** for natural piano-like sound
- **High-quality frequencies** for all 12 chromatic notes

### 🎨 Visual Effects
- **Animated gradient background** with floating particles
- **Glowing title** with pulsing animations
- **3D piano design** with realistic shadows and reflections
- **Ripple effects** on key press
- **Sound wave visualizations** above each key
- **Smooth transitions** and modern animations

### ⌨️ Interactions
- **Mouse support** - Click keys to play
- **Keyboard support** - Play with your computer keyboard
- **Responsive design** - Works on desktop and mobile
- **Visual feedback** for all interactions

## 🎮 How to Play

### Mouse
Simply click on any piano key to play the corresponding note.

### Keyboard Controls
| Computer Key | Piano Note |
|-------------|------------|
| A | C |
| W | C# (Db) |
| S | D |
| E | D# (Eb) |
| D | E |
| F | F |
| T | F# (Gb) |
| G | G |
| Y | G# (Ab) |
| H | A |
| U | A# (Bb) |
| J | B |

## 🚀 Getting Started

### Prerequisites
- Modern web browser with Web Audio API support
- No additional software or audio files required!

### Installation
1. Clone or download the project files
2. Ensure all files are in the same directory:
   ```
   piano-project/
   ├── index.html
   ├── style.css
   ├── script.js
   └── README.md
   ```
3. Open `index.html` in your web browser
4. Start playing! 🎵

### Local Development
1. For best experience, serve the files through a local web server:
   ```bash
   # Using Python 3
   python -m http.server 8000
   
   # Using Node.js (with http-server)
   npx http-server
   
   # Using PHP
   php -S localhost:8000
   ```
2. Navigate to `http://localhost:8000` in your browser

## 🛠️ Technical Details

### Technologies Used
- **HTML5** - Semantic structure
- **CSS3** - Advanced styling with gradients, animations, and effects
- **Vanilla JavaScript** - No dependencies!
- **Web Audio API** - Real-time audio synthesis

### Browser Compatibility
- ✅ Chrome 34+
- ✅ Firefox 25+
- ✅ Safari 14.1+
- ✅ Edge 12+

### Performance
- Optimized animations using `requestAnimationFrame`
- Efficient particle system with selective updates
- Minimal DOM manipulation for smooth performance

## 🎨 Customization

### Changing Colors
Edit the CSS variables in `style.css`:
```css
/* Background gradient */
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);

/* Sound wave colors */
background: linear-gradient(45deg, #ff6b6b, #4ecdc4);
```

### Adding More Octaves
1. Add more keys in `index.html`
2. Update `noteFrequencies` object in `script.js`
3. Add corresponding keyboard mappings

### Modifying Sound
Change oscillator settings in `script.js`:
```javascript
oscillator.type = 'sine'; // sine, square, sawtooth, triangle
```

## 📱 Mobile Support

The piano is fully responsive and works great on mobile devices:
- Touch-friendly key sizes
- Optimized layouts for smaller screens
- Smooth touch interactions

## 🔧 Troubleshooting

### No Sound?
1. Check if your browser supports Web Audio API
2. Ensure your device volume is turned up
3. Try clicking on the page first (some browsers require user interaction)

### Performance Issues?
1. Close other browser tabs
2. Try reducing the number of particles in `script.js`
3. Disable visual effects for older devices

## 🤝 Contributing

Feel free to contribute to this project! Some ideas:
- Add more octaves
- Implement recording/playback functionality
- Add different instrument sounds
- Create preset melodies
- Add volume controls

## 📄 License

This project is open source and available under the [MIT License](https://opensource.org/licenses/MIT).

## 🎼 Credits

- Sound frequencies based on standard piano tuning
- Visual design inspired by modern glass-morphism trends
- Built with love for music and web development! 🎵

---

**Enjoy playing your Beautiful Piano! 🎹✨**
