import React, { Component, FC } from 'react';
import Logo from 'images/apple-white.svg';

import './WithSplashScreen.css';

function ShowSplashScreen() {
  return (
    <div id="splashScreen" className="splashScreen">
      <div className="splashScreen__content">
        <img src={Logo} alt="Apple" />
        <h1>
          Media <span>Explorer</span>
        </h1>
      </div>
    </div>
  );
}

export function WithSplashScreen(WrappedComponent: FC) {
  return class extends Component<{}, { loading: boolean }> {
    constructor(props: any) {
      super(props);
      this.state = {
        loading: true,
      };
    }

    componentDidMount() {
      const splashScreenElm: HTMLElement | null = document.getElementById(
        'splashScreen',
      );
      setTimeout(() => {
        if (splashScreenElm) {
          splashScreenElm.classList.add('splashScreen--loaded');
        }
        setTimeout(() => {
          this.setState({
            loading: false,
          });
        }, 1000);
      }, 1500);
    }

    render() {
      if (this.state.loading) return ShowSplashScreen();
      return <WrappedComponent {...this.props} />;
    }
  };
}
