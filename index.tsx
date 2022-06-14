<>
  <meta charSet="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Vital BCSD</title>
  <link rel="icon" href="images/favicon.png" type="image" />
  <link rel="stylesheet" href="css/bootstrap.css" />
  <link
    rel="stylesheet"
    media="screen"
    href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.5/css/bootstrap.min.css"
  />
  <link rel="stylesheet" href="css/index.css" />
  <link rel="preconnect" href="https://fonts.gstatic.com" />
  <link
    href="https://fonts.googleapis.com/css2?family=Montserrat:wght@600&display=swap"
    rel="stylesheet"
  />
  <link
    href="https://fonts.googleapis.com/css2?family=Yellowtail&display=swap"
    rel="stylesheet"
  />
  <link rel="preconnect" href="https://fonts.gstatic.com" />
  <link rel="stylesheet" href="js/jquery.js" />
  <link rel="stylesheet" media="screen" href="css/font.css" type="text/css" />
  {/*  */}
  <style dangerouslySetInnerHTML={{ __html: "\n\n\t" }} />
  <div className="wrapper">
    {/* Sidebar  */}
    <nav id="sidebar">
      <div className="sidebar-header">
        <img src="images/lsems.png" style={{ width: 50, height: 50 }} alt="" />
        <h3>Blaine County Sheriff's Department</h3>
      </div>
      <ul className="list-unstyled components">
        <li className="active">
          <a href="index.html">Home Page</a>
        </li>
        <li>
          <a
            href="#homemenu"
            data-toggle="collapse"
            aria-expanded="false"
            className="dropdown-toggle"
          >
            Headers
          </a>
          <ul className="collapse list-unstyled show" id="homemenu">
            <li>
              <a href="HC-sign.html">High Command</a>
            </li>
            <li>
              <a href="C-sign.html">Command</a>
            </li>
            <li>
              <a href="D-sign.html">Deputy</a>
            </li>
          </ul>
        </li>
        <li>
          <a
            href="#headermenu"
            data-toggle="collapse"
            aria-expanded="false"
            className="dropdown-toggle"
          >
            Headers
          </a>
          <ul className="collapse list-unstyled show" id="headermenu">
            <li>
              <a href="SDheader.html">SD Headers</a>
            </li>
          </ul>
        </li>
        <li>
          <a href="title.html">Title</a>
        </li>
        <li>
          <a href="https://bcsd-hammertime.vercel.app">Hammer Time</a>
        </li>
      </ul>
      <div className="credits">
        <p>Credits: Jeremy.#7777</p>
      </div>
    </nav>
    {/* Page Content  */}
    <div className="container-fluid content">
      <div className="row">
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="container-fluid">
            <ul className="navUl">
              <li>
                <button
                  type="button"
                  id="sidebarCollapse"
                  className="btn btn-info navbar-btn"
                >
                  <i className="fas fa-align-left" />
                </button>
              </li>
              <li>
                <h3>Blaine County Sheriff's Department</h3>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      <div className="row">
        <div className="col-md-12">
          <div className="carousel slide" id="carousel-687127">
            <ol className="carousel-indicators">
              <li
                data-slide-to={0}
                data-target="#carousel-687127"
                className="active"
              ></li>
              <li data-slide-to={1} data-target="#carousel-687127"></li>
              <li data-slide-to={2} data-target="#carousel-687127"></li>
              <li data-slide-to={3} data-target="#carousel-687127"></li>
            </ol>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  className="d-block w-100"
                  alt="Carousel Bootstrap First"
                  src="images/1.jpg"
                />
                {/* 
                          <div class="carousel-caption">
                          <h4>
                          First Thumbnail label
                          </h4>
                          <p>
                          Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.
                          </p>
                          </div>
                          */}
              </div>
              <div className="carousel-item">
                <img
                  className="d-block w-100"
                  alt="Carousel Bootstrap Second"
                  src="images/2.jpg"
                />
              </div>
              <div className="carousel-item">
                <img
                  className="d-block w-100"
                  alt="Carousel Bootstrap Third"
                  src="images/3.jpg"
                />
              </div>
              <div className="carousel-item">
                <img
                  className="d-block w-100"
                  alt="Carousel Bootstrap Fourth"
                  src="images/4.jpg"
                />
              </div>
            </div>
            <a
              className="carousel-control-prev"
              href="#carousel-687127"
              data-slide="prev"
            >
              <span className="carousel-control-prev-icon" />{" "}
              <span className="sr-only">Previous</span>
            </a>{" "}
            <a
              className="carousel-control-next"
              href="#carousel-687127"
              data-slide="next"
            >
              <span className="carousel-control-next-icon" />{" "}
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* jQuery CDN - Slim version (=without AJAX) */}
  {/* Popper.JS */}
  {/* Bootstrap JS */}
  {/*    */}
</>
 
