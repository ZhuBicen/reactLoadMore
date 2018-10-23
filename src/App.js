import React, { Component } from 'react';
import './App.css';
import WeUI from 'react-weui'
import 'weui';
import 'react-weui/build/packages/react-weui.css';
const {
    InfiniteLoader,
    Cells,
    CellsTitle,
    Cell,
    CellBody,
    CellFooter,
    Page
} = WeUI
class App extends Component {
    constructor(props) {
        super(props)

        this.state = {
            items: [...Array(20).keys()]
        }
    }
    render() {
        return (
            <InfiniteLoader
                onLoadMore={(resolve, finish) => {
                    console.log("onLoadMore");
                    //mock request
                    setTimeout(() => {
                        if (this.state.items.length > 22) {
                            finish()
                        } else {
                            this.setState({
                                items: this.state.items.concat([this.state.items.length])
                            }, () => resolve())
                        }
                    }, 1000)
                }}

                onScroll= {()=> {
                    console.log('onScroll');
                }}

                onScrollEnd={ ()=> {
                    console.log('onScrollEnd');
                }}
            >
                <Page className="infinite" title="Infinite Loader" subTitle="滚动加载" >

                    <CellsTitle>List with 22 Max</CellsTitle>
                    <Cells>
                        {
                            this.state.items.map((item, i) => {
                                return (
                                    <Cell href="javascript:;" key={i} access>
                                        <CellBody>
                                            {item}
                                        </CellBody>
                                        <CellFooter />
                                    </Cell>
                                )
                            })
                        }
                    </Cells>

                </Page>
            </InfiniteLoader>
        )
    }
}

export default App;
