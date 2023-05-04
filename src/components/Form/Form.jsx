import React from 'react'

const Form = () => {
  return (
    <>
     {/* <!-- Form --> */}
    <div className="conten form-abput-us-martop">
        <div className="container">
            <div className="row">
                <div className="col-lg-12 wonderful-title px-5 text-center">
                    <h1>Need our help?</h1>
                    <h5>Contact us freely to get any information you need</h5>
                </div>
            </div>
            <div className="row">
                <div className="contact px-5">
                    <form className="row g-3">
                        <div className="col-md-6">
                            <label for="First name" className="form-label">First name</label>
                            <input type="text" className="form-control" id="First name" />
                        </div>
                        <div className="col-md-6">
                            <label for="Last name" className="form-label">Last name</label>
                            <input type="text" className="form-control" id="Last name" />
                        </div>
                        <div className="col-12">
                            <label for="Email" className="form-label">Email</label>
                            <input type="email" className="form-control" id="Email" placeholder="" />
                        </div>
                        <div className="col-12">
                            <label for="Phone number" className="form-label">Phone number</label
                >
                <input
                  type="text"
                  className="form-control"
                  id="Phone number"
                  placeholder="" />
              </div>
              <div className="col-12">
                <label for="Message" className="form-label">Message</label>
                            <textarea name="" id="Message" className="form-control" cols="30" rows="5"></textarea>
                        </div>
                        <div className="col-12">
                            <button type="submit" className="btn btn-primary">Sumbit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- Last Form --> */}
    </>
  )
}

export default Form