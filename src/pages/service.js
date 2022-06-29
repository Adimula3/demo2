import React from "react";

function Service() {
    return (
      <div className="services">
          <div className="container">
              <h1>Services</h1>
              <div className="row row-cols-1 row-cols-md-3 g-4">
                  <div className="col">
                      <div className="card">
                          <img src={require('../assets/service-6.jpg')} className="card-img-top" alt="..." />
                              <div className="card-body">
                                  <h5 className="card-title">Air Freight</h5>
                                  <p className="card-text">This is a longer card with supporting text below as a natural
                                      lead-in to additional content. This content is a little bit longer.</p>
                              </div>
                      </div>
                  </div>
                  <div className="col">
                      <div className="card">
                          <img src={require('../assets/service-4.jpg')} className="card-img-top" alt="..." />
                              <div className="card-body">
                                  <h5 className="card-title">Ocean Freight</h5>
                                  <p className="card-text">This is a longer card with supporting text below as a natural
                                      lead-in to additional content. This content is a little bit longer.</p>
                              </div>
                      </div>
                  </div>
                  <div className="col">
                      <div className="card">
                          <img src={require('../assets/service-3.jpg')} className="card-img-top" alt="..." />
                              <div className="card-body">
                                  <h5 className="card-title">Road Freight</h5>
                                  <p className="card-text">This is a longer card with supporting text below as a natural
                                      lead-in to additional content. This content is a little bit longer.</p>
                              </div>
                      </div>
                  </div>
                  <div className="col">
                      <div className="card">
                          <img src={require('../assets/service-5.jpg')} className="card-img-top" alt="..." />
                              <div className="card-body">
                                  <h5 className="card-title">Customs Clearance</h5>
                                  <p className="card-text">This is a longer card with supporting text below as a natural
                                      lead-in to additional content. This content is a little bit longer.</p>
                              </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    );
}
export default Service;
