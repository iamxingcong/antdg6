import React from 'react';
import { Card } from 'antd';

class A extends React.Component {
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
      const response = await fetch('/os/antvdemo/assets/data/algorithm-category.json')
      const postdata = await response.json()

      this.setState({
        isLoaded: true,
        items: postdata.children
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
           <h1> a </h1>
          {items.map(item => (


            <Card title={item.id} bordered={false} style={{ width: 300 }} key={item.id}>
              {item.children.map(it => (
                <p key={it.id}> {it.id}</p>
              ))}
            </Card>



          ))}
        </div>
      );
    }
  }
}

export default A