'use strict';
// The study material is static HTML; this only adds optional practice feedback.
document.addEventListener('click', function (event) {
  const button = event.target.closest('button[data-choice]');
  if (!button) return;
  const question = button.closest('.practice-question');
  if (!question) return;
  const correctIndex = Number(question.dataset.correct);
  const selectedIndex = Number(button.dataset.choice);
  question.querySelectorAll('button[data-choice]').forEach(function (option) {
    const optionIndex = Number(option.dataset.choice);
    option.setAttribute('aria-pressed', String(optionIndex === selectedIndex));
    option.classList.toggle('is-correct', optionIndex === correctIndex);
    option.classList.toggle('is-incorrect', optionIndex === selectedIndex && selectedIndex !== correctIndex);
  });
  question.querySelector('.answer-status').textContent = selectedIndex === correctIndex ? 'Correct.' : 'Review the explanation below.';
  question.querySelector('.feedback').hidden = false;
});
