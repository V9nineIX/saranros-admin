import React, { Component } from 'react';
import { Row } from 'reactstrap';
import { connect } from 'react-redux'
import { addUser, updateuser, getdetailuserupdate } from './../../actions/user'
import './index.scss'
class User extends Component {



  constructor(props) {
    super(props)
    this.state = {
      value: this.props.match && this.props.match.params && this.props.match.params.id ?
        {
          // picture: {},
          username: '',
          password: '',
          mobile: '',
          email: '',
          confirmpassword: '',
          id: ''
        }
        : {
          // picture: {},
          username: '',
          password: '',
          mobile: '',
          email: '',
          confirmpassword: ''
        },
      error: {
        picture: {},
        username: '',
        password: '',
        mobile: '',
        email: '',
        confirmpassword: '',
        errorconfirmpassword: ''
      },
      file: {},
      imagePreviewUrl: '',
      statusupdate: false,

    }
  }

  componentDidMount() {

    if (this.props.match && this.props.match.params && this.props.match.params.id) {
      this.props.getdetailuserupdate(this.props.match.params.id)
      this.setState({
        ...this.state,
        statusupdate: true
      })
    }
  }

  componentWillReceiveProps(nextProps) {

    if (nextProps && nextProps.detailuserupdate) {
      this.setState({
        value: {
          ...this.state.value,
          password: '',
          confirmpassword: '',
          username: nextProps.detailuserupdate.username ? nextProps.detailuserupdate.username : '',
          mobile: nextProps.detailuserupdate.mobile ? nextProps.detailuserupdate.mobile : '',
          email: nextProps.detailuserupdate.email ? nextProps.detailuserupdate.email : '',
          id: nextProps.detailuserupdate.id
        }
      })
    }
  }

  onChang = (e) => {
    this.setState({
      value: {
        ...this.state.value,
        [e.target.name]: e.target.value
      }
    }, () => {


    })
  }
  selectFile = (fileupload) => {
    var self = this;
    var file = fileupload[0];

    let reader = new FileReader()
    reader.onload = function (upload) {
      self.setState({
        value: {
          ...self.state.value,
          picture: file
        },
        imagePreviewUrl: upload.target.result
      });
    };
    reader.readAsDataURL(file);
  }

  checkEmail = (email) => {

    let statusemail = false

    if (/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email)) {
      statusemail = true
    }

    return statusemail
  }


  clearData = () => {
    this.setState({
      value: {
        // picture: {},
        username: '',
        password: '',
        mobile: '',
        email: '',
        confirmpassword: ''
      }
    })
  }


  changFormatMobile = () => {
    let input = '0812345678'
    // Strip all characters from the input except digits
    input = input.replace(/\D/g, '');

    // Trim the remaining input to ten characters, to preserve phone number format
    input = input.substring(0, 10);

    // Based upon the length of the string, we add formatting as necessary
    var size = input.length;
    if (size == 0) {
      input = input;
    } else if (size < 4) {
      input = input;
    } else if (size < 7) {
      input = input.substring(0, 3) + '-' + input.substring(3, 6);
    } else {
      input = input.substring(0, 3) + '-' + input.substring(3, 6) + '-' + input.substring(6, 10);
    }
  }

  onSubmitAddUser = () => {
    let errors = {}
    let statusconfirmpassword = false
    // if (this.state.statusupdate) {
    //   errors = {
    //     username: this.state.value.username.trim().length === 0 ? 'Please Enter Last UserName.' : null,
    //     mobile: this.state.value.mobile.trim().length === 0 ? 'Please Enter Phone Number.' : null,
    //     email: this.state.value.email.trim().length === 0 ? 'Please Enter Email.' : null
    //   }

    //   if (this.state.value.email.trim().length !== 0) {
    //     let statusemail = this.checkEmail(this.state.value.email)
    //     if (!statusemail) {
    //       this.setState({
    //         error: {
    //           ...errors,
    //           email: 'กรุณากรอก email ให้ถูกต้อง'
    //         }
    //       })
    //       return
    //     }
    //   }




    //   if (this.state.value.username.trim().length === 0 || this.state.value.mobile.trim().length === 0 ||
    //     this.state.value.email.trim().length === 0) {
    //     this.setState({ error: errors })
    //     return
    //   } else {
    //     this.setState({ error: {} })
    //   }

    // } else {
    errors = {
      username: this.state.value.username.trim().length === 0 ? 'Please Enter Last UserName.' : null,
      password: this.state.value.password.trim().length === 0 ? 'Please Enter Password.' : null,
      mobile: this.state.value.mobile.trim().length === 0 ? 'Please Enter Phone Number.' : null,
      email: this.state.value.email.trim().length === 0 ? 'Please Enter Email.' : null,
      confirmpassword: this.state.value.confirmpassword.trim().length === 0 ? 'Please Enter confirmpassword.' : null,
      errorconfirmpassword: this.state.value.password.trim().length !== 0 && this.state.value.confirmpassword.trim().length !== 0 ? (this.state.value.password !== this.state.value.confirmpassword ? `Password dont't match` : `Password match`) : ''
    }


    if (errors.errorconfirmpassword === `Password dont't match`) {
      statusconfirmpassword = true
    }

    if (this.state.value.email.trim().length !== 0) {
      let statusemail = this.checkEmail(this.state.value.email)
      if (!statusemail) {
        this.setState({
          error: {
            ...errors,
            email: 'กรุณากรอก email ให้ถูกต้อง'
          }
        })
        return
      }
    }

    if (this.state.value.username.trim().length === 0 || this.state.value.password.trim().length === 0 || this.state.value.mobile.trim().length === 0 ||
      this.state.value.email.trim().length === 0 || this.state.value.confirmpassword.trim().length === 0 || statusconfirmpassword) {
      this.setState({ error: errors })
      return
    } else {
      this.setState({ error: {} })
    }

    // }



    if (this.state.value.email.trim().length !== 0) {
      let statusemail = this.checkEmail(this.state.value.email)
      if (!statusemail) {
        this.setState({
          error: {
            ...this.state.error,
            email: 'กรุณากรอก email ให้ถูกต้อง'
          }
        })
        return
      }
    }

    // this.setState({ error: {} })



    ///check update or add

    if (this.state.statusupdate) {
      this.props.updateuser(this.state.value)
    } else {
      this.props.addUser(this.state.value)
    }


  }


  render() {
    return (

      <div className="animated fadeIn">
        <Row>
          <div className="col-12 d-flex justify-content-center">
            <div className="col-12 col-sm-8 col-md-8 col-lg-6">
              <div className="card">
                <div className="card-header">
                  <strong>User</strong><small> Form</small>
                </div>
                <form className="text-left form-validate" onSubmit={e => {
                  e.preventDefault();
                  this.onSubmitAddUser()
                }}>
                  <div className="card-body">
                    <div className="form-group">
                      <label className="">Email</label>
                      <input type="text" placeholder="Enter your Last Email" className="form-control" name='email' value={this.state.value.email} onChange={this.onChang} />
                      <small id="emailHelp" className="form-text error-validate">{this.state.error.email}</small>
                    </div>
                    <div className="form-group">
                      <label className="">Phone number</label>
                      <input type="text" placeholder="Enter your Last Phone number" className="form-control" name='mobile' value={this.state.value.mobile} onChange={this.onChang} />
                      <small id="emailHelp" className="form-text error-validate">{this.state.error.mobile}</small>
                    </div>
                    <div className="form-group">
                      <label className="">Username</label>
                      <input type="text" placeholder="Enter your Last Username" className="form-control" name='username' value={this.state.value.username} onChange={this.onChang} />
                      <small id="emailHelp" className="form-text error-validate">{this.state.error.username}</small>
                    </div>
                    <div className="form-group">
                      <label className="">Password</label>
                      <input type="password" placeholder="Enter your Last Password" className="form-control" name='password' value={this.state.value.password} onChange={this.onChang} />
                      <small id="emailHelp" className="form-text error-validate">{this.state.error.password}</small>
                    </div>
                    <div className="form-group">
                      <label className="">Confirm password</label>
                      <input type="password" placeholder="Enter your Last Confirm password" className="form-control" name='confirmpassword' value={this.state.value.confirmpassword} onChange={this.onChang} />
                      <small id="emailHelp" className="form-text error-validate">{this.state.error.confirmpassword}</small>
                      <small id="emailHelp" className="form-text error-validate">{this.state.error.errorconfirmpassword}</small>
                    </div>
                  </div>
                  <div className="card-footer">
                    <button type="submit" className="btn btn-primary btn-sm">
                      <i className="fa fa-dot-circle-o"></i> Submit
                </button>
                    <button type="reset" className="btn btn-danger btn-sm" onClick={() => this.clearData()}>
                      <i className="fa fa-ban"></i> Reset
                </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </Row>
      </div>
    )

  }
}


function bindActions(dispatch) {
  return {
    addUser: (datauser) => dispatch(addUser(datauser)),
    updateuser: (datauser) => dispatch(updateuser(datauser)),
    getdetailuserupdate: (id) => dispatch(getdetailuserupdate(id))
  };
}

const mapStateToProps = state => ({
  detailuserupdate: state.user.detailuserupdate
});
export default connect(mapStateToProps, bindActions)(User)

