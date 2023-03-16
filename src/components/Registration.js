import React, { useState, useEffect } from 'react';
import $ from 'jquery';
import logo from '../img/logo.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import '../css/style.css';

function RegistrationForm() {
  const [sponcerId, setSponcerId] = useState('TRbzZEXSaQSteTrAK8jpNrpL4KD4i5hFu6');
  const [sPackage, setSPackage] = useState(30);
  const [walletAddress, setWalletAddress] = useState('');
  const [trxBalance, setTrxBalance] = useState('');
  const [tokenBalance, setTokenBalance] = useState('');

  useEffect(() => {
        // Initialize Owl Carousel
        // $(".owl-carousel").owlCarousel({
        //   items: 1,
        //   loop: true,
        //   autoplay: true,
        //   nav: false,
        //   dots: true,
        //   autoplayTimeout: 5000,
        //   smartSpeed: 1000,
        // });
    
        // // Initialize Tempus Dominus DateTimePicker
        // $("#datetimepicker").datetimepicker({
        //   format: "L",
        //   defaultDate: new Date(),
        //   icons: {
        //     time: "fa fa-clock-o",
        //     date: "fa fa-calendar",
        //     up: "fa fa-chevron-up",
        //     down: "fa fa-chevron-down",
        //     previous: "fa fa-chevron-left",
        //     next: "fa fa-chevron-right",
        //     today: "fa fa-bullseye",
        //     clear: "fa fa-trash",
        //     close: "fa fa-times",
        //   },
        // });
    
        // Load TRX balance and token balance from API
        $.getJSON("https://api.example.com/balance", (data) => {
          setTrxBalance(data.trx);
          setTokenBalance(data.token);
        });
      }, []);
      
      const fetchWalletData = () => {
          // Use jQuery to fetch data from server API
          $.get('/api/walletData', (data) => {
      setWalletAddress(data.walletAddress);
      setTrxBalance(data.trxBalance);
      setTokenBalance(data.tokenBalance);
    });
  };
  
  fetchWalletData();
  const handleRegistration = () => {
    // Handle registration logic
    console.log('Registration submitted!');
  };

  return (
      <div className="container-fluid position-relative d-flex p-0">
        <div className="container-fluid">
          <div
            className="row h-100 align-items-center justify-content-center"
            style={{minheight: '100vh'}}
          >
            <div className="col-12 col-sm-8 col-md-6 col-lg-5 col-xl-6">
              <div className="bg-secondary rounded p-4 p-sm-5 my-4 mx-3">
                <div className="d-flex align-items-center justify-content-between mb-3">
                  <a href="Home.js" className="Home">
                    <img src={logo} height="100" style={{width: '100%'}} alt="logo" />
                  </a>
                </div>
                <div className="mb-3">
                  <label className="form-label">Referral</label>
                  <input
                    type="text"
                    className="form-control"
                    id="sponcer_id"
                    name="sponcer_id"
                    placeholder="Referral Id"
                    value="TRbzZEXSaQSteTrAK8jpNrpL4KD4i5hFu6"
                    readOnly
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Package($)</label>
                  <input
                    type="text"
                    className="form-control"
                    id="spackage"
                    name="spackage"
                    placeholder=""
                    value="30"
                    minValue="30"
                    step="30"
                    style={{color: '#191c24'}}
                    readOnly
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Wallet Address</label>
                  <input
                    type="text"
                    className="form-control"
                    id="walletAddress"
                    placeholder="Wallet Address"
                    readOnly
                  />
                  <input type="hidden" name="trxbalance" id="trxbalance" />
                </div>
                <input type="hidden" id="tokenbalance" />
                <button
                  type="button"
                  className="btn btn-info py-3 w-100 mb-4 regist"
                  onClick={handleRegistration}
                >
                  Sign In
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

export default RegistrationForm;
