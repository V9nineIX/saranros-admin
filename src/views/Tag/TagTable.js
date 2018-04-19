import React  from 'react'

const TagTable = (props) => {

   return(
    <div className="col-12 d-flex  justify-content-center">
    <div className="col-12 col-sm-12 col-md-12 col-lg-12">
      <div className="card">
        <div className="card-header d-flex justify-content-between">
          <div
            className="d-sm-inline-flex d-md-inline-flex d-lg-inline-flex align-items-center mr-2">
            <div className="float-left">
              <i className="fa fa-tag"></i>
              <span className="pl-2 pr-2">Tag</span>
            </div>
          </div>
          <div className="d-flex align-items-end ">
            <button type="button" 
                 className="btn btn-success"
                 onClick={this.props.handleAddTag}
                 >
              <i className="fa fa-plus-circle"></i>
              <span className="pl-2">Add</span>
            </button>
          </div>
        </div>
        <div className="card-body">
          <div className="table-responsive">
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>No.</th>
                  <th>Tag name</th>
                  <th>Is recommend</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                { this.props.tags.map( function(idx , item) {
                     return (
                            <tr key={idx} >
                            <td>{idx}</td>
                            <td>{item.name}</td>
                            <td>
                              <div className="form-check form-check-inline">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  />
                              </div>
                            </td>
                            <td>
                              <div className="btn-group" role="group">
                                <button
                                  type="button"
                                  className="btn btn-primary text-white"
                                  data-toggle="modal"
                                  data-target="#exampleModal">
                                  <i className="fa fa-edit"></i>
                                </button>
                                <button
                                  type="button"
                                  className="btn btn-danger text-white"
                                  data-toggle="modal"
                                  data-target="#delete">
                                  <i className="fa fa-trash"></i>
                                </button>
                              </div>
                            </td>
                          </tr>
                     ) 
                  }
                )}
              </tbody>
            </table>
          </div>
          <ul className="pagination">
            <li className="page-item disabled">
              <a href="#" className="page-link" aria-label="Previous">
                <span aria-hidden="true">Prev</span>
                <span className="sr-only">Previous</span>
              </a>
            </li>
            <li className="page-item active">
              <a href="#" className="page-link">1</a>
            </li>
            <li className="page-item">
              <a href="#" className="page-link">2</a>
            </li>
            <li className="page-item">
              <a href="#" className="page-link">3</a>
            </li>
            <li className="page-item">
              <a href="#" className="page-link">4</a>
            </li>
            <li className="page-item">
              <a href="#" className="page-link" aria-label="Next">
                <span aria-hidden="true">Next</span>
                <span className="sr-only">Next</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
   )
}

export default TagTable;