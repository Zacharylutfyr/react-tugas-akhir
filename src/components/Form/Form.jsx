import React from 'react'

const Form = () => {
  return (
    <>
     {/* <!-- Form --> */}
    <div class="conten form-abput-us-martop">
        <div class="container">
            <div class="row">
                <div class="col-lg-12 wonderful-title px-5 text-center">
                    <h1>Need our help?</h1>
                    <h5>Contact us freely to get any information you need</h5>
                </div>
            </div>
            <div class="row">
                <div class="contact px-5">
                    <form class="row g-3">
                        <div class="col-md-6">
                            <label for="First name" class="form-label">First name</label>
                            <input type="text" class="form-control" id="First name" />
                        </div>
                        <div class="col-md-6">
                            <label for="Last name" class="form-label">Last name</label>
                            <input type="text" class="form-control" id="Last name" />
                        </div>
                        <div class="col-12">
                            <label for="Email" class="form-label">Email</label>
                            <input type="email" class="form-control" id="Email" placeholder="" />
                        </div>
                        <div class="col-12">
                            <label for="Phone number" class="form-label">Phone number</label
                >
                <input
                  type="text"
                  class="form-control"
                  id="Phone number"
                  placeholder="" />
              </div>
              <div class="col-12">
                <label for="Message" class="form-label">Message</label>
                            <textarea name="" id="Message" class="form-control" cols="30" rows="5"></textarea>
                        </div>
                        <div class="col-12">
                            <button type="submit" class="btn btn-primary">Sumbit</button>
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