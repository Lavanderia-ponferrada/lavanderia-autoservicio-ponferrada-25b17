import Document from "document";
import {Html, Head, Main, NextScript } from "document";
class AppDocument extends Document {
    render() {
        return(
            <Html lang="en">
                <Head>
                    <meta name="description" content="This is my App description."/>
                </Head>
                <body>
                    <Main></Main>
                    <NextScript></NextScript>
                </body>
            </Html>
        )
    }
}
export default AppDocument