(function () {
  var link = window.EQUITON_CONFIG && window.EQUITON_CONFIG.stripePaymentLink;
  var buttons = document.querySelectorAll("#buy-button, .btn-primary[href='#buy']");

  document.querySelectorAll("#buy-button").forEach(function (btn) {
    if (link) {
      btn.href = link;
      btn.target = "_blank";
      btn.rel = "noopener";
    } else {
      btn.addEventListener("click", function (e) {
        e.preventDefault();
        alert("Checkout isn't set up yet — add your Stripe Payment Link in config.js.");
      });
    }
  });
})();
