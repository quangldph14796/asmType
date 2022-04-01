import React from "react";

type Props = {};

const Home = (props: Props) => {
  return (
    <div>
      <div>
        <section className="py-5" id="features">
          <div className="container px-5 my-5">
            <div className="row gx-5">
              <div className="col-lg-4 mb-5 mb-lg-0">
                <h2 className="fw-bolder mb-0">
                  "Một khởi đầu mới cho phong cách thời trang của bạn !"
                </h2>
              </div>
              <div className="col-lg-8">
                <div className="row gx-5 row-cols-1 row-cols-md-2">
                  <div className="col mb-5 h-100">
                    <div className="feature bg-primary bg-gradient text-white rounded-3 mb-3">
                      <i className="bi bi-collection" />
                    </div>
                    <h2 className="h5">Trẻ Trung</h2>
                    <p className="mb-0">
                      Paragraph of text beneath the heading to explain the
                      heading. Here is just a bit more text.
                    </p>
                  </div>
                  <div className="col mb-5 h-100">
                    <div className="feature bg-primary bg-gradient text-white rounded-3 mb-3">
                      <i className="bi bi-building" />
                    </div>
                    <h2 className="h5">Phong Cách</h2>
                    <p className="mb-0">
                      Paragraph of text beneath the heading to explain the
                      heading. Here is just a bit more text.
                    </p>
                  </div>
                  <div className="col mb-5 mb-md-0 h-100">
                    <div className="feature bg-primary bg-gradient text-white rounded-3 mb-3">
                      <i className="bi bi-toggles2" />
                    </div>
                    <h2 className="h5">Lịch Lãm</h2>
                    <p className="mb-0">
                      Paragraph of text beneath the heading to explain the
                      heading. Here is just a bit more text.
                    </p>
                  </div>
                  <div className="col h-100">
                    <div className="feature bg-primary bg-gradient text-white rounded-3 mb-3">
                      <i className="bi bi-toggles2" />
                    </div>
                    <h2 className="h5">Thời Trang</h2>
                    <p className="mb-0">
                      Paragraph of text beneath the heading to explain the
                      heading. Here is just a bit more text.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Testimonial section*/}
        <div className="py-5 bg-light">
          <div className="container px-5 my-5">
            <div className="row gx-5 justify-content-center">
              <div className="col-lg-10 col-xl-7">
                <div className="text-center">
                  <div className="fs-4 mb-4 fst-italic">
                    "Chúng tôi mong muốn sự hài lòng của khách hàng khi đến với
                    cửa hàng chũng tôi, đó là niềm động lực lớn để chúng tôi
                    ngày càng phát triển !"
                  </div>
                  <div className="d-flex align-items-center justify-content-center">
                    <img
                      className="rounded-circle me-3"
                      src="https://dummyimage.com/40x40/ced4da/6c757d"
                      alt="..."
                    />
                    <div className="fw-bold">
                      August Lee
                      <span className="fw-bold text-primary mx-1">/</span>
                      CEO, HQT SHOP
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Blog preview section*/}
        <section className="py-5">
          <div className="container px-5 my-5">
            <div className="row gx-5 justify-content-center">
              <div className="col-lg-8 col-xl-6">
                <div className="text-center">
                  <h2 className="fw-bolder">Từ Blog của chúng tôi</h2>
                  <p className="lead fw-normal text-muted mb-5">
                    - Xem có những gì có thể giúp ích cho bạn nhé -
                  </p>
                </div>
              </div>
            </div>
            <div className="row gx-5">
              <div className="col-lg-4 mb-5">
                <div className="card h-100 shadow border-0">
                  <img
                    className="card-img-top"
                    src="https://dummyimage.com/600x350/ced4da/6c757d"
                    alt="..."
                  />
                  <div className="card-body p-4">
                    <div className="badge bg-primary bg-gradient rounded-pill mb-2">
                      News
                    </div>
                    <a
                      className="text-decoration-none link-dark stretched-link"
                      href="#!"
                    >
                      <h5 className="card-title mb-3">Blog post title</h5>
                    </a>
                    <p className="card-text mb-0">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                  </div>
                  <div className="card-footer p-4 pt-0 bg-transparent border-top-0">
                    <div className="d-flex align-items-end justify-content-between">
                      <div className="d-flex align-items-center">
                        <img
                          className="rounded-circle me-3"
                          src="https://dummyimage.com/40x40/ced4da/6c757d"
                          alt="..."
                        />
                        <div className="small">
                          <div className="fw-bold">Kelly Rowan</div>
                          <div className="text-muted">
                            March 12, 2022 · 6 min read
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 mb-5">
                <div className="card h-100 shadow border-0">
                  <img
                    className="card-img-top"
                    src="https://dummyimage.com/600x350/adb5bd/495057"
                    alt="..."
                  />
                  <div className="card-body p-4">
                    <div className="badge bg-primary bg-gradient rounded-pill mb-2">
                      Media
                    </div>
                    <a
                      className="text-decoration-none link-dark stretched-link"
                      href="#!"
                    >
                      <h5 className="card-title mb-3">
                        Another blog post title
                      </h5>
                    </a>
                    <p className="card-text mb-0">
                      This text is a bit longer to illustrate the adaptive
                      height of each card. Some quick example text to build on
                      the card title and make up the bulk of the card's content.
                    </p>
                  </div>
                  <div className="card-footer p-4 pt-0 bg-transparent border-top-0">
                    <div className="d-flex align-items-end justify-content-between">
                      <div className="d-flex align-items-center">
                        <img
                          className="rounded-circle me-3"
                          src="https://dummyimage.com/40x40/ced4da/6c757d"
                          alt="..."
                        />
                        <div className="small">
                          <div className="fw-bold">Josiah Barclay</div>
                          <div className="text-muted">
                            March 23, 2022 · 4 min read
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 mb-5">
                <div className="card h-100 shadow border-0">
                  <img
                    className="card-img-top"
                    src="https://dummyimage.com/600x350/6c757d/343a40"
                    alt="..."
                  />
                  <div className="card-body p-4">
                    <div className="badge bg-primary bg-gradient rounded-pill mb-2">
                      News
                    </div>
                    <a
                      className="text-decoration-none link-dark stretched-link"
                      href="#!"
                    >
                      <h5 className="card-title mb-3">
                        The last blog post title is a little bit longer than the
                        others
                      </h5>
                    </a>
                    <p className="card-text mb-0">
                      Some more quick example text to build on the card title
                      and make up the bulk of the card's content.
                    </p>
                  </div>
                  <div className="card-footer p-4 pt-0 bg-transparent border-top-0">
                    <div className="d-flex align-items-end justify-content-between">
                      <div className="d-flex align-items-center">
                        <img
                          className="rounded-circle me-3"
                          src="https://dummyimage.com/40x40/ced4da/6c757d"
                          alt="..."
                        />
                        <div className="small">
                          <div className="fw-bold">Evelyn Martinez</div>
                          <div className="text-muted">
                            April 2, 2022 · 10 min read
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
