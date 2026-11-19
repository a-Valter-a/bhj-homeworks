const pollTitle = document.getElementById("poll__title");
const pollAnswers = document.getElementById("poll__answers");

const xhr = new XMLHttpRequest();
xhr.open("GET", "https://students.netoservices.ru/nestjs-backend/poll");
xhr.responseType = "json";
xhr.send();

xhr.addEventListener("load", () => {
  const response = xhr.response;
  const pollId = response.id;
  const {title, answers} = response.data;

  pollTitle.textContent = title;

  answers.forEach((answer, index) => {
    const button = document.createElement("button");
    button.className = "poll__answer";
    button.textContent = answer;

    button.addEventListener("click", () => {
      alert("Спасибо, ваш голос засчитан!");

      const voteXhr = new XMLHttpRequest();
      voteXhr.open("POST", "https://students.netoservices.ru/nestjs-backend/poll");
      voteXhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
      voteXhr.responseType = "json";
      voteXhr.send(`vote=${pollId}&answer=${index}`);

      voteXhr.addEventListener("load", () => {
        const stats = voteXhr.response.stat;

        pollAnswers.innerHTML = "";
        stats.forEach(item => {
          const result = document.createElement("div");
          result.textContent = `${item.answer}: ${item.votes}%`;
          pollAnswers.append(result);
        });
      });
    });

    pollAnswers.append(button);
  });
});
