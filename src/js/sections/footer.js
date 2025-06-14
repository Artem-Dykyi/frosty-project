document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".footer_subscribe-box");
  const emailInput = document.getElementById("footerSubscribeInput");
  const successModal = document.querySelector(".subscribe_modal-backdrop");
  const errorModal = document.querySelector(".already-sub__modal");

  form.addEventListener("submit", async function (e) {
    e.preventDefault();

    if (!emailInput.checkValidity()) {
      emailInput.reportValidity();
      return;
    }

    const email = emailInput.value.trim();

    try {
      const response = await fetch(
        "https://food-boutique.b.goit.study/api/subscription",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email }),
        }
      );

      const result = await response.json();

      if (response.ok) {
        emailInput.value = "";
        successModal.classList.remove("hidden");
      } else {
        console.log("Error response:", result);
        errorModal.classList.remove("hidden");
      }
    } catch (error) {
      console.log("error:", error);
      errorModal.classList.remove("hidden");
    }
  });
});
