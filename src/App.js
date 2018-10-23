import React, { Component } from 'react';
import './App.css';
import InfiniteScroll from 'react-infinite-scroller';

class App extends Component {
    constructor(props) {
        super(props)

        this.state = {
            items: [...Array(20).keys()]
        }
    }
    render() {
        console.log("size:", this.state.items.length);
        return (
            <InfiniteScroll
                pageStart={0}
                loadMore={() => { this.setState({items: [...this.state.items, this.state.items.length + 1]}) }}
                hasMore={this.state.items.length < 100}
                loader={<div className="loader" > Loading ...</div >}>
                <ul>
                    {
                        this.state.items.map(e => {
                            return <li key={e}>{e}</li>
                        })

                    }
                </ul>

            </InfiniteScroll >
        )
    }
}

export default App;
