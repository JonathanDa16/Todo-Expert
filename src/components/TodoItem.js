const style = {
    backgroundColor: "#FFFFFF",
    borderStyle: "solid",
    borderWidth: "1px",
    borderRadius: "12px",
    borderColor: "#E0E0E0",
    listStyleType: "none",
};

const fontTitleStyle = {
    fontWeight: "bold",
}

const fontSubtitleStyle = {
    color: "#B6B6B6",
}

const verticalLine = {
    borderLeft: '6px solid green',
    height: '80px',
}

function TodoItem() {
    return (
      <li style={style}>
            <p style={fontTitleStyle}>Actividad</p>
            <p style={fontSubtitleStyle}>Categoria</p>
      </li>
    );
}

export { TodoItem };