const style = {
    backgroundColor: "#FAFAFA",
    borderStyle: "solid",
    borderWidth: "1px",
    borderRadius: "12px",
    borderColor: "#E0E0E0",
};

function TodoGroup(props) {
    return (
        <div style={style}>
            <h3>Hoy, 25 de enero del 2025</h3>
            <ul>
                {props.children}
            </ul>
        </div>
    );
}

export { TodoGroup };