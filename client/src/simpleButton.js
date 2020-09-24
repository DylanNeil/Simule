import styled from "styled-components";
import Button from "@material-ui/core/Button";

export default styled(Button)`
  && {
    color: white;
    background-color: blue;
    padding:.3em;
    &&:hover{
      background-color:teal;
    }
  }
`;