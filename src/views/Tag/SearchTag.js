import React from 'react';

const SearchTag = () => {
  return (

    <div className="col-12 d-flex  justify-content-center">
    <div className="col-12 col-sm-12 col-md-12 col-lg-12">
      <div className="card">

        <div className="card-header d-flex justify-content-between">
          <div
            className="d-sm-inline-flex d-md-inline-flex d-lg-inline-flex align-items-center mr-2">
            <div className="float-left">
              <i className="fa fa-tag"></i>
              <span className="pl-2 pr-2">Search tag</span>
            </div>
          </div>
        </div>
        <br/>

        <div
          className="col-xs-12 col-sm-12 col-md-6 offset-md-3 col-lg-6 offset-lg-3 pL-5">
          <div className="form-group mb-2 w-100">
            <div className="input-group align-items-center w-100">
              <span className="pr-2">Tag name</span>
              <div className="tag-search-wrap">
                <input type="text" className="form-control"/>
                <div className="input-group-append">
                  <button
                    className="btn btn-outline-secondary dropdown-toggle"
                    type="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"></button>
                  <div className="dropdown-menu">
                    <a className="dropdown-item" href="#">option1</a>
                    <a className="dropdown-item" href="#">option2</a>
                    <a className="dropdown-item" href="#">option3</a>
                    <a className="dropdown-item" href="#">option4</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="col-xs-12 col-sm-12 col-md-6 offset-md-3 col-lg-6 offset-lg-3 pL-5">
          <div className="form-group row">
            <div className="input-group align-items-center">
              <span className="pr-2">Is recommend</span>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="inlineCheckbox1"
                  value="option1"/>
              </div>
            </div>
          </div>
        </div>
        <div
          className="col-xs-12 col-sm-12 col-md-6 offset-md-3 col-lg-6 offset-lg-3 d-flex justify-content-end pb-4">
          <button type="button" className="btn btn-success">
            <i className="fa fa-search"></i>
            <span className="pl-2">Search</span>
          </button>
        </div>

      </div>
    </div>
  </div>
  )
}


export default SearchTag;
