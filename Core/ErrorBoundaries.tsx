
import { Card, Banner, Text, BlockStack } from '@shopify/polaris';
import React from 'react';
import queryString from 'query-string';

class ErrorBoundary extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = { hasError: false, message: '', timer: 3 };
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    static getDerivedStateFromError(error: any) {
        // Update state so the next render will show the fallback UI.
        return { hasError: true };
    }

    componentDidCatch(error: any) {
        // You can also log the error to an error reporting service
        this.setState({ message: error.toString() });
    }

    componentWillUnmount(): void {

    }

    render() {
        const { message } = this.state;
        if (this.state.hasError) {
            if (this?.state?.message?.includes('AppBridgeError') && !this?.props?.di?.globalState?.get('host')) {
                const interval = setInterval(() => {
                    const state = this.state;
                    this.setState({ timer: state.timer - 1 }, () => {
                        console.log(this.state, this.props, "timer");
                        if (this.state.timer == 0) {
                            clearInterval(interval);
                            const queryParams: any = queryString.parse(this?.props?.location?.search) ?? 'null';
                            console.log(this.state, this.props, queryParams, "ErrorBoundary");
                            let url = undefined;
                            let store = queryParams?.username;
                            if (store) {
                                let storeUrl = store.slice(0, store.indexOf(".myshopify"));
                                url = "https://admin.shopify.com/store/" + storeUrl + "/apps" + process.env.REACT_APP_SHOPIFY_APP_BASE;
                            }
                            //set target id to open particular target authorized by the seller
                            if (queryParams?.target_shop_id) url = url + '?' + 'target_shop_id=' + queryParams?.target_shop_id;
                            console.log(url, "url")
                            if (url) {
                                window.location.replace(url);
                            }
                            else window.location.replace('https://admin.shopify.com');
                        }
                    });
                }, 1500);
                return (
                    <div
                        style={{
                            maxWidth: "800px",
                            margin: '128px auto'
                        }}
                    >
                        <Banner
                            title={`Your token has been authorized successfully. Redirecting you in ${this?.state?.timer} in seconds`}
                            tone="success"
                        />
                    </div>
                );
            }
            else {
                return <>
                    <Card >
                        <BlockStack gap="300">
                            <Text as='p'>Something went wrong</Text>
                            <div className="inte-flex intel-flex--align-center intel-flex--distribute-center inte-flex--spacing-Extraloose inte-flex--vertical     ">
                                <div className="inte-flex__item">
                                    <img
                                        src="https://icons-for-free.com/iconfiles/png/512/bug+fixing+fix+repair+seo+spider+tools+icon-1320196668193986777.png"
                                        height="200"
                                    />
                                </div>
                                <div className="inte-flex__item">
                                    <h3 className="inte__Heading--Medium   none">
                                        {message != ''
                                            ? message
                                            : 'Something went wrong.'}
                                    </h3>
                                </div>
                                <div className="inte-flex__item">
                                    <h3 className="inte__text--medium   none">
                                        We are fixing the bug
                                    </h3>
                                </div>
                                <div className="inte-flex__item">
                                    <button
                                        className="inte-btn inte__plain-btn inte-plain-dark-btn"
                                        onClick={() => {
                                            this.props.history(-1);
                                        }}>
                                        <span className="inte__text">Go Back</span>
                                    </button>
                                </div>
                            </div>
                        </BlockStack>
                    </Card>
                </>;
            }
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
