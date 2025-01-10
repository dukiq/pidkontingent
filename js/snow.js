const createSnowflake = () => {
    const snowflake = document.createElement('div');
    snowflake.classList.add('snowflake');
    snowflake.textContent = '❄';
    snowflake.style.left = Math.random() * 100 + 'vw';
    snowflake.style.animationDuration = Math.random() * 3 + 2 + 's';
    snowflake.style.fontSize = Math.random() * 10 + 10 + 'px';
    document.body.appendChild(snowflake);
    setTimeout(() => {
        snowflake.remove();
    }, 5000);
};

setInterval(createSnowflake, 100);

// Добавить стили для снега
const style = document.createElement('style');
style.textContent = `
    .snowflake {
        position: fixed;
        top: -10px;
        font-size: 1em;
        color: white;
        opacity: 0.9;
        animation: fall linear infinite;
    }
    @keyframes fall {
        0% {
            transform: translateY(0) rotate(0);
            opacity: 0.9;
        }
        100% {
            transform: translateY(100vh) rotate(360deg);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);
