import React from "react";
import PropTypes from "prop-types";
import OutsideAlerter from "./OutsideAlerter";

class EditableText extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.value || "",
      editingMode: false
    };
  }
  componentDidMount() {
    document.addEventListener("mousedown", this.handleClickOutside);
  }
  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClickOutside);
  }
  onClick() {
    this.setState({ editingMode: true });
  }
  onChange(event) {
    this.setState({ value: event.target.value });
  }
  onDone() {
    this.props.onChange(this.state.value);
  }
  onClickOutside() {
    this.setState({ editingMode: false }, () => {
      this.onDone();
    });
  }
  render() {
    return (
      <span onClick={this.onClick.bind(this)}>
        <OutsideAlerter onClickOutside={this.onClickOutside.bind(this)}>
          {this.state.editingMode ? (
            <input
              type="text"
              value={this.state.value}
              onChange={this.onChange.bind(this)}
            />
          ) : (
            <h3 style={{ display: "inline" }}>{this.state.value}</h3>
          )}
        </OutsideAlerter>
      </span>
    );
  }
}

EditableText.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func
};

export default EditableText;
