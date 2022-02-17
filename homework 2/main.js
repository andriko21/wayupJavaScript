function task1() {
  for (let i = 10; i <= 50; i++) {
    if (i % 2 === 0) {
      console.log(i);
    }
  }
}
task1();

const aboutMe = {
  name: "Andrii",
  surname: "Belinskii",
  age: 14,
  isPet: true,
};

console.log(aboutMe);

function task3() {
  const array = [
    "я в Симбирск,",
    "в трактире.",
    "с утра",
    "В ту же ночь",
    "Я остановился",
    "для закупки",
    "что и было поручено Савельичу.",
    "приехал,",
    "где должен был",
    "нужных вещей",
    "отправился по лавкам",
    "пробыть сутки",
    "Савельич",
  ];
  const totaltext = array.join(" ");
  console.log(totaltext);
}

task3();

function task4(firstName, lastName) {
  const fullName = `${firstName} ${lastName}`;
  console.log(fullName);
}

task4("Andrii", "Belinskii");

function task5() {
  let a = 21;
  let b = 67;

  while (a <= b) {
    a++;
    if (a % 2 !== 0) {
      console.log(a);
    }
  }
}

task5();
