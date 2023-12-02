module.exports = {
  singleQuote: true, // 문자열은 따옴표
  semi: true, //코드 마지막에 세미콜론
  useTabs: false, //탭 사용 금지 - 이거 해제하면 tabWidth: 2 안 먹힘
  tabWidth: 2, // 들여쓰기 너비는 2칸
  trailingComma: "all", // 객체나 배열 키:값 뒤에 항상 콤마를 붙히기
  printWidth: 120, // 코드 한줄이 maximum 120칸
  arrowParens: "avoid", // 화살표 함수가 하나의 매개변수를 받을 때 괄호 생략
  "editor.formatOnSave": true,
  "editor.formatOnType": true,
};
