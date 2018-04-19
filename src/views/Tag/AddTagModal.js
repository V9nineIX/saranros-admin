import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class AddTagModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: this.props.showAddTagModal,
      tagName: '',
      isRecommend:false
    };
  }

  componentWillReceiveProps(nextProps){
    this.setState({
      modal : nextProps.showAddTagModal
    });
  }

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  }

  handlerSave = () => {
     this.props.handleSave(this.state)
  }

  handlerChangeTagName = (evt) => {
    this.setState({ tagName : evt.target.value });
  }

  handlerChangeIsRecommend = (evt) =>{
    this.setState({ isRecommend : evt.target.checked });
  }

  render() {
    return (
      <div>
        <Modal isOpen={this.state.modal} 
               toggle={this.toggle}
               className={this.props.className}
               >
          <ModalHeader 
          className="green-header-modal" 
          toggle={this.toggle}>Add new Tag</ModalHeader>
          <ModalBody>
          <form className="form-inline">
                <div className="form-group mb-2 col-12">
                  <label>Tag name</label>
                  <input
                  value={this.state.tagName}
                  onChange={this.handlerChangeTagName}
                  className="form-control mx-sm-5 mx-md-5 mx-lg-5" />
                </div>
                <div className="form-group col-12">
                  <label>Is recommend</label>
                  <input 
                    className="form-check-input is-invalid mx-4" 
                    type="checkbox"
                    checked={this.state.isRecommend}
                    onChange={this.handlerChangeIsRecommend}
                    onClick={this.handlerChangeIsRecommend}
                    />
                </div>
                </form>
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
            <Button color="success" onClick={this.handlerSave}>Save</Button>
         
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default AddTagModal;