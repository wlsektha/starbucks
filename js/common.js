// 요소 검색 및 찾기
const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');

searchEl.addEventListener('click', function () {
  searchInputEl.focus();
})
searchInputEl.addEventListener('focus', function () {
  searchEl.classList.add('focused');
  // setAttribute 는 속성 지정
  searchInputEl.setAttribute('placeholder', '통합검색');
})
searchInputEl.addEventListener('blur', function () {
  searchEl.classList.remove('focused');
  searchInputEl.setAttribute('placeholder', '');
});


const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear(); //2022 생성 textContent- 글자내용으로
