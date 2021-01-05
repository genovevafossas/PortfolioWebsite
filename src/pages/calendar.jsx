import React from 'react';
import Header from '../components/header';
import Helmet from '../components/helmet';

export default function Calendar() {
    return (
        <div>
            <Helmet/>
            <Header />
            <section className="section py-3">
                <div className="container">
                    <div className="notification has-text-centered">
                        <iframe 
                            title="calendar"
                            src="https://calendar.google.com/calendar/embed?height=600&amp;wkst=1&amp;bgcolor=%23f5f5f5&amp;ctz=America%2FNew_York&amp;src=Z2Zvc3NhczdAZ21haWwuY29t&amp;src=aHZrMm01NWRkZW43N2hnbWRxdWltY2Znc2dAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;src=amJwbWljNnBpdWJvZTNmcWFsdnZnMjdmbmtAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;src=aXVtODcxbXAza21uamkyaW9qa25zbnFpZ2tAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;src=Z2Vub2Zvc3Nhc0BnbWFpbC5jb20&amp;color=%2341521f&amp;color=%235f464b&amp;color=%23494949&amp;color=%23a89f68&amp;color=%238e4a49&amp;showTitle=0&amp;showNav=1&amp;showPrint=0&amp;showTabs=1&amp;showCalendars=0&amp;mode=WEEK"
                            width="800"
                            height="600"
                            frameborder="0"
                            scrolling="no"
                        />
                    </div>
                </div>
            </section>
        </div>
    );
}