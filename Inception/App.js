/**
 * 
 * *<div id="parent">
 * <div id="child">
 * <h1>I'm h1 tag</h1>
 * <h2>I'm h2vtag</h2>
 * </div>
 * <div id="child2">
 * <h1>I'm h1 tag</h1>
 * <h2>I'm h2 tag</h2>
 * </div>
 * </div>
 * *
 * 
 * 
 */
const parent = React.createElement("div", { id: "parent" }, [
    React.createElement("div", { id: "child" }, [
        React.createElement("h1", {}, "I'm h1 tag"),
        React.createElement("h2", {}, "I'm h2 tag"),
    ]),
    React.createElement("div", { id: "child2" }, [
        React.createElement("h1", {}, "I'm h1 tag"),
        React.createElement("h2", {}, "I'm h2 tag"),
    ]),
    
]);

console.log(parent);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);


// const heading=React.createElement("h1",{
//     id:"heading",x:"a"},"Hello world! From React!");
//     console.log(heading);

//         const root=ReactDOM.createRoot(document.getElementById("root"));
//         root.render(heading);

//         const branching=React.createElement("h1",{id:"branching",y:"b"},"Hello world! From Branch!");
//         console.log(branching)
//         const branch=ReactDOM.createRoot(document.getElementById("branch"));

//         branch.render(branching);

//         const mamas=React.createElement("h1",{id:"mamas",z:"c"},"Hello world! From Mama!");
//         console.log(mamas);
//         const mama=ReactDOM.createRoot(document.getElementById("mama"));
//         mama.render(mamas);
        const ammaa=React.craeteElement("h1",{},"Hello ashith from Ammma");
        const amma= ReactDOM.createRoot(document.getElementById("Amma"));
        amma.render(ammaa)

        const ammaaa=React.craeteElement("h1",{},"Hello ashith from Ammma");
        const ammas= ReactDOM.createRoot(document.getElementById("Ammas"));
        amma.render(ammaaa)