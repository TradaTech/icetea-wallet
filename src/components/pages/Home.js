import React, { Component } from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
import banner from '../../assets/img/banner.png';
import newWallet from '../../assets/img/newWallet.svg';
import unlockWallet from '../../assets/img/unlockWallet.svg';

const PageContainer = styled.div`
  @media (min-width: 1025px) {
    margin: 0 auto;
    max-width: 1024px;
    padding: 0 20px;
    display: block;
  }
  @media (max-width: 1024px) and (min-width: 415px) {
    padding: 0 25px;
    margin: 0 auto;
  }
  @media (max-width: 414px) {
    padding: 0 25px;
  }
`;

const Banner = styled.div`
  @media (min-width: 1025px) {
    padding: 30px;
    padding-right: 0;
    -webkit-box-align: center;
    align-items: center;
    display: flex;
  }
  @media (max-width: 1024px) and (max-width: 1100px) and (min-width: 415px) {
    padding: 40px 0 50px;
    display: flex;
  }
  @media (max-width: 414px) {
    padding: 40px 0 40px;
  }
  .banner-text {
    -webkit-box-flex: 1;
    flex: 1;
    display: block;
    color: #003945;
    h1 {
      font-size: 45px;
      font-weight: 700;
      line-height: 47px;
      margin-bottom: 8px;
      letter-spacing: -1px;
      @media (max-width: 414px) {
        color: #003945;
        font-size: 33px;
        font-weight: 700;
        line-height: 42px;
        letter-spacing: -1px;
        margin: 0;
      }
    }
    p {
      color: #506175;
      margin-top: 17px;
      /* max-width: 450px; */
      @media (min-width: 1025px) {
        color: #506175;
        line-height: 21px;
      }
      @media (max-width: 414px) {
        color: #506175;
        margin-top: 17px;
        /* max-width: 325px; */
        height: 126px;
        line-height: 21px;
        font-size: 14px;
      }
    }
    @media (max-width: 1024px) and (min-width: 415px) {
      -webkit-box-flex: 1;
      -ms-flex: 1;
      flex: 1;
    }
    @media (max-width: 414px) {
      -webkit-box-flex: 1;
      -ms-flex: 1;
      flex: 1;
    }
  }
  .banner-image {
    -webkit-box-flex: 1;
    flex: 1;
    display: block;
    @media (max-width: 1024px) and (min-width: 415px) {
      -webkit-box-flex: 1;
      -ms-flex: 1;
      flex: 1;
    }
    img {
      @media (min-width: 1025px) {
        height: 452px;
        margin: 0 0 0 auto;
        display: block;
      }
      @media (max-width: 768px) {
        justify-content: flex-start;
        display: none;
      }
      @media (max-width: 1024px) and (min-width: 415px) {
        height: auto;
        margin-left: 20px;
        width: 300px;
      }
    }
  }
`;

const PromoCard = styled.div`
  grid-column-gap: 30px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  a {
    background-color: transparent;
    text-decoration: none;
  }
  @media (max-width: 1024px) and (min-width: 415px) {
    display: block;
    grid-column-gap: 30px;
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 414px) {
    grid-column-gap: 30px;
    display: block;
    grid-template-columns: 1fr 1fr;
  }
`;

const Card = styled.div`
  &.createWallet {
    background-color: #5a78f0;
  }

  &.accessWallet {
    background-color: #05c0a5;
  }

  &:hover {
    -webkit-box-shadow: 0 5px 24px rgba(0, 0, 0, 0.15);
    box-shadow: 0 5px 24px rgba(0, 0, 0, 0.15);
    top: -20px;
  }
  @media (min-width: 1025px) {
    -webkit-transition: all 0.3s ease;
    transition: all 0.3s ease;
    box-shadow: 0 5px 24px rgba(0, 0, 0, 0.15);
    top: 0px;
    height: 100%;
    border-radius: 10px;
    color: #fff;
    margin-bottom: 0;
    padding: 30px 40px;
    position: relative;
  }
  @media (max-width: 1024px) and (min-width: 415px) {
    border-radius: 4px;
    color: #fff;
    margin-bottom: 10px;
    padding: 30px 40px;
    position: relative;
  }
  @media (max-width: 414px) {
    border-radius: 4px;
    color: #fff;
    margin-bottom: 15px;
    padding: 11px;
    position: relative;
  }
`;

const CardWrapper = styled.div`
  -webkit-box-align: center;
  text-decoration: none;
  align-items: center;
  display: flex;
`;

const CardImage = styled.div`
  padding-right: 40px;
  img {
    width: 87px;
  }
  @media (max-width: 414px) {
    padding-right: 40px;
    display: none;
  }
`;

const CardContent = styled.div`
  color: #fff;
  h2 {
    font-size: 24px;
    font-weight: 500;
    margin-bottom: 5px;

    @media (max-width: 414px) {
      font-size: 14px;
      font-weight: 500;
      margin-bottom: 0;
      text-align: center;
      display: block;
      line-height: 42px;
    }
    .color-white {
      color: #fff;
      @media (max-width: 414px) {
        height: 325;
        width: 42px;
      }
    }
  }
  p {
    line-height: 19px;
    font-size: 14px;
    margin-bottom: 20px;
    @media (max-width: 414px) {
      display: none;
    }
  }
  .button {
    color: #fff;
    display: inline-block;
    font-size: 15px;
    font-weight: 500;
    @media (max-width: 414px) {
      display: none;
    }
  }
  @media (max-width: 414px) {
    display: inline;
    text-align: center;
    width: 100%;
  }
`;

class Home extends Component {
  gotoUnlock = () => {
    const { props } = this;
    props.history.push('/unlock');
  };

  gotoCreate = () => {
    const { props } = this;
    props.history.push('/create');
  };

  render() {
    return (
      <PageContainer>
        <Banner>
          <div className="banner-text">
            <h1>Icetea Wallet</h1>
            <p>
              Icetea Wallet is a free, client-side interface helping you interact with the Icetea blockchain. Our
              easy-to-use, open-source platform allows you to generate wallets, interact with smart contracts, and so
              much more.
            </p>
          </div>
          <div className="banner-image">
            <img src={banner} alt="" />
          </div>
        </Banner>
        <PromoCard>
          <div onClick={this.gotoCreate}>
            <Card className="createWallet">
              <CardWrapper>
                <CardImage>
                  <img src={newWallet} alt="" />
                </CardImage>
                <CardContent>
                  <h2 className="color-white">Create A New Wallet</h2>
                  <p>
                    Obtain an mnemonic and generate your TEA address. Saving and safekeeping the mnemonic will be your
                    responsibility.
                  </p>
                  <p className="button">Get Started &gt;&gt;&gt;</p>
                </CardContent>
              </CardWrapper>
            </Card>
          </div>
          <div onClick={this.gotoUnlock}>
            <Card className="accessWallet">
              <CardWrapper>
                <CardImage>
                  <img src={unlockWallet} alt="" />
                </CardImage>
                <CardContent>
                  <h2>Access My Wallet</h2>
                  <p>
                    Send or swap your TEA, interact with smart contracts, and more! This is where the magic happens..
                  </p>
                  <p className="button">Access Now &gt;&gt;&gt;</p>
                </CardContent>
              </CardWrapper>
            </Card>
          </div>
        </PromoCard>
      </PageContainer>
    );
  }
}

export default withRouter(Home);
