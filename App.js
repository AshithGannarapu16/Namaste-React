        import React from "react";
        import ReactDOM from "react-dom/client";  
        
        
        // const heading=React.createElement("h1",{id:"heading"},"Hello world from react.js");
        // const root=ReactDOM.createRoot(document.getElementById("root"));
        // root.render(heading);

        // const Murali=React.createElement("h1",{id:"Murali"},"Hello This is Murali Gannarapu Ashith's Father");
        // const murali=ReactDOM.createRoot(document.getElementById("murali"));
        // murali.render(Murali);

        // const Neeraja=React.createElement("h2",{id:"Neeraja"},"Hello This is Neeraja Ashith's mother");
        // const neeraja=ReactDOM.createRoot(document.getElementById("neeraja"));
        // neeraja.render(Neeraja)

        // const Amulya=React.createElement("h3",{id:"Amulya"},"Hello This Amulya Ashith's sister ");
        // const amulya=ReactDOM.createRoot(document.getElementById("amulya"));
        // amulya.render(Amulya);


        // const Ashith=React.createElement("h4",{id:"Ashith"},"Hello This Ashith Gannarapu");
        // const ashith=ReactDOM.createRoot(document.getElementById("ashith"));
        // ashith.render(Ashith)

        // const parent=React.createElement(
        //     "div",
        //     {
        //         id:"parent"
        //     },[
        //         React.createElement(
        //             "div",{
        //                 id:"child"
        //             },
        //             [React.createElement("h1",{},"This is namaste-reactj"),React.createElement("h2",{},"I'm an h2 tag")]
        //         ),React.createElement(
        //             "div",{
        //                 id:"child2"
        //             },
        //             [React.createElement("h1",{},"I'm an h1 tag"),React.createElement("h2",{},"I'm an h2 tag")]
        //         )
        //     ]
        // );

        // const amul=ReactDOM.createRoot(document.getElementById("amul"));
        // amul.render(parent)

        // const heading=React.createElement("h1",{id:"heading"},"This is after changes ");
        // const root=ReactDOM.createRoot(document.getElementById("root"));
        // root.render(heading);

        // const jsxHeading=(
        //     <h1 className="head" tabIndex="5">
        //         Namaste React using JSX
        //     </h1>
        // )

        // console.log(jsxHeading);

        // const root=ReactDOM.createRoot(document.getElementById("root"));
        // root.render(jsxHeading);

        

        const Title=()=>{
           return( <div>
                <h1 className="head" tabIndex="5">Namaste React using jsx</h1>
            </div>
           )
        };

        const Ashith=()=>{
            return(
                <>
                <h1 className="body" tabIndex={5}>Hello From Ashith Gannarapu</h1>
                </>
            )
        };

        const visual=<span>React Element</span>

        const Amulya=()=>{
            return(
                <div className="" tabIndex="">
                    {visual}
                    HELLO THIS IS AMULYA GANNARAPU
                </div>
            )
        }

        const HeadingComponent=()=>{
            return(
            <div id="container">
                <Title/>
                <Ashith/>
                <Amulya/>
                <Amulya/>
                <Amulya/>
            <h1 className="heading">Namaste React from functional component</h1>
            </div>
            );
        };
        const root=ReactDOM.createRoot(document.getElementById("root"));
        root.render(<HeadingComponent />);
