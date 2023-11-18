
function Header(props){
    return(
        <>
          <header style={{
            fontSize: "30px",
            textAlign: "center"
          }}>{props.title}</header>
        </>
    )
}

export default Header