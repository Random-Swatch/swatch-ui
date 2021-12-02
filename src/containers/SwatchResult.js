import {connect} from "react-redux";
import Swatch from "../components/Swatch"

const mapStatesToProps = state => ({
    status: state.getSwatchStatus,
    message: state.getSwatchStatusMessage,
    colors: state.colors
})

export default connect(
    mapStatesToProps
)(Swatch)