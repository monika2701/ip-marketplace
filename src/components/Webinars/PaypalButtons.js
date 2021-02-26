import React from "react";
import ReactDOM from "react-dom";
import scriptLoader from "react-async-script-loader";
import Spinner from "./Spinner";
import axios from "axios";

const CLIENT = {
  sandbox:"AZHeHwKmZqpP45kgrLvMhqftoCtYg9Q8FcEW2Pd3rum7Ve3uBph02aD93iPebGsKGhb27JDtfN_J4Acs",
  production:""
};

const CLIENT_ID =
  process.env.NODE_ENV === "production" ? CLIENT.production : CLIENT.sandbox;

let PayPalButton = null;

class PaypalButtons extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showButtons: false,
      loading: true,
      paid: false,
      register_id :localStorage.getItem('reg_id'),
      email: localStorage.getItem('webinarEmail'),
      webinar_name: "Webinar",
      payment_status: null,
      payment_value: "500"
      
      
    };

    window.React = React;
    window.ReactDOM = ReactDOM;
  }

  componentDidMount() {
    const { isScriptLoaded, isScriptLoadSucceed } = this.props;

    if (isScriptLoaded && isScriptLoadSucceed) {
      PayPalButton = window.paypal.Buttons.driver("react", { React, ReactDOM });
      this.setState({ loading: false, showButtons: true });
    }
  }

  componentWillReceiveProps(nextProps) {
    const { isScriptLoaded, isScriptLoadSucceed } = nextProps;

    const scriptJustLoaded =
      !this.state.showButtons && !this.props.isScriptLoaded && isScriptLoaded;

    if (scriptJustLoaded) {
      if (isScriptLoadSucceed) {
        PayPalButton = window.paypal.Buttons.driver("react", {
          React,
          ReactDOM
        });
        this.setState({ loading: false, showButtons: true });
      }
    }
  }
  createOrder = (data, actions) => {
    return actions.order.create({
      purchase_units: [
        {
          description: +"Paid Webinar",
          amount: {
            currency_code: "INR",
            value: 500.0
          }
        }
      ]
    });
  };

  onApprove = (data, actions) => {
    actions.order.capture()
   
    .then(details => {
      const paymentData = {
        payerID: data.payerID,
        orderID: data.orderID
      }
      const payDetails = {
        register_id :this.state.register_id,
        email :this.state.email,
        webinar_name :this.state.webinar_name,
        payment_status :'1',
        payment_value :this.state.payment_value,
      }
      axios.post('https://marketplace.parintekinnovation.com/api/webinar.php?method=WebinarPaymentUpdate ', {payDetails},{
        headers:{
          'Content-Type':'application/json'
        }
      })
     
      .then(response => {
        console.log(response)
      
      })
      console.log("Payment Approved: ", paymentData); 
      this.setState({ showButtons: false, paid: true });
    
    
     
    });
  };

  render() {
    const { showButtons, loading, paid } = this.state;

    return (
      <div className="main">
        {loading && <Spinner />}

        {showButtons && (
          <div>
            <div class="main">
              <h2>Webinar Session Booking</h2><br/>
              <h2>Total checkout Amount INR 500</h2>
            </div>

            <PayPalButton
              createOrder={(data, actions) => this.createOrder(data, actions)}
              onApprove={(data, actions) => this.onApprove(data, actions)}
            />
          </div>
        )}

        {paid && (
          <div className="main">
          
            <h2>
              Congrats! Your seat is booked!{" "}
            </h2>
          </div>
        )}
      </div>
    );
  }
}

export default scriptLoader(`https://www.paypal.com/sdk/js?client-id=${CLIENT_ID}&currency=INR`)(PaypalButtons);