const canvaBlockEl = document.getElementById('canva-block');
const ctx = canvaBlockEl.getContext('2d');
const changeBtnEl = document.querySelector('#change-btn');
const inputRadiusEl = document.getElementById('input-radius');
const canvaW = canvaBlockEl.width = 640;
const canvaH = canvaBlockEl.height = 480;
const startX = 100;
const startY = 100;

const detail = {
  length: 350,
  width: 250,
  lt: {},
  lb: {},
  rt: { radius: 80 },
  rb: {}
};

changeBtnEl.addEventListener('click', onBtnChange);
inputRadiusEl.addEventListener('change', onInputChange);

function onBtnChange() {
  ctx.clearRect(0, 0, canvaW, canvaH);
  drawDetail();
  ctx.translate(detail.length * 0.5 + startX, detail.width * 0.5 + startY);
  ctx.rotate((Math.PI / 180) * 90);
  ctx.translate(-(detail.length * 0.5 + startX), -(detail.width * 0.5 + startY));
}

function onInputChange() {
  ctx.clearRect(0, 0, canvaW, canvaH);
  if (inputRadiusEl.value && !isNaN(inputRadiusEl.value) && inputRadiusEl.value <= detail.width) {
    detail.rt.radius = +inputRadiusEl.value;
    drawDetail();
  } else {
    alert('Enter number please!')
    drawDetail();
  }
  inputRadiusEl.value = '';
}

function drawDetail() {
  ctx.beginPath();
  ctx.moveTo(startX, startY);
  ctx.lineTo(startX, detail.width + startY);
  ctx.lineTo(detail.length + startX, detail.width + startY);
  ctx.lineTo(detail.length + startX, startY + detail.rt.radius);
  ctx.moveTo(startX, startY);
  ctx.lineTo(detail.length + startX - detail.rt.radius, startY);
  ctx.arc(detail.length - (detail.rt.radius - startX), detail.rt.radius + startY, 
    detail.rt.radius, 0, Math.PI*1.5, true);
  ctx.stroke();
}

drawDetail();
