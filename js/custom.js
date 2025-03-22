document.addEventListener("DOMContentLoaded", function () {
  const accordionTriggers = document.querySelectorAll(".accordion-trigger");

  accordionTriggers.forEach((trigger) => {
    trigger.addEventListener("click", function () {
      // 親要素をたどって entry__excerpt を取得
      const excerpt =
        this.closest(".entry__text").querySelector(".entry__excerpt");

      if (excerpt) {
        excerpt.style.display =
          excerpt.style.display === "block" ? "none" : "block";
      } else {
        console.error("entry__excerpt が見つかりません。");
      }
    });
  });
});
