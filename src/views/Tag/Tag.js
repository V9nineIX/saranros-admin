import React, {Component} from 'react';
import {
  Row,
  Col,
  Button,
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Card,
  CardHeader,
  CardFooter,
  CardBody,
  Collapse,
  Form,
  FormGroup,
  FormText,
  Label,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Tooltip
} from 'reactstrap';
import { connect } from 'react-redux';
import AddTagModal from '../Tag/AddTagModal';
import { getListTags , addTag  } from '../../actions/tag'; 
import SearchTag from './SearchTag';
import TagTable from './TagTable';
import { searchuser } from '../../actions/user';

class Tag extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dropdownOpen: false,
      showAddTagModal: false
    };
  }

  componentDidMount(){
    console.log("props " , this.props);
    this.props.getListTags();
  }

  toggle = () => {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  handleAddTag = () => {
    this.setState({
        showAddTagModal : true  
    });  
  }

  handleSave = (formData) => {

    let { tagName , isRecommend } = formData;  
    let saveData =  {
       tagName  : tagName,
       isReacommend : isRecommend,
       create_by : this.props.userData.id
    }

  }


  render() {
    return (
      <div className="animated fadeIn">
        <Row>

           <SearchTag/>
      
      

          <AddTagModal 
           handleSave = {this.handleSave} 
           showAddTagModal={this.state.showAddTagModal}  />

          {/*Edit Modal*/}
          <div
            className="modal fade"
            id="exampleModal"
            role="dialog"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true">
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header bg-primary">
                  <h5 className="modal-title" id="exampleModalLabel">Edit tag</h5>
                  <button
                    type="button"
                    className="close text-white"
                    data-dismiss="modal"
                    aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                  <form className="form-inline">
                    <div className="form-group mb-2 col-12">
                      <label>Tag name</label>
                      <input className="form-control mx-sm-5 mx-md-5 mx-lg-5"/>
                    </div>
                    <div className="form-group col-12">
                      <label>Is recommend</label>
                      <input
                        className="form-check-input is-invalid mx-4"
                        type="checkbox"
                        value=""
                        id="invalidCheck3"
                        required/>
                    </div>
                  </form>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                  <button type="button" className="btn btn-primary">Save changes</button>
                </div>
              </div>
            </div>
          </div>

          {/* delete  modal   */}
          <div
            className="modal fade"
            id="delete"
            role="dialog"
            aria-labelledby="delete"
            aria-hidden="true">
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header bg-danger">
                  <h5 className="modal-title" id="delete">Delete</h5>
                  <button
                    type="button"
                    className="close text-white"
                    data-dismiss="modal"
                    aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                  ...
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                  <button type="button" className="btn btn-danger">Delete</button>
                </div>
              </div>
            </div>
          </div>

        </Row>
      </div>

    );
  }

}
  

  function bindActions(dispatch) {
    return {
        getListTags :() => dispatch(getListTags()),
        // addTag : (tagData) => dispatch(addTag(tagData))
    };
  }
  
  const mapStateToProps = state => (
    {
      userData: state.login.userData,
      listTags:  state.tag.tags
  });


export default connect(mapStateToProps, bindActions)(Tag)
