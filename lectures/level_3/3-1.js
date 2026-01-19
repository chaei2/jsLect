// 3-1
// Step1(3-1) : 배열 연습
var student1 = ["홍길동", 202000001, "커뮤니케이션디자인"];
student1[0] = "강제헌";
console.log(student1[0]);

// Step2(3-1) : 객체 연습
var student2 = {
  name: "홍길동",
  pupil: 202000001,
  major: "커뮤니케이션디자인",
};
student2.name = "강제헌";
student2.pupil = 202020183;
console.log(student2["name"]);
console.log(student2.pupil);

// 3-2
// Step1(3-2) : 배열 + 객체 연습
var student3 = {
  name: "홍길동",
  pupil: 202000001,
  major: ["커뮤니케이션디자인", "AI영상디자인", "AR·VR미디어디자인"],
};
console.log(student2.pupil[1]);

// Step2(3-2) : student2에 저장된 이름, 학번을 HTML에 출력
// 숙제 : 스스로 해보기
$(".name").eq(0).html(student2.name);
$(".pupil").eq(0).html(student2.pupil);
