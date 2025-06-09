document.addEventListener('DOMContentLoaded', () => {
    const colorPatches = document.querySelectorAll('.color-patch');
    const changeColorsBtn = document.getElementById('change-colors-btn');

    // A curated palette of colors that look good together
    const colorPalette = [
        '#E63946', '#F1FAEE', '#A8DADC', '#457B9D', '#1D3557',
        '#F4A261', '#E76F51', '#2A9D8F', '#264653', '#E9C46A',
        '#FFCDB2', '#FFB4A2', '#E5989B', '#B5838D', '#6D6875',
        '#9B5DE5', '#F15BB5', '#FEE440', '#00BBF9', '#00F5D4',
        '#D81159', '#8F2D56', '#218380', '#FBB13C', '#73D2DE'
    ];

    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    function applyRandomColors() {
        shuffleArray(colorPalette);
        colorPatches.forEach((patch, index) => {
            // Cycle through the shuffled palette
            patch.style.fill = colorPalette[index % colorPalette.length];
        });
    }

    if (changeColorsBtn) {
        changeColorsBtn.addEventListener('click', applyRandomColors);
    }

    // Initial random colors on load
    applyRandomColors();
});

