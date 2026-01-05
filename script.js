// 인터랙션: 페이드인, 플로팅 LINE 버튼, 연도 자동 업데이트
document.addEventListener('DOMContentLoaded', function(){
  // 현재 연도
  const y = new Date().getFullYear();
  const yearEl = document.getElementById('year');
  if(yearEl) yearEl.textContent = y;

  // IntersectionObserver로 페이드인
  const observer = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){
        entry.target.classList.add('in-view');
        observer.unobserve(entry.target);
      }
    });
  }, {threshold: 0.12});

  document.querySelectorAll('.fade-section').forEach(el => observer.observe(el));

  // 플로팅 버튼 동작: LINE
  const lineBtn = document.getElementById('line-floating');

  if(lineBtn){
    lineBtn.addEventListener('click', (e)=>{
      e.preventDefault();
      window.open('https://line.me/R/ti/p/%40meindong', '_blank');
    });
  }

  // QR 클릭 시 LINE 열기
  const qr = document.getElementById('line-qr');
  if(qr){
    qr.style.cursor = 'pointer';
    qr.addEventListener('click', ()=> window.open('https://line.me/R/ti/p/%40meindong', '_blank'));
  }

  // 해시 링크 스무스 스크롤 (브라우저 지원 보완)
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click', function(e){
      const targetId = this.getAttribute('href').slice(1);
      if(!targetId) return;
      const targetEl = document.getElementById(targetId);
      if(targetEl){
        e.preventDefault();
        targetEl.scrollIntoView({behavior:'smooth', block:'start'});
        history.pushState && history.pushState(null, '', '#'+targetId);
      }
    });
  });
});