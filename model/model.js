var homeContent = `<section class="hero">
<img src="images/hero.jpg" alt="" />
<div class="overlay">
  <div class="container">
    <h1>travel-fly</h1>
    <em
      >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat
      aliquid minus nemo sed est.</em
    >
    <div class="learn-more">
      <a href="#" style="border-radius: 0">READ MORE</a>
    </div>
  </div>
</div>
</section>
<div class="promo">
<div class="promo-container">
  <section class="promo-holder">
    <div class="holder">
      <img src="images/tour-01.jpg" alt="" />
      <div class="overlay">
        <div class="text">
          <h1>ISRAEL</h1>
          <h2>from $1000</h2>
        </div>
        <div class="learn-more">
          <a href="#">LEARN MORE</a>
        </div>
      </div>
    </div>
    <div class="holder">
      <img src="images/tour-02.jpg" alt="" />
      <div class="overlay">
        <div class="text">
          <h1>U.S.A</h1>
          <h2>from $1500</h2>
        </div>
        <div class="learn-more">
          <a href="#">LEARN MORE</a>
        </div>
      </div>
    </div>
    <div class="holder">
      <img src="images/tour-03.jpg" alt="" />
      <div class="overlay">
        <div class="text">
          <h1>AUSTRAILIA</h1>
          <h2>from $1500</h2>
        </div>
        <div class="learn-more">
          <a href="#">LEARN MORE</a>
        </div>
      </div>
    </div>
  </section>
</div>
</div>
<section class="booking">
<div class="container">
  <div class="title">
    <h1>Booking Form</h1>
  </div>
  <form action="#">
    <div class="text-row">
      <input type="text" name="name" id="name" placeholder="name..." />
      <input
        type="text"
        name="email"
        id="email"
        placeholder="email..."
      />
    </div>
    <div class="text-row">
      <input
        type="text"
        name="country"
        id="country"
        placeholder="country..."
      />
      <input
        type="text"
        name="hotel"
        id="hotel"
        placeholder="hotel..."
      />
    </div>
    <div class="check-in">
      <label for="check-in">Check-in</label>
      <input
        type="date"
        name="check-in"
        id="check-in"
        placeholder="05/10/2022"
      />
    </div>
    <div class="check-out">
      <label for="check-out">Check-out</label>
      <input
        type="date"
        name="check-out"
        id="check-out"
        placeholder="05/20/2022"
      />
    </div>
    <div class="group">
      <div class="adults">
        <label for="adult">Adult</label>
        <select name="adult" id="adult">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
      </div>
      <div class="children">
        <label for="children">Children</label>
        <select name="children" id="children">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
      </div>
      <div class="rooms">
        <label for="rooms">Rooms</label>
        <select name="rooms" id="rooms">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
      </div>
    </div>
    <textarea
      name="message"
      id="message"
      placeholder="message..."
    ></textarea>
    <div class="learn-more">
      <a href="#">SUBMIT</a>
    </div>
  </form>
</div>
</section>`; 
var aboutContent = `<section class="about">
<div class="container">
  <div class="title2">
    <h1>About:</h1>
  </div>
  <div class="text">
    <p>
      Sed ut perspiciatis unde omnis iste natus error sit voluptatem
      accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
      quae ab illo inventore veritatis et quasi architecto beatae vitae
      dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
      aspernatur aut odit aut fugit, sed quia consequuntur
    </p>
  </div>
  <div class="title2">
    <h2>Client Quotes:</h2>
  </div>
</div>
</section>
<div class="wrapper2">
<div class="aboutPerson">
  <div class="personImage">
    <img src="images/about-client-01.jpg" alt="" />
  </div>
  <div class="about-client">
    <p>
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem
      accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
      quae ab illo inventore veritatis et quasi architecto beatae vitae
      dicta sunt explicabo."
    </p>
  </div>
  <div class="author">-Miranda Brown</div>
</div>
<div class="aboutPerson">
  <div class="personImage">
    <img src="images/about-client-02.jpg" alt="" />
  </div>
  <div class="about-client">
    <p>
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem
      accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
      quae ab illo inventore veritatis et quasi architecto beatae vitae
      dicta sunt explicabo."
    </p>
  </div>
  <div class="author">-Johnathan wes</div>
</div>
</div>`;
var toursContent = `<section class="hero2">
<img src="images/tours-header.jpg" alt="" />
<div class="overlay">
  <div class="container2">
    <h1>Tours:</h1>
  </div>
</div>
</section>
<section class="promo">
<div class="wrapper3">
  <div class="tour">
    <div class="holder2">
      <img src="images/tour-01.jpg" alt="" />
      <div class="overlay">
        <div class="text">
          <h1>Israel</h1>
          <div class="price">from $1000</div>
        </div>
        <div class="learnMore">
          <a id="israel" class="israel" href="#">LEARN MORE</a>
        </div>
      </div>
    </div>
  </div>
  <div class="tour">
    <div class="holder2">
      <img src="images/tour-02.jpg" alt="" />
      <div class="overlay">
        <div class="text">
          <h1>U.S.A</h1>
          <div class="price">from $1500</div>
        </div>
        <div class="learnMore">
          <a id="usa" class="usa" href="#">LEARN MORE</a>
        </div>
      </div>
    </div>
  </div>
  <div class="tour">
    <div class="holder2">
      <img src="images/tour-03.jpg" alt="" />
      <div class="overlay">
        <div class="text">
          <h1>Australia</h1>
          <div class="price">from $1800</div>
        </div>
        <div class="learnMore">
          <a id="australia" class="australia" href="#">LEARN MORE</a>
        </div>
      </div>
    </div>
  </div>
  <div class="tour">
    <div class="holder2">
      <img src="images/tour-04.jpg" alt="" />
      <div class="overlay">
        <div class="text">
          <h1>New Zealand</h1>
          <div class="price">from $1200</div>
        </div>
        <div class="learnMore">
          <a id="newZealand" class="newZealand" href="#">LEARN MORE</a>
        </div>
      </div>
    </div>
  </div>
  <div class="tour">
    <div class="holder2">
      <img src="images/tour-05.jpg" alt="" />
      <div class="overlay">
        <div class="text">
          <h1>France</h1>
          <div class="price">from $2500</div>
        </div>
        <div class="learnMore">
          <a id="france" class="france" href="#">LEARN MORE</a>
        </div>
      </div>
    </div>
  </div>
  <div class="tour">
    <div class="holder2">
      <img src="images/tour-06.jpg" alt="" />
      <div class="overlay">
        <div class="text">
          <h1>Egypt</h1>
          <div class="price">from $900</div>
        </div>
        <div class="learnMore">
          <a id="egypt" class="egypt" href="#">LEARN MORE</a>
        </div>
      </div>
    </div>
  </div>
  <div class="tour">
    <div class="holder2">
      <img src="images/tour-07.jpg" alt="" />
      <div class="overlay">
        <div class="text">
          <h1>Japan</h1>
          <div class="price">from $1300</div>
        </div>
        <div class="learnMore">
          <a id="japan" class="japan" href="#">LEARN MORE</a>
        </div>
      </div>
    </div>
  </div>
  <div class="tour">
    <div class="holder2">
      <img src="images/tour-08.jpg" alt="" />
      <div class="overlay">
        <div class="text">
          <h1>Canada</h1>
          <div class="price">from $2000</div>
        </div>
        <div class="learnMore">
          <a id="canada" class="canada" href="#">LEARN MORE</a>
        </div>
      </div>
    </div>
  </div>
  <div class="tour">
    <div class="holder">
      <img src="images/tour-09.jpg" alt="" />
      <div class="overlay">
        <div class="text">
          <h1>U.A.E</h1>
          <div class="price">from $3000</div>
        </div>
        <div class="learnMore">
          <a id="uae" class="uae" href="#">LEARN MORE</a>
        </div>
      </div>
    </div>
  </div>
</div>
</section>`;
var specialofferContent = `<div class="title3">
<h1>SPECIAL OFFER(S):</h1>
<div class="line"></div>
</div>
<div class="wrapper-so">
<div class="offer">
  <div class="info-special">
    <div class="photos">
      <img src="images/special-offer-01.jpg" alt="" />
    </div>
    <div class="offers">
      <h1>BARCELONA, SPAIN</h1>
      <div class="both">
        <div class="line"></div>
        <div class="discount">
          <h4>(20% off!)</h4>
        </div>
      </div>
      <p>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
      </p>
      <div class="learnMore">
        <a href="#">LEARN MORE</a>
      </div>
    </div>
  </div>
  <div class="info-special">
    <div class="photos">
      <img src="images/special-offer-02.jpg" alt="" />
    </div>
    <div class="offers">
      <h1>BANGKOK, THAILAND</h1>
      <div class="both">
        <div class="line"></div>
        <div class="discount">
          <h4>(10% off!)</h4>
        </div>
      </div>
      <p>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
      </p>
      <div class="learnMore">
        <a href="#">LEARN MORE</a>
      </div>
    </div>
  </div>
</div>
</div>`;
var blogContent = `<div class="title">
<h1>BLOG:</h1>
<div class="line"></div>
</div>
<div class="wrapper">
<div class="blog">
  <div class="blog-info">
    <div class="box">
      <div class="date">06</div>
      <div class="month">JUN</div>
    </div>
    <div class="group">
      <div class="images">
        <img src="images/blog.jpg" alt="" />
      </div>
      <div class="top">
        <h5>Sed et persipiatis unde</h5>
        <p>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
          quae ab illo inventore veritatis et quasi
        </p>
      </div>
    </div>
  </div>
  <div class="blog-info">
    <div class="box">
      <div class="date">23</div>
      <div class="month">JUL</div>
    </div>
    <div class="group">
      <div class="images">
        <img src="images/blog.jpg" alt="" />
      </div>
      <div class="top">
        <h5>Sed et persipiatis unde</h5>
        <p>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
          quae ab illo inventore veritatis et quasi
        </p>
      </div>
    </div>
  </div>
</div>
</div>`;
var contactContent = `<div class="title">
<h1>CONTACT US:</h1>
<div class="line"></div>
</div>
<div class="wrapper3">
<div class="contact">
  <div class="map">
    <div class="map-image">
      <img src="images/map.png" alt="" />
    </div>
    <div class="address">
      travel-fly Inc.
      <br />
      8901 Marmora Road,
      <br />
      Glasgow, D04 89GR.
      <br />
      Freephone:+1800 559 6580
      <br />
      Telephone:+1 800 603 6035
      <br />
      FAX:+1 800 889 9898
      <br />
      E-mail: mail@travelfly.org
    </div>
  </div>
  <div class="contactForm">
    <input
      class="textFields"
      type="text"
      name="yourName"
      id="yourName"
      placeholder="Your name..."
    />
    <input
      class="textFields"
      type="text"
      name="email"
      id="email"
      placeholder="Email Address..."
    />
    <input
      class="textFields"
      type="text"
      name="company"
      id="company"
      placeholder="Company..."
    />
    <textarea
      name="message"
      id="message"
      placeholder="Message..."
    ></textarea>

    <div class="sendMessage">SEND MESSAGE</div>
  </div>
</div>
</div>`;
var israelContent = `<section class="hero3">
<img src="images/tour-01.jpg" alt="" />
<div class="overlay">
  <div class="container">
    <h1>Israel tour package:</h1>
  </div>
  <div class="price">STARTING FROM $1000 (prices may vary)</div>
</div>
</section>
<section class="pictures">
<div class="holder3">
  <img src="images/israel-tour-01.jpg" alt="" />
</div>
<div class="holder3">
  <img src="images/israel-tour-02.jpg" alt="" />
</div>
<div class="holder3">
  <img src="images/israel-tour-03.jpg" alt="" />
</div>
</section>
<section class="info">
<div class="info-container">
  <div class="title">
    <h1>Day #1:</h1>
  </div>
  <div class="text">
    <p>
      Sed ut perspiciatis unde omnis iste natus error sit voluptatem
      accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
      quae ab illo inventore veritatis et quasi architecto beatae vitae
      dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
      aspernatur aut odit aut fugit, sed quia consequuntur
    </p>
  </div>
  <div class="title">
    <h1>Day #2:</h1>
  </div>
  <div class="text">
    <p>
      Sed ut perspiciatis unde omnis iste natus error sit voluptatem
      accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
      quae ab illo inventore veritatis et quasi architecto beatae vitae
      dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
      aspernatur aut odit aut fugit, sed quia consequuntur
    </p>
  </div>
  <div class="title">
    <h1>Day #3:</h1>
  </div>
  <div class="text">
    <p>
      Sed ut perspiciatis unde omnis iste natus error sit voluptatem
      accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
      quae ab illo inventore veritatis et quasi architecto beatae vitae
      dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
      aspernatur aut odit aut fugit, sed quia consequuntur
    </p>
  </div>
</div>
<div class="bookNow">
  <a href="#">BOOK NOW</a>
</div>
</section>`;
var usaContent = `<section class="hero3">
<img src="images/tour-02.jpg" alt="" />
<div class="overlay">
  <div class="container">
    <h1>U.S.A tour package:</h1>
  </div>
  <div class="price">STARTING FROM $1500 (prices may vary)</div>
</div>
</section>
<section class="pictures">
<div class="holder3">
  <img src="images/usa-tour-01.jpg" alt="" />
</div>
<div class="holder3">
  <img src="images/usa-tour-02.jpg" alt="" />
</div>
<div class="holder3">
  <img src="images/usa-tour-03.jpg" alt="" />
</div>
</section>
<section class="info">
<div class="info-container">
  <div class="title">
    <h1>Day #1:</h1>
  </div>
  <div class="text">
    <p>
      Sed ut perspiciatis unde omnis iste natus error sit voluptatem
      accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
      quae ab illo inventore veritatis et quasi architecto beatae vitae
      dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
      aspernatur aut odit aut fugit, sed quia consequuntur
    </p>
  </div>
  <div class="title">
    <h1>Day #2:</h1>
  </div>
  <div class="text">
    <p>
      Sed ut perspiciatis unde omnis iste natus error sit voluptatem
      accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
      quae ab illo inventore veritatis et quasi architecto beatae vitae
      dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
      aspernatur aut odit aut fugit, sed quia consequuntur
    </p>
  </div>
  <div class="title">
    <h1>Day #3:</h1>
  </div>
  <div class="text">
    <p>
      Sed ut perspiciatis unde omnis iste natus error sit voluptatem
      accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
      quae ab illo inventore veritatis et quasi architecto beatae vitae
      dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
      aspernatur aut odit aut fugit, sed quia consequuntur
    </p>
  </div>
</div>
<div class="bookNow">
  <a href="#">BOOK NOW</a>
</div>
</section>`;
var australiaContent = `<section class="hero3">
<img src="images/tour-03.jpg" alt="" />
<div class="overlay">
  <div class="container">
    <h1>Australia tour package:</h1>
  </div>
  <div class="price">STARTING FROM $1800 (prices may vary)</div>
</div>
</section>
<section class="pictures">
<div class="holder3">
  <img src="images/aus-tour-01.jpg" alt="" />
</div>
<div class="holder3">
  <img src="images/aus-tour-02.jpg" alt="" />
</div>
<div class="holder3">
  <img src="images/aus-tour-03.jpg" alt="" />
</div>
</section>
<section class="info">
<div class="info-container">
  <div class="title">
    <h1>Day #1:</h1>
  </div>
  <div class="text">
    <p>
      Sed ut perspiciatis unde omnis iste natus error sit voluptatem
      accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
      quae ab illo inventore veritatis et quasi architecto beatae vitae
      dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
      aspernatur aut odit aut fugit, sed quia consequuntur
    </p>
  </div>
  <div class="title">
    <h1>Day #2:</h1>
  </div>
  <div class="text">
    <p>
      Sed ut perspiciatis unde omnis iste natus error sit voluptatem
      accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
      quae ab illo inventore veritatis et quasi architecto beatae vitae
      dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
      aspernatur aut odit aut fugit, sed quia consequuntur
    </p>
  </div>
  <div class="title">
    <h1>Day #3:</h1>
  </div>
  <div class="text">
    <p>
      Sed ut perspiciatis unde omnis iste natus error sit voluptatem
      accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
      quae ab illo inventore veritatis et quasi architecto beatae vitae
      dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
      aspernatur aut odit aut fugit, sed quia consequuntur
    </p>
  </div>
</div>
<div class="bookNow">
  <a href="#">BOOK NOW</a>
</div>
</section>`;
var newzealandContent = `<section class="hero3">
<img src="images/tour-04.jpg" alt="" />
<div class="overlay">
  <div class="container">
    <h1>New Zealand tour package:</h1>
  </div>
  <div class="price">STARTING FROM $1200 (prices may vary)</div>
</div>
</section>
<section class="pictures">
<div class="holder3">
  <img src="images/nz-tour-01.jpg" alt="" />
</div>
<div class="holder3">
  <img src="images/nz-tour-02.jpg" alt="" />
</div>
<div class="holder3">
  <img src="images/nz-tour-03.jpg" alt="" />
</div>
</section>
<section class="info">
<div class="info-container">
  <div class="title">
    <h1>Day #1:</h1>
  </div>
  <div class="text">
    <p>
      Sed ut perspiciatis unde omnis iste natus error sit voluptatem
      accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
      quae ab illo inventore veritatis et quasi architecto beatae vitae
      dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
      aspernatur aut odit aut fugit, sed quia consequuntur
    </p>
  </div>
  <div class="title">
    <h1>Day #2:</h1>
  </div>
  <div class="text">
    <p>
      Sed ut perspiciatis unde omnis iste natus error sit voluptatem
      accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
      quae ab illo inventore veritatis et quasi architecto beatae vitae
      dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
      aspernatur aut odit aut fugit, sed quia consequuntur
    </p>
  </div>
  <div class="title">
    <h1>Day #3:</h1>
  </div>
  <div class="text">
    <p>
      Sed ut perspiciatis unde omnis iste natus error sit voluptatem
      accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
      quae ab illo inventore veritatis et quasi architecto beatae vitae
      dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
      aspernatur aut odit aut fugit, sed quia consequuntur
    </p>
  </div>
</div>
<div class="bookNow">
  <a href="#">BOOK NOW</a>
</div>
</section>`;
var franceContent = `<section class="hero3">
<img src="images/tour-05.jpg" alt="" />
<div class="overlay">
  <div class="container">
    <h1>France tour package:</h1>
  </div>
  <div class="price">STARTING FROM $2500 (prices may vary)</div>
</div>
</section>
<section class="pictures">
<div class="holder3">
  <img src="images/france-tour-01.jpg" alt="" />
</div>
<div class="holder3">
  <img src="images/france-tour-02.jpg" alt="" />
</div>
<div class="holder3">
  <img src="images/france-tour-03.jpg" alt="" />
</div>
</section>
<section class="info">
<div class="info-container">
  <div class="title">
    <h1>Day #1:</h1>
  </div>
  <div class="text">
    <p>
      Sed ut perspiciatis unde omnis iste natus error sit voluptatem
      accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
      quae ab illo inventore veritatis et quasi architecto beatae vitae
      dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
      aspernatur aut odit aut fugit, sed quia consequuntur
    </p>
  </div>
  <div class="title">
    <h1>Day #2:</h1>
  </div>
  <div class="text">
    <p>
      Sed ut perspiciatis unde omnis iste natus error sit voluptatem
      accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
      quae ab illo inventore veritatis et quasi architecto beatae vitae
      dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
      aspernatur aut odit aut fugit, sed quia consequuntur
    </p>
  </div>
  <div class="title">
    <h1>Day #3:</h1>
  </div>
  <div class="text">
    <p>
      Sed ut perspiciatis unde omnis iste natus error sit voluptatem
      accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
      quae ab illo inventore veritatis et quasi architecto beatae vitae
      dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
      aspernatur aut odit aut fugit, sed quia consequuntur
    </p>
  </div>
</div>
<div class="bookNow">
  <a href="#">BOOK NOW</a>
</div>
</section>`;
var egyptContent = `<section class="hero3">
<img src="images/tour-06.jpg" alt="" />
<div class="overlay">
  <div class="container">
    <h1>Egypt tour package:</h1>
    <div class="price">STARTING FROM $900 (prices may vary)</div>
  </div>
</div>
</section>
<section class="pictures">
<div class="holder3">
  <img src="images/egypt-tour-01.jpg" alt="" />
</div>
<div class="holder3">
  <img src="images/egypt-tour-02.jpg" alt="" />
</div>
<div class="holder3">
  <img src="images/egypt-tour-03.jpg" alt="" />
</div>
</section>
<section class="info">
<div class="info-container">
  <div class="title">
    <h1>Day #1:</h1>
  </div>
  <div class="text">
    <p>
      Sed ut perspiciatis unde omnis iste natus error sit voluptatem
      accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
      quae ab illo inventore veritatis et quasi architecto beatae vitae
      dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
      aspernatur aut odit aut fugit, sed quia consequuntur
    </p>
  </div>
  <div class="title">
    <h1>Day #2:</h1>
  </div>
  <div class="text">
    <p>
      Sed ut perspiciatis unde omnis iste natus error sit voluptatem
      accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
      quae ab illo inventore veritatis et quasi architecto beatae vitae
      dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
      aspernatur aut odit aut fugit, sed quia consequuntur
    </p>
  </div>
  <div class="title">
    <h1>Day #3:</h1>
  </div>
  <div class="text">
    <p>
      Sed ut perspiciatis unde omnis iste natus error sit voluptatem
      accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
      quae ab illo inventore veritatis et quasi architecto beatae vitae
      dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
      aspernatur aut odit aut fugit, sed quia consequuntur
    </p>
  </div>
</div>
<div class="bookNow">
  <a href="#">BOOK NOW</a>
</div>
</section>`;
var japanContent = `<section class="hero3">
<img src="images/tour-07.jpg" alt="" />
<div class="overlay">
  <div class="container">
    <h1>Japan tour package:</h1>
  </div>
  <div class="price">STARTING FROM $1300 (prices may vary)</div>
</div>
</section>
<section class="pictures">
<div class="holder3">
  <img src="images/japan-tour-01.jpg" alt="" />
</div>
<div class="holder3">
  <img src="images/japan-tour-02.jpg" alt="" />
</div>
<div class="holder3">
  <img src="images/japan-tour-03.jpg" alt="" />
</div>
</section>
<section class="info">
<div class="info-container">
  <div class="title">
    <h1>Day #1:</h1>
  </div>
  <div class="text">
    <p>
      Sed ut perspiciatis unde omnis iste natus error sit voluptatem
      accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
      quae ab illo inventore veritatis et quasi architecto beatae vitae
      dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
      aspernatur aut odit aut fugit, sed quia consequuntur
    </p>
  </div>
  <div class="title">
    <h1>Day #2:</h1>
  </div>
  <div class="text">
    <p>
      Sed ut perspiciatis unde omnis iste natus error sit voluptatem
      accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
      quae ab illo inventore veritatis et quasi architecto beatae vitae
      dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
      aspernatur aut odit aut fugit, sed quia consequuntur
    </p>
  </div>
  <div class="title">
    <h1>Day #3:</h1>
  </div>
  <div class="text">
    <p>
      Sed ut perspiciatis unde omnis iste natus error sit voluptatem
      accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
      quae ab illo inventore veritatis et quasi architecto beatae vitae
      dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
      aspernatur aut odit aut fugit, sed quia consequuntur
    </p>
  </div>
</div>
<div class="bookNow">
  <a href="#">BOOK NOW</a>
</div>
</section>`;
var canadaContent = `<section class="hero3">
<img src="images/tour-08.jpg" alt="" />
<div class="overlay">
  <div class="container">
    <h1>Canada tour package:</h1>
  </div>
  <div class="price">STARTING FROM $2000 (prices may vary)</div>
</div>
</section>
<section class="pictures">
<div class="holder3">
  <img src="images/canada-tour-01.jpg" alt="" />
</div>
<div class="holder3">
  <img src="images/canada-tour-02.jpg" alt="" />
</div>
<div class="holder3">
  <img src="images/canada-tour-03.jpg" alt="" />
</div>
</section>
<section class="info">
<div class="info-container">
  <div class="title">
    <h1>Day #1:</h1>
  </div>
  <div class="text">
    <p>
      Sed ut perspiciatis unde omnis iste natus error sit voluptatem
      accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
      quae ab illo inventore veritatis et quasi architecto beatae vitae
      dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
      aspernatur aut odit aut fugit, sed quia consequuntur
    </p>
  </div>
  <div class="title">
    <h1>Day #2:</h1>
  </div>
  <div class="text">
    <p>
      Sed ut perspiciatis unde omnis iste natus error sit voluptatem
      accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
      quae ab illo inventore veritatis et quasi architecto beatae vitae
      dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
      aspernatur aut odit aut fugit, sed quia consequuntur
    </p>
  </div>
  <div class="title">
    <h1>Day #3:</h1>
  </div>
  <div class="text">
    <p>
      Sed ut perspiciatis unde omnis iste natus error sit voluptatem
      accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
      quae ab illo inventore veritatis et quasi architecto beatae vitae
      dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
      aspernatur aut odit aut fugit, sed quia consequuntur
    </p>
  </div>
</div>
<div class="bookNow">
  <a href="#">BOOK NOW</a>
</div>
</section>`;
var uaeContent = `<section class="hero3">
      <img src="images/tour-09.jpg" alt="" />
      <div class="overlay">
        <div class="container">
          <h1>U.A.E. tour package:</h1>
        </div>
        <div class="price">STARTING FROM $3000 (prices may vary)</div>
      </div>
    </section>
    <section class="pictures">
      <div class="holder3">
        <img src="images/uae-tour-01.jpg" alt="" />
      </div>
      <div class="holder3">
        <img src="images/uae-tour-02.jpg" alt="" />
      </div>
      <div class="holder3">
        <img src="images/uae-tour-03.jpg" alt="" />
      </div>
    </section>
    <section class="info">
      <div class="info-container">
        <div class="title">
          <h1>Day #1:</h1>
        </div>
        <div class="text">
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit, sed quia consequuntur
          </p>
        </div>
        <div class="title">
          <h1>Day #2:</h1>
        </div>
        <div class="text">
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit, sed quia consequuntur
          </p>
        </div>
        <div class="title">
          <h1>Day #3:</h1>
        </div>
        <div class="text">
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit, sed quia consequuntur
          </p>
        </div>
      </div>
      <div class="bookNow">
        <a href="#">BOOK NOW</a>
      </div>
    </section>`;


export function changePageContent(pageID){
    let pageName = pageID + "Content";
    $("#app").html(eval(pageName));
    if (pageID == "home"){
      $("#nav").removeClass("switch");
      $("#logo").html(`<img src="images/logo-white.png" alt="" />`);
      

    }else {
      $("#nav").addClass("switch");
      $("#logo").html(`<img src="images/logo-black.png" alt="" />`);
    }
}