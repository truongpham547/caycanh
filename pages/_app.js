import '../assets/styles/bootstrap.min.css';
import '../assets/styles/fontawesome.min.css';
import '../assets/styles/animate.min.css';
import '../assets/styles/slick.css';
import '../assets/styles/slick-theme.css';
import 'react-toastify/dist/ReactToastify.css';
import 'react-accessible-accordion/dist/fancy-example.css';
import 'react-image-lightbox/style.css';
import '../assets/styles/style.css';
import '../assets/styles/responsive.css';

import { Provider } from 'react-redux';
import App from 'next/app';
import withRedux from 'next-redux-wrapper';
import { initStore } from '../store/reducers/cartReducer';
import { DefaultSeo } from 'next-seo';
import GoTop from '../components/Shared/GoTop';

export default withRedux(initStore)(
    class MyApp extends App {
        
        static async getInitialProps ({ Component, ctx }) {
            return {
                pageProps: Component.getInitialProps
                    ? await Component.getInitialProps(ctx)
                    : {}
            }
        }

        render () {
            const { Component, pageProps, store } = this.props

            return (
                <React.Fragment>
                    <DefaultSeo
                        title="Cây cảnh Trường Sơn"
                        description="chuyên bán các loại cây cảnh phong thủy, cây cảnh để bàn, cây bonsai, chậu cảnh các loại. Chúng tôi cung cấp đa dạng các loại cây cảnh, chậu cảnh với giá thành hợp lý"
                        openGraph={{
                            type: 'website',
                            locale: 'en_IE',
                            url: 'https://novine-react.envytheme.com/',
                            site_name: 'Novine - React Next eCommerce Templates',
                        }}
                    />
                    <Provider store={store}>
                        <Component {...pageProps} />
                    </Provider>
                    <GoTop scrollStepInPx="50" delayInMs="10.50" />
                </React.Fragment>
            );
        }
    }
)