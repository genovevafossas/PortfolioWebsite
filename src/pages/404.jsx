import React from 'react';
import '../styles/404.scss'

export default function NotFound() {
    return(
        <div className="not-found-div">
            <p>
                <h1 style={{fontSize:58}}>404: Not Found</h1>
                You've found a page that doesn't exist. Unfortunate. :( Wanna return back to the main page?

                <p>
                    <br/>
                    <a href="https://genovevafossas.com"> Yes, take me back.</a>
                    <br/>
                    <a href="https://www.boredbutton.com/"> I dunno, I kinda wanna go on an adventure...</a>
                </p>
                
                <br/>
                <img
                    title="Image courtesy of http.cat"
                    src="http://http.cat/404.jpg"
                    alt="Demotivational poster of a cat hiding under paper. The text reads: 404: Not Found"
                />
            </p>
        </div>
    );
}
