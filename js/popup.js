
// DOM 요소 선택
const modal = document.getElementById('modal');
const moda2 = document.getElementById('modal');
const modalContent = document.getElementById('modal-content');
const modalContent2 = document.getElementById('modal-content2');
const openModalBtn = document.getElementById('openModalBtn');
const openModalBtn2 = document.getElementById('openModalBtn2');
const closeModalBtn = document.getElementById('closeModalBtn');
const closeModalBtn2 = document.getElementById('closeModalBtn2');

// 모달 열기
openModalBtn.addEventListener('click', (e) => {
  // 클릭 위치 저장
  const x = e.clientX;
  const y = e.clientY;

  // 모달 배경과 내용을 보이도록 설정
  modal.style.display = 'flex';
  
  // 모달 콘텐츠 위치 설정
 modalContent.style.left = '50%';
  modalContent.style.top = '50%';
  modalContent.style.transform = 'translate(-50%, -50%)';

  // 모달 애니메이션 효과
  setTimeout(() => {
    modal.classList.add('show');
  }, 10); // 애니메이션 효과를 주기 위한 짧은 지연
});

// 모달 열기
openModalBtn2.addEventListener('click', (e) => {
  // 클릭 위치 저장
  const x = e.clientX;
  const y = e.clientY;

  // 모달 배경과 내용을 보이도록 설정
  modal2.style.display = 'flex';
  
  // 모달 콘텐츠 위치 설정
 modalContent2.style.left = '50%';
  modalContent2.style.top = '50%';
  modalContent2.style.transform = 'translate(-50%, -50%)';

  // 모달 애니메이션 효과
  setTimeout(() => {
    modal2.classList.add('show');
  }, 10); // 애니메이션 효과를 주기 위한 짧은 지연
});



// 모달 닫기
closeModalBtn.addEventListener('click', () => {
  modal.classList.remove('show');
  setTimeout(() => {
    modal.style.display = 'none';
  }, 500); // 애니메이션 후 모달 숨기기
});

// 모달 닫기
closeModalBtn2.addEventListener('click', () => {
  modal2.classList.remove('show');
  setTimeout(() => {
    modal2.style.display = 'none';
  }, 500); // 애니메이션 후 모달 숨기기
});

// 배경 클릭 시 모달 닫기
modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    closeModalBtn.click();
  }
});
// 배경 클릭 시 모달 닫기
modal2.addEventListener('click', (e) => {
  if (e.target === modal) {
    closeModalBtn2.click();
  }
});