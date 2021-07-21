import React from 'react';


class Z extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  componentDidMount() {

    const getRates = async () => {
      const response = await fetch('https://gw.alipayobjects.com/os/basement_prod/6cae02ab-4c29-44b2-b1fd-4005688febcb.json')
      const postdata = await response.json()

      this.setState({
        isLoaded: true,
        items: postdata
      });
    }

    getRates();

  }

  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div className="content">
          { JSON.stringify(items) }
        </div>
      );
    }
  }
}

export default Z