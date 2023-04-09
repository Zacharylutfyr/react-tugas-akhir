import React from 'react'

const Content = () => {
  return (
    <>
     {/* <!-- Most Picked Destination --> */}
    <div class="conten">
        <div class="container">
            <div class="row">
                <div class="col-6 most-text px-5">
                    <h4>Recommend</h4>
                    <h2>Most Picked Destination</h2>
                </div>
                <div class="col-6 text-end px-5">
                    <button>See all</button>
                </div>
            </div>
            <div class="row">
                <div class="d-flex flex-wrap justify-content-center">
                    <div class="img-box">
                        <img src="img/nusa.jpg" alt="" />
                        <h2>Nusa Penida</h2>
                        <p>Kelungkung, Bali</p>
                    </div>
                    <div class="img-box">
                        <img src="img/nusa.jpg" alt="" />
                        <h2>Nusa Penida</h2>
                        <p>Kelungkung, Bali</p>
                    </div>
                    <div class="img-box">
                        <img src="img/nusa.jpg" alt="" />
                        <h2>Nusa Penida</h2>
                        <p>Kelungkung, Bali</p>
                    </div>
                    <div class="img-box">
                        <img src="img/nusa.jpg" alt="" />
                        <h2>Nusa Penida</h2>
                        <p>Kelungkung, Bali</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- Last Most Picked Destination --> */}
    </>
  )
}

export default Content