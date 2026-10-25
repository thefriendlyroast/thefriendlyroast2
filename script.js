// ============================================================
// the friendly roast — one-page site behaviour
// (coffee data lives in coffees.js — edit that file, not this one)
// ============================================================

// ---------- Modal: open / close ----------
var modal = document.getElementById('modal');
var modalContent = document.getElementById('modal-content');

function openModal(html) {
  modalContent.innerHTML = html;
  modal.hidden = false;
  document.body.style.overflow = 'hidden';   // stop the page behind from scrolling
}

function closeModal() {
  modal.hidden = true;
  modalContent.innerHTML = '';
  document.body.style.overflow = '';
}

// Close when clicking the backdrop or the × button
modal.addEventListener('click', function (event) {
  if (event.target.hasAttribute('data-close')) closeModal();
});

// Close with the Escape key
document.addEventListener('keydown', function (event) {
  if (event.key === 'Escape' && !modal.hidden) closeModal();
});

// ---------- Building the coffee detail views ----------

function factList(coffee) {
  return (
    '<dl class="facts">' +
      '<div><dt>Name</dt><dd>' + coffee.name + '</dd></div>' +
      '<div><dt>Availability</dt><dd>' + coffee.availability + '</dd></div>' +
      '<div><dt>Origin</dt><dd>' + coffee.origin + '</dd></div>' +
      '<div><dt>Altitude</dt><dd>' + coffee.altitude + '</dd></div>' +
      '<div><dt>Varietal</dt><dd>' + coffee.varietal + '</dd></div>' +
      '<div><dt>Process</dt><dd>' + coffee.process + '</dd></div>' +
    '</dl>'
  );
}

function paragraphs(coffee) {
  return coffee.description.map(function (p) {
    return '<p>' + p + '</p>';
  }).join('');
}

// The full request form (Formspree), with the current coffee as first option
function requestForm(coffee) {
  return (
    '<form class="request-form" action="https://formspree.io/f/xkjjggzl" method="POST">' +
      '<label for="name">Your name</label>' +
      '<input type="text" id="name" name="name" required>' +

      '<label for="email">Your email</label>' +
      '<input type="email" id="email" name="email" required>' +

      '<label for="coffee">Which coffee would you like?</label>' +
      '<select id="coffee" name="coffee">' +
        '<option value="' + coffee.name + '">' + coffee.name + ' \u2014 the current roast</option>' +
        '<option value="decaf">Do you roast decaf currently?</option>' +
        '<option value="not-coffee">This isn\u2019t about coffee</option>' +
      '</select>' +

      // This block hides itself when "This isn't about coffee" is chosen
      '<div id="size-row">' +
        '<label for="size">How much?</label>' +
        '<select id="size" name="size">' +
          '<option value="250g">250 g</option>' +
          '<option value="500g">500 g</option>' +
          '<option value="1kg">1 kg</option>' +
          '<option value="custom">I\u2019ll write the amount below</option>' +
        '</select>' +
      '</div>' +

      '<label for="message">Anything else? (optional)</label>' +
      '<textarea id="message" name="message" rows="4"></textarea>' +

      '<button type="submit" class="subscribe-btn send-btn">Send request</button>' +
    '</form>'
  );
}

// The popup that opens when someone clicks the hero painting
function currentCoffeePopup(coffee) {
  return (
    '<img class="modal-photo" src="' + coffee.image + '" alt="Taste impression \u2014 ' + coffee.name + '.">' +
    factList(coffee) +
    paragraphs(coffee) +
    '<p>Coffee roasting is a hobby that fits into life among work, family, music, life. Solving the roast mystery one bean at a time is the chosen pace.</p>' +
    '<p>That coffee is tasted and pondered every day for months. The roast profile adapts. The longer the coffee is in possession the more completely it flavour is communicated through the roast profile.</p>'
  );
}

// The popup that opens when someone clicks "Please can I buy a bag?"
function buyCoffeePopup(coffee) {
  return (
    '<h3 class="buy-heading">Please can I buy a bag?</h3>' +
    '<p>Yeah sure, send me a message and I\u2019ll get back to you.</p>' +
    requestForm(coffee)
  );
}

// The popup that opens when someone clicks an archive photo
function archiveCoffeePopup(coffee) {
  return (
    '<img class="modal-photo" src="' + coffee.image + '" alt="Taste impression \u2014 ' + coffee.name + '.">' +
    factList(coffee) +
    paragraphs(coffee)
  );
}

// ---------- "How much?" hide / show ----------
function updateSizeRow() {
  var coffeeSelect = document.getElementById('coffee');
  var sizeRow = document.getElementById('size-row');
  if (coffeeSelect && sizeRow) {
    sizeRow.style.display = (coffeeSelect.value === 'not-coffee') ? 'none' : '';
  }
}

modal.addEventListener('change', function (event) {
  if (event.target && event.target.id === 'coffee') updateSizeRow();
});

// ---------- The Nano Roastery story: expand / collapse ----------
var storyToggle = document.getElementById('story-toggle');
var story = document.getElementById('story');
if (storyToggle && story) {
  storyToggle.addEventListener('click', function () {
    story.hidden = !story.hidden;
  });
}

// ---------- The hero photo: the coffee that is currently roasting ----------
var currentCoffee = COFFEES.filter(function (coffee) {
  return coffee.status === 'roasting';
})[0];

// The hero always shows the current roast's painting, name and availability
var heroCoffee = document.getElementById('hero-coffee');
if (heroCoffee) {
  heroCoffee.src = currentCoffee.image;
  heroCoffee.alt = 'Taste impression \u2014 ' + currentCoffee.name + '.';
}

var currentName = document.getElementById('open-current-details');
if (currentName) {
  currentName.textContent = currentCoffee.name + ' \u2014 ' + currentCoffee.availability;
}

// The painting and the name link open the coffee details popup
document.getElementById('open-current').addEventListener('click', function () {
  openModal(currentCoffeePopup(currentCoffee));
});

document.getElementById('open-current-details').addEventListener('click', function (event) {
  event.preventDefault();
  openModal(currentCoffeePopup(currentCoffee));
});

// "Please can I buy a bag?" opens the request form popup
document.getElementById('open-buy').addEventListener('click', function (event) {
  event.preventDefault();
  openModal(buyCoffeePopup(currentCoffee));
  updateSizeRow();
});

// ---------- The archive: one photo per PAST coffee, click to open ----------
// (the current roast is shown at the top of the page instead)
var archiveGrid = document.getElementById('archive-grid');

COFFEES.filter(function (coffee) {
  return coffee.status === 'archive';
}).forEach(function (coffee) {
  var item = document.createElement('button');
  item.className = 'archive-item';
  item.type = 'button';
  item.innerHTML = '<img loading="lazy" src="' + coffee.image + '" alt="Taste impression \u2014 ' + coffee.name + '.">';
  item.addEventListener('click', function () {
    openModal(archiveCoffeePopup(coffee));
  });
  archiveGrid.appendChild(item);
});
