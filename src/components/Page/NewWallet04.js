import React from "react"
// import { Button, ButtonGroup } from 'reactstrap';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import * as actions from '../../actions'
import './NewWallet04.css'

class NewWallet04 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isPicMnemonicValid: true,
      renderMnemonic: [],
      confirmMnemonic: []
    }
    this.continueClick = this.continueClick.bind(this);
    this.previousClick = this.previousClick.bind(this);
    this.viewPrivate = this.viewPrivate.bind(this);
  }

  componentWillMount() {
    var { renderMnemonic } = this.state;
    if (!renderMnemonic.length) {
      renderMnemonic = this.props.wallet.mnemonic.split(' ');
      // update state
      this.setState({
        renderMnemonic,
      });
    }
  }

  continueClick() {
    // Change form no
    // this.props.onChangeForm('03');
    this.props.history.push("/Home");
  }

  viewPrivate() {
    window.alert("Private key: " + this.props.wallet.privateKey)
  }
  previousClick() {
    this.props.onChangeForm('03');
  }

  picMnemonic = (index) => {
    console.log(index)
    this.state.confirmMnemonic.push(this.state.renderMnemonic[index])
    this.state.renderMnemonic.splice(index,1);
    this.setState(this.state);
    this.validatePicMnemonic();
  }

  removeMnemonic = (index) => {
    console.log(index)
    this.state.renderMnemonic.push(this.state.confirmMnemonic[index])
    this.state.confirmMnemonic.splice(index,1);
    this.setState(this.state);
    this.validatePicMnemonic();
  }

  validatePicMnemonic = () => {
    var {confirmMnemonic, isPicMnemonicValid} = this.state;
    isPicMnemonicValid = true;
    for(var i = 0; i < confirmMnemonic.length; i++) {
      if(confirmMnemonic[i] === this.props.wallet.mnemonic.split(' ')[i]){
        isPicMnemonicValid = true;
      } else {
        isPicMnemonicValid = false;
        break;
      }
    }
    this.setState({isPicMnemonicValid});
  }

  render() {
    console.log('2',this.state.isPicMnemonicValid)
    return (
      <div className="box2" >
        <div>
          <div className="header1">Create New Wallet</div>
        </div>
        <div>
          <div className='header2' >
            <span className="page" >2</span>
            <span className="page totalPage">/2</span>
            <span className="title" >Choose Secondary Access</span>
          </div>
          <div className="textConfirmMnemonic">
            <span>Please select the Mnemonic Phrase in the correct order to ensure that your copy is correct.</span>
          </div>
          <div className= {this.state.isPicMnemonicValid ? 'mnemonicConfirm default':'mnemonicConfirm invalid'}>
            { this.state.confirmMnemonic.map((items,index)=>{
              return(
                <div className="mnemonicItem" key={index} >{items}
                <div className="removeMnemoItem" onClick={() => this.removeMnemonic(index)}  >
                  <i className="fa fa-times" size="10" color=""></i>
                </div>
              </div>
              )})
            }
          </div>
          { this.state.isPicMnemonicValid ? '' : <p className="incorrectMnemonic">Incorrect Mnemonic Phrase order. Please try again.</p> }
          <div className="mnemonicContent">
            { this.state.renderMnemonic.map((items,index)=>{
              return(
                <div className="mnemonicItem" key={index} onClick={() => this.picMnemonic(index)} >{items}</div>
              )})
            }
          </div>
          <div className="btControlArea">
            <div className="previousBt">
              <i className="fa fa-long-arrow-left" aria-hidden="true"></i>
              <div className="unlock" onClick={() => this.previousClick()} >Previous</div>
            </div>
            <button onClick={() => this.continueClick()} className='continueBt height mini'>
              <div>
                <span>Continue</span>
                <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
              </div>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    wallet: state.wallet
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSaveWallet: (data) => {
      dispatch(actions.saveWallet(data))
    },
    onChangeForm: (formNo) => {
      dispatch(actions.changeForm(formNo))
    }
  }
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NewWallet04))
// export default connect(mapStateToProps, mapDispatchToProps)(NewWallet04);
// export default NewWallet; mapStateToProps

