let multiplier = 1;
let isCrashed = false;
let ctx;

function initCanvas() {
    const canvas = document.getElementById('crash-canvas');
    ctx = canvas.getContext('2d');
    
    animateCrash();
}

function animateCrash() {
    if (isCrashed) return;
    
    ctx.fillStyle = '#111';
    ctx.fillRect(0, 0, 800, 400);
    
    ctx.strokeStyle = '#ef4444';
    ctx.lineWidth = 8;
    ctx.beginPath();
    ctx.moveTo(100, 300);
    ctx.lineTo(700, 100);
    ctx.stroke();
    
    multiplier += 0.05;
    document.getElementById('multiplier').textContent = 'x' + multiplier.toFixed(2);
    
    if (multiplier > Math.random() * 8 + 2) {
        isCrashed = true;
        alert('Crash! ضربدر ترکید! امتیاز: ' + (multiplier * 100).toFixed(0));
    } else {
        setTimeout(animateCrash, 80);
    }
}

function cashOut() {
    if (!isCrashed) {
        alert('Cash Out موفق! ضربدر: x' + multiplier.toFixed(2));
        isCrashed = true;
    }
}

function startCrash() {
    multiplier = 1;
    isCrashed = false;
    initCanvas();
}

window.onload = initCanvas;